import { motion } from "framer-motion";

const spaces = [
  {
    title: "Salon-Séjour",
    description: "Espace de vie de 120m² avec cheminée traditionnelle",
    image: "/lovable-uploads/a0abb74c-40ab-46eb-98b4-1744434757a9.png",
  },
  {
    title: "Chambres",
    description: "7 chambres au charme authentique",
    image: "/lovable-uploads/d7bfbf16-f70b-4310-8b52-e8e1798c2a04.png",
  },
  {
    title: "Vue Panoramique",
    description: "Vue exceptionnelle sur le massif des Alpes",
    image: "/lovable-uploads/0ce6cff6-6aba-49e0-9e8a-45515a175135.png",
  },
];

const Spaces = () => {
  return (
    <section id="espaces" className="py-24 bg-snow">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-wood-dark mb-6">
            Un lieu d'exception
          </h2>
          <p className="text-stone-dark max-w-2xl mx-auto text-lg">
            Découvrez les espaces de vie de notre chalet, où tradition et confort moderne se rencontrent
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {spaces.map((space, index) => (
            <motion.div
              key={space.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl shadow-xl aspect-[4/5]"
            >
              <div className="absolute inset-0">
                <img
                  src={space.image}
                  alt={space.title}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl font-serif mb-3 transform group-hover:translate-y-0 transition-transform duration-300">
                  {space.title}
                </h3>
                <p className="text-snow-light transform group-hover:translate-y-0 transition-transform duration-300">
                  {space.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Spaces;