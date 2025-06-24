import { useState } from 'react';
import { useNamespace } from './hooks';
import './main.css';


export function Main() {
  const [num, setNum] = useState(0)
  const [ prefix, setPrefix ] = useState('trove')
  const { name, tocpn } = useNamespace({ type: 'main', prefix })
  return (
    <>
      <div>{name}</div>
      <div>{tocpn}</div>
      <div>{num}</div>
      <button onClick={() => setNum(num + 1)}>点击</button>
      <button onClick={() => setPrefix('')}>舍弃前缀</button>
    </>
  );
}
