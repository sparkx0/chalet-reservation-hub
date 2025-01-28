import { motion } from "framer-motion";

const ActivityHero = () => {
  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/d5a85a86-405f-46af-94e2-1c7c6465d6e6.png"
          alt="Vue panoramique depuis le téléphérique du Salève sur Genève et le lac Léman"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
            Activités & Découvertes
          </h1>
          <p className="text-xl text-snow-light max-w-2xl mx-auto">
            Explorez les richesses naturelles et culturelles du Mont Salève, véritable terrain de jeu pour les amateurs d'activités outdoor et de découvertes
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ActivityHero;