import { motion } from "framer-motion";

const Description = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
      className="mt-12 bg-white p-8 rounded-lg shadow-md"
    >
      <h3 className="text-2xl font-serif text-wood-dark mb-4">Description</h3>
      <p className="text-stone-dark mb-4">
        Situé dans un cadre exceptionnel entre Genève et Annecy, ce chalet
        authentique de 250 ans a été entièrement rénové pour offrir un confort
        moderne tout en préservant son charme d'antan. Avec une vue imprenable
        sur les Alpes et le Mont Blanc, c'est le lieu idéal pour des vacances
        en famille ou entre amis.
      </p>
      <p className="text-stone-dark">
        Le chalet dispose d'un vaste salon-séjour de 120m² avec cheminée, d'une
        cuisine entièrement équipée, et de 7 chambres pouvant accueillir jusqu'à
        14 personnes. Profitez également d'une grande terrasse pour vos repas en
        plein air avec vue panoramique, ainsi que des espaces bien-être avec
        piscine chauffée, salle de sport et sauna privé.
      </p>
    </motion.div>
  );
};

export default Description;