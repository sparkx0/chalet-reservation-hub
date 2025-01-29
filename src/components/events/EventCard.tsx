import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { format, parse, differenceInSeconds } from "date-fns";
import { fr } from "date-fns/locale";

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  image: string;
  description: string;
  price: string;
  onSelect: () => void;
}

const EventCard = ({
  title,
  date,
  image,
  description,
  price,
  onSelect,
}: EventCardProps) => {
  const [timeLeft, setTimeLeft] = useState<string>("");
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      try {
        // Parse the date string to a Date object
        const eventDate = parse(date, "d MMMM yyyy", new Date(), { locale: fr });
        const now = new Date();
        const diffInSeconds = differenceInSeconds(eventDate, now);

        if (diffInSeconds <= 0) {
          setIsExpired(true);
          return;
        }

        const days = Math.floor(diffInSeconds / (24 * 60 * 60));
        const hours = Math.floor((diffInSeconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((diffInSeconds % (60 * 60)) / 60);
        const seconds = diffInSeconds % 60;

        setTimeLeft(`${days}j ${hours}h ${minutes}m ${seconds}s`);
      } catch (error) {
        console.error("Error parsing date:", error);
        setIsExpired(true);
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, [date]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-wood text-white px-3 py-1 rounded-full text-sm">
          {price}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif text-wood-dark mb-2">{title}</h3>
        <p className="text-stone-dark mb-4">{description}</p>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-wood font-medium">{date}</span>
            {!isExpired ? (
              <div className="text-sm font-mono bg-wood/10 px-3 py-1 rounded-full text-wood-dark">
                {timeLeft}
              </div>
            ) : null}
          </div>
          {!isExpired ? (
            <button
              onClick={onSelect}
              className="bg-wood hover:bg-wood-dark text-white px-4 py-2 rounded transition-colors w-full"
            >
              Réserver
            </button>
          ) : (
            <Link
              to="/contact"
              className="group relative overflow-hidden bg-gradient-to-r from-wood to-wood-dark text-white px-4 py-3 rounded text-center transition-all duration-300 hover:shadow-lg"
            >
              <span className="relative z-10 font-medium">
                Date expirée - Nous contacter
              </span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;