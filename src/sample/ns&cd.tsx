import { useMemo, useState } from 'react'
import useCountdown from '../hooks/useCountdown'
import './main.css'
import { useNamespace } from '../hooks'


export function Main() {
  const ns = useNamespace()
  const [isSend, setIsSend] = useState(false)

  const { countDown, start, isRunning, reset, stop } = useCountdown({ stopWhen: 0, initial: 5000, clockwise: false })

  const handleClick = () => {
    if (countDown === 0) {
      reset()
    }
    start()
    setIsSend(true)
  }

  const btnText = useMemo(() => {
    if (!isSend) {
      return '发送验证码'
    }
    if (isRunning) {
      return `已发送（${countDown / 1000}）`
    }
    return '重新发送'
  }, [isSend, isRunning, countDown])
  return (
    <div
      className={
        ns.cls(
          'flex',
          'gap-8',
          'align-center'
        )
      }
    >
      { countDown / 1000 }
      <button
        onClick={handleClick}
        disabled={isRunning}
      >
        { btnText }
      </button>
      <button onClick={stop}>暂停计时</button>
    </div>
  )
}
