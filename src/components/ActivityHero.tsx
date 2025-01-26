import { motion } from "framer-motion";

const ActivityHero = () => {
  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/0ce6cff6-6aba-49e0-9e8a-45515a175135.png"
          alt="Vue panoramique du Mont Salève"
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