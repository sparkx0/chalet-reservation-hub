import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/lovable-uploads/4d342c91-ceb6-4141-a701-6f69d7172cd8.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-serif mb-6">
            Le Chalet du Salève
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-snow-light">
            Un chalet d'exception vieux de 250 ans entre Genève et Annecy
          </p>
          <a
            href="#reservation"
            className="inline-block bg-wood hover:bg-wood-dark text-white px-8 py-4 rounded-full transition-colors duration-300"
          >
            Réserver maintenant
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 rounded-full bg-white/50" />
      </div>
    </div>
  );
};

export default Hero;