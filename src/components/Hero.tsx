import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/lovable-uploads/4d342c91-ceb6-4141-a701-6f69d7172cd8.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />
      </div>

      <div className="relative h-full flex items-center justify-center text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-serif mb-8">
            Le Chalet du Salève
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-snow-light font-light">
            Une expérience authentique dans un chalet d'exception
          </p>
          <p className="text-lg md:text-xl mb-12 text-snow-light/90 font-light">
            Entre Genève et Annecy · Vue panoramique sur les Alpes
          </p>
          <motion.a
            href="#reservation"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-wood hover:bg-wood-dark text-white px-8 py-4 rounded-full transition-colors duration-300 text-lg"
          >
            Réserver votre séjour
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
      >
        <a href="#espaces" className="flex flex-col items-center gap-2">
          <span className="text-sm font-light">Découvrir</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;