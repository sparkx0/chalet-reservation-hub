
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Spaces from "@/components/Spaces";
import Details from "@/components/Details";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Details />
      <Spaces />
      <section className="py-20 bg-wood-light/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-serif text-wood-dark mb-6">
              Organisez Votre Événement Privé
            </h2>
            <p className="text-lg text-stone-dark mb-8">
              Découvrez nos espaces exceptionnels pour vos événements privés : mariages, séminaires, 
              fêtes de famille et plus encore.
            </p>
            <Link
              to="/private-events"
              className="inline-block bg-wood hover:bg-wood-dark text-white px-8 py-4 rounded-lg transition-colors duration-300"
            >
              Réserver un Événement
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
