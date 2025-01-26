import { motion } from "framer-motion";
import AmenityCard from "./details/AmenityCard";
import Description from "./details/Description";
import { amenities } from "./details/amenitiesData";

const Details = () => {
  return (
    <section className="py-20 bg-snow">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-serif text-wood-dark text-center mb-12">
            Le Chalet en détail
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((item, index) => (
              <AmenityCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </div>

          <Description />
        </motion.div>
      </div>
    </section>
  );
};

export default Details;