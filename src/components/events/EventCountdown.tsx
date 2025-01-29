import { useState, useEffect } from "react";
import { parse, differenceInSeconds } from "date-fns";
import { fr } from "date-fns/locale";

interface EventCountdownProps {
  date: string;
  onExpire: () => void;
}

const EventCountdown = ({ date, onExpire }: EventCountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<string>("");

  useEffect(() => {
    const calculateTimeLeft = () => {
      try {
        const eventDate = parse(date, "d MMMM yyyy", new Date(), { locale: fr });
        const now = new Date();
        const diffInSeconds = differenceInSeconds(eventDate, now);

        if (diffInSeconds <= 0) {
          onExpire();
          return;
        }

        const days = Math.floor(diffInSeconds / (24 * 60 * 60));
        const hours = Math.floor((diffInSeconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((diffInSeconds % (60 * 60)) / 60);
        const seconds = diffInSeconds % 60;

        setTimeLeft(`${days}j ${hours}h ${minutes}m ${seconds}s`);
      } catch (error) {
        console.error("Error parsing date:", error);
        onExpire();
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, [date, onExpire]);

  return timeLeft ? (
    <div className="text-sm font-mono bg-wood/10 px-3 py-1 rounded-full text-wood-dark">
      {timeLeft}
    </div>
  ) : null;
};

export default EventCountdown;