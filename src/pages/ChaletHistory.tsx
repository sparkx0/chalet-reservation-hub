import { motion } from "framer-motion";
import Map from "@/components/Map";

const ChaletHistory = () => {
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-serif mb-8 text-wood-dark">
            Le Chalet du Salève
          </h1>
          
          <div className="prose prose-lg max-w-none text-wood-dark/80">
            <p>
              Niché à 970 mètres d'altitude dans le magnifique village du Sappey en Haute-Savoie, 
              le Chalet du Salève est un joyau d'architecture traditionnelle savoyarde. Ce chalet 
              authentique de 250 ans a été entièrement rénové pour allier le charme d'antan au 
              confort moderne.
            </p>
            
            <h2 className="text-2xl font-serif text-wood-dark mt-8 mb-4">
              Une situation privilégiée
            </h2>
            <p>
              Le chalet bénéficie d'une localisation idéale :
            </p>
            <ul>
              <li>À 30 minutes de Genève</li>
              <li>À 35 minutes d'Annecy</li>
              <li>À 1 heure de Chamonix</li>
              <li>À proximité immédiate des pistes de ski</li>
              <li>Accès direct aux sentiers de randonnée</li>
            </ul>
          </div>

          <div className="mt-12 mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src="/lovable-uploads/37aa1fba-d804-4af0-b331-1dbeb3db8939.png"
              alt="Vue extérieure du chalet"
              className="rounded-lg shadow-lg"
            />
            <img
              src="/lovable-uploads/1fa5ade7-9389-4844-87eb-72a28c18610c.png"
              alt="Vue sur les montagnes"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="h-[400px] mb-16 rounded-lg overflow-hidden shadow-lg">
            <Map />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChaletHistory;