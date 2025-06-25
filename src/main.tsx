import { useMemo, useState } from 'react';
import useCountdown from './hooks/useCountdown';
import './main.css';


export function Main() {
  const [isSend, setIsSend] = useState(false);

  const { countDown, start, isRunning, reset } = useCountdown({ stopWhen: 0, initial: 5000, clockwise: false });

  const handleClick = () => {
    if (countDown === 0) {
      reset();
    }
    start();
    setIsSend(true);
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
    <div>
      <button
        onClick={handleClick}
        disabled={isRunning}
      >
        { btnText }
      </button>
    </div>
  );
}
