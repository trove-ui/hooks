import { useTimer } from '../hooks/useTimer'

export default function Timer() {
  const { formatText, period } = useTimer({ format: 'YYYY-MM-DD HH:mm:ss', time: new Date() })

  return (
    <div>
      <div>{ period }</div>
      <div>{ formatText }</div>
    </div>
  )
}
