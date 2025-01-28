import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import PrivateBooking from "@/components/privatization/PrivateBooking";
import PrivateFeatures from "@/components/privatization/PrivateFeatures";

const PrivatePool = () => {
  return (
    <div className="min-h-screen bg-snow">
      <Navigation />
      <div className="pt-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative h-[60vh] mb-20"
        >
          <div className="absolute inset-0">
            <img
              src="/lovable-uploads/1fa5ade7-9389-4844-87eb-72a28c18610c.png"
              alt="Piscine privative"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative h-full flex items-center justify-center text-center">
            <div className="max-w-4xl mx-auto px-4">
              <h1 className="text-5xl font-serif text-white mb-6">
                Piscine & Location Privative
              </h1>
              <p className="text-xl text-snow-light">
                Une expérience exclusive dans un cadre d'exception
              </p>
            </div>
          </div>
        </motion.div>

        <PrivateFeatures />
        <PrivateBooking />
      </div>
    </div>
  );
};

export default PrivatePool;