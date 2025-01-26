import { motion } from "framer-motion";
import { Bed, Users, Bath, Wifi, Car, Snowflake, Pool, Dumbbell, Flame } from "lucide-react";

const Details = () => {
  const amenities = [
    {
      icon: <Bed className="w-6 h-6" />,
      title: "7 chambres",
      description: "14 voyageurs · 10 lits",
    },
    {
      icon: <Bath className="w-6 h-6" />,
      title: "4 salles de bain",
      description: "Serviettes et produits fournis",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Espaces communs",
      description: "Salon 120m² · Cuisine équipée",
    },
    {
      icon: <Pool className="w-6 h-6" />,
      title: "Piscine chauffée",
      description: "Accessible toute l'année",
    },
    {
      icon: <Dumbbell className="w-6 h-6" />,
      title: "Salle de sport",
      description: "Équipements professionnels",
    },
    {
      icon: <Flame className="w-6 h-6" />,
      title: "Sauna privé",
      description: "Détente et bien-être",
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Connectivité",
      description: "Wifi haut débit · TV satellite",
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Stationnement",
      description: "Parking gratuit sur place",
    },
    {
      icon: <Snowflake className="w-6 h-6" />,
      title: "Équipements hiver",
      description: "Chauffage · Local à ski",
    },
  ];

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
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-wood mb-4">{item.icon}</div>
                <h3 className="text-xl font-serif text-wood-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-stone-dark">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 bg-white p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-serif text-wood-dark mb-4">
              Description
            </h3>
            <p className="text-stone-dark mb-4">
              Situé dans un cadre exceptionnel entre Genève et Annecy, ce chalet
              authentique de 250 ans a été entièrement rénové pour offrir un
              confort moderne tout en préservant son charme d'antan. Avec une vue
              imprenable sur les Alpes et le Mont Blanc, c'est le lieu idéal pour
              des vacances en famille ou entre amis.
            </p>
            <p className="text-stone-dark">
              Le chalet dispose d'un vaste salon-séjour de 120m² avec cheminée,
              d'une cuisine entièrement équipée, et de 7 chambres pouvant accueillir
              jusqu'à 14 personnes. Profitez également d'une grande terrasse pour
              vos repas en plein air avec vue panoramique, ainsi que des espaces
              bien-être avec piscine chauffée, salle de sport et sauna privé.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Details;