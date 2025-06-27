import { useEffect, useState } from "react";
import { TimeProps } from "./types"
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from 'dayjs/plugin/timezone';
dayjs.extend(utc);
dayjs.extend(timezone);
export function useTime(props?: TimeProps) {
    const {
        timeToConvert,
        targetFormat = 'YYYY-MM-DD HH:mm:ss',
        followSystemTime = true,
        timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    } = props || {};
    const [formattedTime, setFormattedTime] = useState<string>("");
    useEffect(() => {
        let timer: ReturnType<typeof setInterval> | null = null;
        const updateTime = () => {
            if(timeToConvert) {
                setFormattedTime(dayjs(timeToConvert).tz(timeZone).format(targetFormat))
            }else {
                setFormattedTime(dayjs().format(targetFormat));
            }
        }
        
        if(followSystemTime) {
            timer = setInterval(updateTime, 1000);
        }
        
        return () => {
            if (timer) clearInterval(timer);
        }
    }, [timeToConvert,targetFormat,followSystemTime,timeZone]);
  return formattedTime;
}