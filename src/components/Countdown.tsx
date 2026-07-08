import { useEffect, useRef, useState } from 'react';
import { WEDDING_DATE } from '../data/content';
import './Countdown.css';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const diff = WEDDING_DATE.getTime() - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return n.toString().padStart(2, '0');
}

export default function Countdown() {
  const [time, setTime] = useState<TimeLeft>(getTimeLeft);
  const [tickKey, setTickKey] = useState(0);
  const prevSeconds = useRef(time.seconds);

  useEffect(() => {
    const id = setInterval(() => {
      const next = getTimeLeft();
      if (next.seconds !== prevSeconds.current) {
        prevSeconds.current = next.seconds;
        setTickKey((k) => k + 1);
      }
      setTime(next);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { value: time.days, label: 'Days', tick: false },
    { value: pad(time.hours), label: 'Hours', tick: false },
    { value: pad(time.minutes), label: 'Minutes', tick: false },
    { value: pad(time.seconds), label: 'Seconds', tick: true },
  ];

  return (
    <div className="countdown">
      {units.map((unit) => (
        <div key={unit.label} className="countdown__unit">
          <span
            className={`countdown__value cinzel ${unit.tick ? 'countdown__value--tick' : ''}`}
            key={unit.tick ? `${unit.label}-${tickKey}` : unit.label}
          >
            {unit.value}
          </span>
          <span className="countdown__label">{unit.label}</span>
        </div>
      ))}
    </div>
  );
}
