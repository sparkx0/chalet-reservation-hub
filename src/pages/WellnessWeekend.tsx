import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const WellnessWeekend = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-snow">
      <Navigation />
      <div className="pt-32">
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-wood-dark">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/1fa5ade7-9389-4844-87eb-72a28c18610c.png')] bg-cover bg-center">
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
                Week-end Bien-être : Une Parenthèse Enchantée
              </h1>
              <p className="text-xl text-snow-light/90 mb-8">
                Offrez-vous un moment de pure détente et de reconnexion à soi
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
                      src="/lovable-uploads/photo-1581091226825-a6a2a5aee158"
                      alt="Ambiance zen et relaxante"
                      className="rounded-lg shadow-lg w-full h-[300px] object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xl leading-relaxed text-stone-dark">
                      Découvrez un week-end unique dédié au bien-être holistique, où chaque moment est une invitation à la sérénité. Dans un cadre enchanteur, laissez-vous porter par une expérience transformative alliant yoga, méditation et soins spa personnalisés.
                    </p>
                  </div>
                </div>

                <div className="bg-wood/5 p-8 rounded-lg my-12">
                  <p className="text-lg leading-relaxed text-stone-dark italic">
                    "Prenez le temps de vous reconnecter à votre essence, de nourrir votre corps et votre esprit dans un environnement d'exception. Ce week-end est conçu pour vous offrir une pause régénératrice loin du tumulte quotidien."
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 my-12">
                  <img 
                    src="/lovable-uploads/photo-1506744038136-46273834b3fb"
                    alt="Paysage apaisant"
                    className="rounded-lg shadow-lg w-full h-[200px] object-cover"
                  />
                  <img 
                    src="/lovable-uploads/photo-1518495973542-4542c06a5843"
                    alt="Ambiance nature"
                    className="rounded-lg shadow-lg w-full h-[200px] object-cover"
                  />
                  <img 
                    src="/lovable-uploads/photo-1649972904349-6e44c42644a7"
                    alt="Moment de détente"
                    className="rounded-lg shadow-lg w-full h-[200px] object-cover"
                  />
                </div>

                <h2 className="text-3xl font-serif text-wood-dark mt-12 mb-6">
                  Programme du Week-end
                </h2>
                <div className="grid md:grid-cols-2 gap-8 my-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-serif text-wood-dark mb-4">Yoga & Méditation</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Séances de yoga adaptées à tous les niveaux</li>
                      <li>Méditation guidée au lever du soleil</li>
                      <li>Ateliers de respiration consciente</li>
                      <li>Yoga nidra pour une relaxation profonde</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-serif text-wood-dark mb-4">Soins & Bien-être</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Massage relaxant personnalisé</li>
                      <li>Accès illimité au spa</li>
                      <li>Soins du visage bio</li>
                      <li>Bain de forêt guidé</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-wood/10 p-8 rounded-lg mt-12">
                  <h2 className="text-3xl font-serif text-wood-dark mb-6">Informations pratiques</h2>
                  <ul className="space-y-4">
                    <li><strong>Date :</strong> 1 octobre 2025</li>
                    <li><strong>Lieu :</strong> Spa & Resort - Haute-Savoie</li>
                    <li><strong>Tarif :</strong> 450 EUR (tout inclus)</li>
                    <li><strong>Places :</strong> Limitées à 8 participants</li>
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

export default WellnessWeekend;