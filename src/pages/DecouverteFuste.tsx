
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const DecouverteFuste = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-snow">
      <Navigation />
      <div className="pt-32">
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-wood-dark">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/fb4cee1f-dafd-44dd-83ed-a077116ade8b.png')] bg-cover bg-center">
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
                Découverte du Chalet en Fuste
              </h1>
              <p className="text-xl text-snow-light/90 mb-8">
                Deux jours pour découvrir l'art ancestral de la construction en fuste avec Damien RONCIN
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
                <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                  <div>
                    <img 
                      src="/lovable-uploads/fb4cee1f-dafd-44dd-83ed-a077116ade8b.png"
                      alt="Construction en fuste"
                      className="rounded-lg shadow-lg w-full h-[300px] object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xl leading-relaxed text-stone-dark">
                      Découvrez les secrets de la construction traditionnelle en fuste, une technique ancestrale qui donne tout son charme à notre chalet. Guidé par Damien RONCIN, expert charpentier, vous plongerez dans l'histoire et les techniques de cet artisanat d'exception.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-serif text-wood-dark mt-12 mb-6">
                  Programme de la Formation
                </h2>
                <div className="grid md:grid-cols-2 gap-8 my-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-serif text-wood-dark mb-4">Jour 1</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Histoire de la construction en fuste</li>
                      <li>Sélection des bois et outils traditionnels</li>
                      <li>Techniques de base d'assemblage</li>
                      <li>Visite guidée du chalet</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-serif text-wood-dark mb-4">Jour 2</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Démonstration pratique</li>
                      <li>Initiation aux techniques d'assemblage</li>
                      <li>Entretien et préservation</li>
                      <li>Session questions-réponses</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-wood/10 p-8 rounded-lg mt-12">
                  <h2 className="text-3xl font-serif text-wood-dark mb-6">Informations pratiques</h2>
                  <ul className="space-y-4">
                    <li><strong>Date :</strong> 15 novembre 2025</li>
                    <li><strong>Durée :</strong> 2 jours</li>
                    <li><strong>Lieu :</strong> Le Chalet du Salève</li>
                    <li><strong>Tarif :</strong> 899 EUR (matériel et repas inclus)</li>
                    <li><strong>Places :</strong> Limitées à 20 participants</li>
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

export default DecouverteFuste;
