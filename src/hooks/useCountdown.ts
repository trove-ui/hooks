import { useEffect, useState } from 'react'
import { CountdownProps } from './types'

export default function useCountdown(props?: CountdownProps) {
  const {
    initial = 0,
    interval =1000,
    clockwise = true,
    autoStart = false,
    stopWhen = 60000
  } = props || {}
  const [countDown, setCountDown] = useState(initial)
  const [isRunning, setIsRunning] = useState(false)
  const [intervalId, setIntervalId] = useState<number | null>(null)

  useEffect(() => {
    console.log('isRunning', isRunning)
    
  }, [isRunning])

  const start = () => {
    const count = clockwise ? 1000 : -1000
    if (!isRunning) {
      setIsRunning(true)
      const id = setInterval(() => {
        setCountDown((countDown) => {
          if (countDown * 1000 - stopWhen === 0) {
            setIsRunning(false)
            clearInterval(id)
            setIntervalId(null)
            return countDown
          }
          return countDown + count
        })
      }, interval)
      setIntervalId(id)
    }
  }

  const stop = () => {
    if (isRunning) {
      setIsRunning(false)
      if (intervalId) {
        clearInterval(intervalId)
        setIntervalId(null)
      }
    }
  }

  const reset = () => {
    // stop();
    setCountDown(initial)
  }

  useEffect(() => {
    if (autoStart) {
      start()
    }
  }, [])

  return {
    countDown,
    isRunning,
    start,
    stop,
    reset
  }
}
