import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const attractions = [
  {
    title: "Le Salève",
    description: "Surnommée la « Balcon de Genève », cette montagne offre une vue imprenable sur le lac Léman et le Mont-Blanc.",
    image: "/lovable-uploads/0ce6cff6-6aba-49e0-9e8a-45515a175135.png",
    distance: "5 min"
  },
  {
    title: "Lac d'Annecy",
    description: "L'un des lacs les plus purs d'Europe, parfait pour la baignade, les sports nautiques ou simplement la détente.",
    image: "/lovable-uploads/a0abb74c-40ab-46eb-98b4-1744434757a9.png",
    distance: "30 min"
  },
  {
    title: "Genève",
    description: "Ville internationale aux multiples facettes, entre culture, shopping et gastronomie.",
    image: "/lovable-uploads/d7bfbf16-f70b-4310-8b52-e8e1798c2a04.png",
    distance: "20 min"
  }
];

const LocalAttractions = () => {
  return (
    <section className="py-20 bg-snow">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif text-wood-dark mb-6">
            À découvrir aux alentours
          </h2>
          <p className="text-stone-dark max-w-2xl mx-auto">
            Notre région regorge de trésors naturels et culturels à explorer
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction, index) => (
            <motion.div
              key={attraction.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="aspect-[4/3]">
                <img
                  src={attraction.image}
                  alt={attraction.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-2 text-snow-light mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{attraction.distance}</span>
                </div>
                <h3 className="text-2xl font-serif mb-2">{attraction.title}</h3>
                <p className="text-snow-light">{attraction.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalAttractions;