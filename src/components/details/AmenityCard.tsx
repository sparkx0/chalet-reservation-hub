import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AmenityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const AmenityCard = ({ icon, title, description, index }: AmenityCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <div className="text-wood mb-4">{icon}</div>
      <h3 className="text-xl font-serif text-wood-dark mb-2">{title}</h3>
      <p className="text-stone-dark">{description}</p>
    </motion.div>
  );
};

export default AmenityCard;