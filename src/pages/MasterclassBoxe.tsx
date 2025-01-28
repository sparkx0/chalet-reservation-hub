import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MasterclassBoxe = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-snow">
      <Navigation />
      <div className="pt-32">
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-wood-dark">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/d54b9c6d-2275-4489-8397-f20b2175225e.png')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl font-serif text-white mb-4">
                Masterclass Exclusive avec le Champion du Monde WBC Nordine Oubaali
              </h1>
              <p className="text-xl text-snow-light/90 mb-8">
                Une opportunité unique de formation avec une légende de la boxe
              </p>
              <Button
                onClick={() => navigate("/events")}
                variant="outline"
                className="bg-white/10 text-white hover:bg-white hover:text-wood-dark"
              >
                Retour aux événements
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="prose prose-lg max-w-none"
              >
                <p className="text-xl leading-relaxed text-stone-dark mb-8">
                  Plongez dans l'univers de l'élite avec une opportunité exceptionnelle : une masterclass de coaching sportif animée par Nordine Oubaali, ancien champion du monde WBC de boxe anglaise et véritable icône du sport français.
                </p>

                <h2 className="text-3xl font-serif text-wood-dark mt-12 mb-6">Pourquoi participer à cette masterclass ?</h2>
                
                <div className="grid md:grid-cols-2 gap-8 my-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-serif text-wood-dark mb-4">Apprenez de l'un des meilleurs</h3>
                    <p>Nordine Oubaali, champion du monde WBC, incarne la persévérance, la rigueur et l'excellence. Fort de ses multiples titres internationaux et d'un parcours d'exception, il partagera avec vous les secrets qui font la différence sur le ring.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-serif text-wood-dark mb-4">Un accompagnement sur mesure</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Travaillez sur des techniques de boxe avancées</li>
                      <li>Approfondissez votre préparation mentale</li>
                      <li>Recevez des conseils stratégiques personnalisés</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-serif text-wood-dark mt-12 mb-6">Programme de la journée</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="font-bold">09:00</span>
                    <span>Accueil et présentation par Nordine Oubaali</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="font-bold">10:00</span>
                    <span>Ateliers techniques et fondamentaux</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="font-bold">12:00</span>
                    <span>Préparation physique intensive</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="font-bold">14:00</span>
                    <span>Coaching mental et stratégie</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="font-bold">16:00</span>
                    <span>Session Questions/Réponses exclusive</span>
                  </li>
                </ul>

                <div className="bg-wood/10 p-8 rounded-lg mt-12">
                  <h2 className="text-3xl font-serif text-wood-dark mb-6">Informations pratiques</h2>
                  <ul className="space-y-4">
                    <li><strong>Date :</strong> 15 mars 2025</li>
                    <li><strong>Lieu :</strong> Haute-savoie</li>
                    <li><strong>Tarif :</strong> 2'199 EUR</li>
                    <li><strong>Places :</strong> Limitées</li>
                  </ul>
                  <div className="mt-8">
                    <Button
                      onClick={() => navigate("/events")}
                      className="bg-wood hover:bg-wood-dark text-white"
                    >
                      Réserver votre place
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MasterclassBoxe;