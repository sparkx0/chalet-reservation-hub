import Navigation from "@/components/Navigation";
import RoomsList from "@/components/rooms/RoomsList";
import { motion } from "framer-motion";

const Rooms = () => {
  return (
    <div className="min-h-screen bg-snow">
      <Navigation />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif text-wood-dark text-center mb-4">
              Nos Chambres
            </h1>
            <p className="text-center text-wood-dark/80 mb-12">
              Route du Salève, 74350 LE SAPPEY
            </p>
            <RoomsList />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;