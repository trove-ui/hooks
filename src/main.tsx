import { useEffect } from 'react';
import useCountdown from './hooks/useCountdown';
import './main.css';


export function Main() {
  const { countDown, start, isRunning } = useCountdown({ stopWhen: 0, initial: 5000, clockwise: false, autoStart: true });

  return (
    <div>
      {countDown / 1000}
      <div>
        <button
          onClick={start}
          disabled={isRunning}
        >
          send
        </button>
      </div>
    </div>
  );
}
