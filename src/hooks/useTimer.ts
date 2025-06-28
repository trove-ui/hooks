import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

import { sleep } from '../utils/sleep'
import { useEffect, useState, useCallback } from 'react'
import { useUpdateEffect } from './useUpdateEffect'

import type { TimerProps, Timer } from './types'


dayjs.extend(utc)
dayjs.extend(timezone)

export const useTimer = (props?: TimerProps): Timer => {
  const {
    format,
    timezone,
    definePeriod,
    update = true,
    time = new Date()
  } = props || {}
  const [period, setPeriod] = useState<string>('')
  const [formatText, setFormatText] = useState('')

  const updateTime = useCallback((previousTime?: Date) => {
    const thatTime = previousTime || time
    if (thatTime && !dayjs(thatTime).isValid()) {
      throw new Error(thatTime.toString())
    }
    const date = dayjs(thatTime).tz(timezone).format(format)
    const thatPeriod = definePeriod ? definePeriod(thatTime) : dayjs(thatTime).format('A')
    if (thatPeriod) {
      setPeriod(thatPeriod)
    }
    setFormatText(date)
  }, [time, timezone, format, definePeriod])

  /**
   * 首次直接渲染时间
   */
  useEffect(() => {
    updateTime()
  }, [updateTime])

  useUpdateEffect(() => {
    if (update) {
      sleep(1000).then(() => updateTime(new Date()))
    }
  }, [formatText])

  return {
    period,
    formatText
  }
}
