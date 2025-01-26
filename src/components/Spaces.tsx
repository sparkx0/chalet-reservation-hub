import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Spaces = () => {
  return (
    <section id="espaces" className="py-24 bg-snow">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-wood-dark">
            Les Espaces
          </h2>
          <p className="text-lg text-wood-dark/80 max-w-2xl mx-auto">
            Découvrez nos espaces conçus pour votre confort et votre bien-être
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
              <img
                src="/lovable-uploads/37aa1fba-d804-4af0-b331-1dbeb3db8939.png"
                alt="Salon-séjour du chalet"
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-serif mt-4 mb-2 text-wood-dark">
              Le chalet du Salève
            </h3>
            <p className="text-wood-dark/80 mb-4">
              Chalet d'exception niché à 970 mètres d'altitude vue sur les Alpes
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
              <img
                src="/lovable-uploads/1fa5ade7-9389-4844-87eb-72a28c18610c.png"
                alt="Piscine"
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-serif mt-4 mb-2 text-wood-dark">
              Piscine
            </h3>
            <p className="text-wood-dark/80 mb-4">
              Une piscine chauffée avec vue panoramique sur les Alpes
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
              <img
                src="/lovable-uploads/e648d43b-e0c4-443d-b120-43117be90e8e.png"
                alt="Panorama époustouflant"
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-serif mt-4 mb-2 text-wood-dark">
              Panorama époustouflant
            </h3>
            <p className="text-wood-dark/80 mb-4">
              Une vue imprenable sur les Alpes depuis votre terrasse privative
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
              <img
                src="/lovable-uploads/4d342c91-ceb6-4141-a701-6f69d7172cd8.png"
                alt="Sauna"
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-serif mt-4 mb-2 text-wood-dark">
              Sauna
            </h3>
            <p className="text-wood-dark/80 mb-4">
              Un sauna privé pour des moments de détente et de bien-être
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
              <img
                src="/lovable-uploads/d7bfbf16-f70b-4310-8b52-e8e1798c2a04.png"
                alt="Salle de sport"
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-serif mt-4 mb-2 text-wood-dark">
              Chambres
            </h3>
            <p className="text-wood-dark/80 mb-4">
              7 chambres luxueuses avec vue sur les montagnes, pouvant accueillir jusqu'à 14 personnes
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link to="/spa">
            <Button
              variant="outline"
              className="bg-transparent border-2 border-wood text-wood hover:bg-wood hover:text-white transition-colors duration-300"
            >
              Découvrir tous nos espaces
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Spaces;