import Navigation from "@/components/Navigation";
import RoomsList from "@/components/rooms/RoomsList";
import { motion } from "framer-motion";

const Rooms = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-snow pt-24">
        <div className="container mx-auto px-4 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif text-wood-dark text-center mb-12">
              Nos Chambres
            </h1>
            <RoomsList />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Rooms;