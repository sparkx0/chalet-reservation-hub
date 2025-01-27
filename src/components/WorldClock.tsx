import { useState, useEffect } from "react";
import { format } from "date-fns";

const timezones = [
  { name: "Paris", timezone: "Europe/Paris" },
  { name: "New York", timezone: "America/New_York" },
  { name: "Tokyo", timezone: "Asia/Tokyo" },
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
            {format(time, "HH:mm")}
          </p>
        </div>
      ))}
    </div>
  );
};

export default WorldClock;