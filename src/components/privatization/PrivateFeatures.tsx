import { motion } from "framer-motion";
import { Clock, Users, Sparkles, MapPin } from "lucide-react";

const features = [
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Réservation flexible",
    description: "À partir de 3 heures, adaptez la durée à vos besoins",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Intimité garantie",
    description: "Capacité limitée à 6 personnes pour votre confort",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Prestations premium",
    description: "Accès privatif à la piscine, salle de sport et sauna",
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Emplacement unique",
    description: "Entre Genève et Annecy, dans un cadre d'exception",
  },
];

const PrivateFeatures = () => {
  return (
    <section className="py-20 bg-snow">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-serif text-wood-dark text-center mb-12">
            Une expérience unique
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-wood mb-4">{feature.icon}</div>
                <h3 className="text-xl font-serif text-wood-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-stone-dark">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivateFeatures;