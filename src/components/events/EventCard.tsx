import { motion } from "framer-motion";

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
        <div className="flex items-center justify-between">
          <span className="text-wood font-medium">{date}</span>
          <button
            onClick={onSelect}
            className="bg-wood hover:bg-wood-dark text-white px-4 py-2 rounded transition-colors"
          >
            Réserver
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;