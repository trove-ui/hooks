import { useNamespace } from './hooks';
import './main.css';


export function Main() {
  const ns = useNamespace({ type: 'main', prefix: 'trove', separator: '' })

  const items = [
    {
      key: '字符串组合',
      value: ns.name
    },
    {
      key: '小驼峰写法',
      value: ns.toCamelCase()
    },
    {
      key: '大坨峰写法',
      value: ns.toPascalCase()
    },
    {
      key: '纯小写',
      value: ns.toLowerCase()
    },
    {
      key: '纯大写',
      value: ns.toUpperCase()
    },
    {
      key: '组合类名',
      value: ns.cls('flex', 'flex-col')
    }
  ]

  return (
    <div
      className={
        ns.cls(
          ns.name,
          'flex',
          'flex-col'
        )
      }
    >
      {
        items.map((item) => (
          <div
            className={
              ns.cls(
                'flex',
                'gap-8',
                'align-center'
              )
            }
          >
            <h3>{item.key}</h3>
            <p>{item.value}</p>
          </div>
        ))
      }
    </div>
  );
}
