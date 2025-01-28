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
                <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
                  <div className="flex-1">
                    <p className="text-xl leading-relaxed text-stone-dark">
                      Plongez dans l'univers de l'élite avec une opportunité exceptionnelle : une masterclass de coaching sportif animée par Nordine Oubaali, ancien champion du monde WBC de boxe anglaise et véritable icône du sport français.
                    </p>
                  </div>
                  <div className="flex-1">
                    <img 
                      src="/lovable-uploads/0ddf21c7-063c-4e1f-9585-2e38141fdf42.png"
                      alt="Champion Nordine Oubaali avec sa ceinture WBC"
                      className="rounded-lg shadow-lg w-full"
                    />
                  </div>
                </div>

                <h2 className="text-3xl font-serif text-wood-dark mt-12 mb-6">
                  Pourquoi participer à cette masterclass ?
                </h2>
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

                <div className="my-12">
                  <img 
                    src="/lovable-uploads/9ab6941a-8634-494b-ae76-0d6427b1d281.png"
                    alt="Nordine Oubaali en pesée officielle"
                    className="rounded-lg shadow-lg w-full max-w-2xl mx-auto"
                  />
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

                <h2 className="text-3xl font-serif text-wood-dark mt-12 mb-6">Hébergement et restauration</h2>
                <div className="bg-white p-8 rounded-lg shadow-md space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif text-wood-dark">Chambres privatives</h3>
                    <p>Chaque participant bénéficie d'une chambre individuelle, garantissant confort et intimité pour une récupération optimale.</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif text-wood-dark">Service traiteur premium</h3>
                    <p>Une restauration bio et équilibrée, spécialement conçue pour les athlètes de haut niveau. Nos menus sont adaptés pour optimiser vos performances pendant la masterclass.</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif text-wood-dark">Service de ménage</h3>
                    <p>Le service de ménage est assuré une fois pendant votre séjour ainsi qu'après votre départ, vous permettant de vous concentrer pleinement sur votre formation.</p>
                  </div>
                </div>

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