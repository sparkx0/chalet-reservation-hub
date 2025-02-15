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

        {/* Video Section */}
        <section className="py-20 bg-wood-dark/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="aspect-video rounded-xl overflow-hidden shadow-2xl mb-12"
              >
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/0ORrKE7BL7U"
                  title="Nordine Oubaali - Champion du Monde WBC"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="prose prose-lg max-w-none text-center mb-12"
              >
                <p className="text-2xl font-serif text-wood-dark italic">
                  "La boxe n'est pas seulement un sport, c'est un art de vivre qui forge le caractère et révèle votre véritable potentiel."
                </p>
                <p className="text-lg text-stone-dark mt-4">
                  - Nordine Oubaali, Champion du Monde WBC
                </p>
              </motion.div>
            </div>
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
                      Saisissez une opportunité exceptionnelle de vous entraîner avec Nordine Oubaali, une véritable légende de la boxe française. Champion du Monde WBC, son parcours exemplaire et sa maîtrise technique font de lui un mentor d'exception. Cette masterclass exclusive vous permettra non seulement d'améliorer vos compétences techniques, mais aussi de développer votre mental de champion.
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
                  Une expérience transformatrice
                </h2>
                <div className="grid md:grid-cols-2 gap-8 my-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-serif text-wood-dark mb-4">Excellence et expertise</h3>
                    <p>Nordine Oubaali, avec son palmarès exceptionnel et sa passion pour la transmission, vous guidera personnellement vers l'excellence. Son approche unique combine technique de haut niveau et sagesse acquise au fil des années de compétition internationale.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-serif text-wood-dark mb-4">Un accompagnement d'élite</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Techniques avancées de boxe anglaise</li>
                      <li>Préparation mentale de champion</li>
                      <li>Stratégies de combat éprouvées</li>
                      <li>Conseils personnalisés d'un champion du monde</li>
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

                <h2 className="text-3xl font-serif text-wood-dark mt-12 mb-6">Programme intensif</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="font-bold">09:00</span>
                    <span>Accueil VIP et présentation par Nordine Oubaali</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="font-bold">10:00</span>
                    <span>Techniques avancées et secrets de champion</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="font-bold">12:00</span>
                    <span>Préparation physique d'élite</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="font-bold">14:00</span>
                    <span>Masterclass sur le mental de champion</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="font-bold">16:00</span>
                    <span>Session exclusive de questions/réponses et photos</span>
                  </li>
                </ul>

                <h2 className="text-3xl font-serif text-wood-dark mt-12 mb-6">Prestations de luxe incluses</h2>
                <div className="bg-white p-8 rounded-lg shadow-md space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif text-wood-dark">Suite privative</h3>
                    <p>Profitez d'une suite luxueuse pour votre séjour, offrant un confort optimal pour votre récupération.</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif text-wood-dark">Restauration gastronomique</h3>
                    <p>Menus personnalisés préparés par notre chef étoilé, alliant plaisir gustatif et nutrition sportive.</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif text-wood-dark">Service conciergerie</h3>
                    <p>Un service personnalisé 24/7 pour répondre à tous vos besoins pendant votre séjour.</p>
                  </div>
                </div>

                <div className="bg-wood/10 p-8 rounded-lg mt-12">
                  <h2 className="text-3xl font-serif text-wood-dark mb-6">Réservez votre expérience unique</h2>
                  <ul className="space-y-4">
                    <li><strong>Date :</strong> 15 mars 2025</li>
                    <li><strong>Lieu :</strong> Chalet de luxe en Haute-Savoie</li>
                    <li><strong>Tarif :</strong> 2'199 EUR (tout inclus)</li>
                    <li><strong>Places :</strong> Limitées à 10 participants</li>
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