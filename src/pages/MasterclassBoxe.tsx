import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";

const MasterclassBoxe = () => {
  return (
    <div className="min-h-screen bg-snow">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-serif text-wood-dark mb-8">
              Masterclass Exclusive avec le Champion du Monde WBC Nordine Oubaali
            </h1>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <img
                  src="/lovable-uploads/d2c8ea04-bce7-4999-a91c-c30e452cf844.png"
                  alt="Nordine Oubaali"
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>

              <p className="text-xl mb-8">
                Plongez dans l'univers de l'élite avec une opportunité exceptionnelle : une masterclass de coaching sportif animée par Nordine Oubaali, ancien champion du monde WBC de boxe anglaise et véritable icône du sport français.
              </p>

              <p className="mb-6">
                Cet événement s'adresse aux boxeurs professionnels qui souhaitent perfectionner leur préparation physique et mentale en vue de leurs prochains championnats ou combats. Profitez de l'expertise d'un athlète au palmarès exceptionnel et d'une expérience unique de haut niveau.
              </p>

              <h2 className="text-2xl font-serif text-wood-dark mt-8 mb-4">
                Pourquoi participer à cette masterclass ?
              </h2>

              <h3 className="text-xl font-serif text-wood-dark mt-6 mb-3">
                Apprenez de l'un des meilleurs :
              </h3>
              <p>
                Nordine Oubaali, champion du monde WBC, incarne la persévérance, la rigueur et l'excellence. Fort de ses multiples titres internationaux et d'un parcours d'exception, il partagera avec vous les secrets qui font la différence sur le ring.
              </p>

              <h3 className="text-xl font-serif text-wood-dark mt-6 mb-3">
                Un accompagnement sur mesure :
              </h3>
              <ul>
                <li>Travaillez sur des techniques de boxe avancées pour gagner en précision et en efficacité.</li>
                <li>Approfondissez votre préparation mentale, un levier indispensable pour surpasser vos limites et atteindre vos objectifs.</li>
                <li>Recevez des conseils stratégiques pour optimiser vos performances face à vos prochains adversaires.</li>
              </ul>

              <h2 className="text-2xl font-serif text-wood-dark mt-8 mb-4">
                Programme de la journée :
              </h2>
              <ul>
                <li>Accueil et présentation : Introduction par Nordine Oubaali et mise en perspective de son parcours.</li>
                <li>Ateliers techniques : Séances pratiques sur les fondamentaux de la boxe et les techniques avancées.</li>
                <li>Préparation physique : Entraînement intensif adapté aux boxeurs professionnels.</li>
                <li>Coaching mental : Exercice sur la concentration, la gestion du stress et la stratégie gagnante.</li>
                <li>Session Questions/Réponses : Échange exclusif avec Nordine pour bénéficier de ses conseils personnalisés.</li>
              </ul>

              <h2 className="text-2xl font-serif text-wood-dark mt-8 mb-4">
                Informations pratiques :
              </h2>
              <ul>
                <li>Date : 15 Juin 2024</li>
                <li>Lieu : Chalet Alpin de Luxe</li>
                <li>Tarif : 2199€</li>
                <li>Nombre de places limitées</li>
              </ul>

              <div className="mt-8 text-center">
                <button className="bg-wood hover:bg-wood-dark text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors">
                  Réserver votre place
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MasterclassBoxe;