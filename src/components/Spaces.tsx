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
              Salon-Séjour
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
                src="/lovable-uploads/another-image.png"
                alt="Chambre"
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-serif mt-4 mb-2 text-wood-dark">
              Chambre
            </h3>
            <p className="text-wood-dark/80 mb-4">
              Une chambre confortable avec vue sur les montagnes.
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
                src="/lovable-uploads/another-image-2.png"
                alt="Salle de bain"
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-serif mt-4 mb-2 text-wood-dark">
              Salle de bain
            </h3>
            <p className="text-wood-dark/80 mb-4">
              Salle de bain moderne avec toutes les commodités.
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
