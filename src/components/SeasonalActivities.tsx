import { motion } from "framer-motion";
import { Snowflake, Sun, Leaf, Cloud } from "lucide-react";

const seasons = [
  {
    icon: <Snowflake className="w-8 h-8" />,
    title: "Hiver",
    activities: [
      "Ski alpin aux Portes du Soleil",
      "Ski de fond au Plateau des Glières",
      "Raquettes dans le Massif du Salève",
      "Patinage sur le lac d'Annecy"
    ]
  },
  {
    icon: <Sun className="w-8 h-8" />,
    title: "Été",
    activities: [
      "Randonnées pédestres",
      "VTT sur les sentiers balisés",
      "Parapente depuis le Salève",
      "Baignade au lac d'Annecy"
    ]
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Automne",
    activities: [
      "Cueillette de champignons",
      "Découverte des alpages",
      "Observation de la faune",
      "Dégustation de produits locaux"
    ]
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Printemps",
    activities: [
      "Escalade sur le Salève",
      "Golf au Domaine de Bossey",
      "Pêche en rivière",
      "Visites des châteaux"
    ]
  }
];

const SeasonalActivities = () => {
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
            Activités saisonnières
          </h2>
          <p className="text-stone-dark max-w-2xl mx-auto">
            Chaque saison offre son lot d'activités uniques dans notre région
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {seasons.map((season, index) => (
            <motion.div
              key={season.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-snow rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-wood mb-4">{season.icon}</div>
              <h3 className="text-2xl font-serif text-wood-dark mb-4">
                {season.title}
              </h3>
              <ul className="space-y-3">
                {season.activities.map((activity) => (
                  <li key={activity} className="text-stone-dark">
                    {activity}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeasonalActivities;