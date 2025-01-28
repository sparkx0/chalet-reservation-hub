import { useState, useEffect } from "react";
import { format } from "date-fns";
import { formatInTimeZone } from 'date-fns-tz';

const timezones = [
  { name: "New York", timezone: "America/New_York" },
  { name: "Paris", timezone: "Europe/Paris" },
  { name: "Moscow", timezone: "Europe/Moscow" },
  { name: "Hong Kong", timezone: "Asia/Hong_Kong" },
];

const WorldClock = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-6 justify-center py-4 bg-wood-light/5">
      {timezones.map((tz) => (
        <div key={tz.timezone} className="text-center">
          <p className="text-sm text-wood-dark/80">{tz.name}</p>
          <p className="font-mono text-wood-dark">
            {formatInTimeZone(time, tz.timezone, 'HH:mm')}
          </p>
        </div>
      ))}
    </div>
  );
};

export default WorldClock;