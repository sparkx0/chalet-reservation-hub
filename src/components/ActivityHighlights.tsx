import { motion } from "framer-motion";
import { Mountain, Bike, Camera, Utensils } from "lucide-react";

const highlights = [
  {
    icon: <Mountain className="w-8 h-8" />,
    title: "Randonnée",
    description: "Plus de 50km de sentiers balisés offrant des panoramas exceptionnels sur le bassin genevois et le Mont-Blanc"
  },
  {
    icon: <Bike className="w-8 h-8" />,
    title: "VTT & Cyclisme",
    description: "Des parcours adaptés à tous les niveaux, de la balade familiale aux tracés techniques pour experts"
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Points de Vue",
    description: "Des belvédères aménagés pour admirer le lac Léman, les Alpes et le Jura dans des conditions optimales"
  },
  {
    icon: <Utensils className="w-8 h-8" />,
    title: "Gastronomie",
    description: "Découvrez les spécialités locales dans les restaurants d'altitude et les auberges traditionnelles"
  }
];

const ActivityHighlights = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif text-wood-dark mb-6">
            Les Incontournables du Salève
          </h2>
          <p className="text-stone-dark max-w-2xl mx-auto">
            Une montagne aux multiples facettes qui ravira les amoureux de nature et d'activités outdoor
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-snow rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-wood mb-4">{highlight.icon}</div>
              <h3 className="text-2xl font-serif text-wood-dark mb-4">
                {highlight.title}
              </h3>
              <p className="text-stone-dark">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivityHighlights;