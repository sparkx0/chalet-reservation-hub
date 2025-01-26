import { motion } from "framer-motion";

const ActivityHero = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/0ce6cff6-6aba-49e0-9e8a-45515a175135.png"
          alt="Vue panoramique des montagnes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-white mt-20"
        >
          <h1 className="text-5xl md:text-7xl font-serif mb-6">
            Découvrez les Alpes
          </h1>
          <p className="text-xl md:text-2xl text-snow-light mb-8">
            Entre Genève et Annecy, une multitude d'activités vous attend tout au long de l'année
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ActivityHero;