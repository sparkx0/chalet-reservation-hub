import { motion } from "framer-motion";
import RoomCard from "./RoomCard";
import { rooms } from "./roomsData";

const RoomsList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {rooms.map((room, index) => (
        <motion.div
          key={room.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <RoomCard room={room} />
        </motion.div>
      ))}
    </div>
  );
};

export default RoomsList;