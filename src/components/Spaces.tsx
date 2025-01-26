import { motion } from "framer-motion";

const spaces = [
  {
    title: "Salon-Séjour",
    description: "Espace de vie de 120m² avec cheminée ouverte",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
  },
  {
    title: "Chambres",
    description: "7 chambres confortables et élégantes",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
  },
  {
    title: "Piscine & Bien-être",
    description: "Piscine intérieure chauffée et sauna",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
  },
];

const Spaces = () => {
  return (
    <section id="espaces" className="py-20 bg-snow">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif text-wood-dark mb-4">
            Nos Espaces
          </h2>
          <p className="text-stone-dark max-w-2xl mx-auto">
            Découvrez nos espaces de vie luxueux, conçus pour votre confort et
            votre bien-être
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
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={space.image}
                  alt={space.title}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-serif text-white mb-2">
                    {space.title}
                  </h3>
                  <p className="text-snow-light">{space.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Spaces;