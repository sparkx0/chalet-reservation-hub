import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const RetraiteSpirituelle = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-snow">
      <Navigation />
      <div className="pt-32">
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-wood-dark">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/37aa1fba-d804-4af0-b331-1dbeb3db8939.png')] bg-cover bg-center">
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
                Retraite Spirituelle dans les Alpes
              </h1>
              <p className="text-xl text-snow-light/90 mb-8">
                Un voyage intérieur dans un cadre naturel d'exception
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
                      La retraite spirituelle de 7 jours est la parfaite occasion de se déconnecter entièrement des routines compulsives et des préoccupations futiles du monde extérieur pour plonger profondément en soi et aller se reconnecter à ce qui est véritablement essentiel.
                    </p>
                  </div>
                  <div className="flex-1">
                    <img 
                      src="/lovable-uploads/37aa1fba-d804-4af0-b331-1dbeb3db8939.png"
                      alt="Vue paisible des montagnes"
                      className="rounded-lg shadow-lg w-full"
                    />
                  </div>
                </div>

                <div className="bg-wood/5 p-8 rounded-lg my-12">
                  <p className="text-lg leading-relaxed text-stone-dark italic">
                    Pour la retraite annuelle, nos équipes ont tout mis en œuvre pour vous offrir une expérience qui vous changera comme l'école et l'université n'ont jamais pu le faire. Le concept de cette aventure est une expérience époustouflante combinant un lieu isolé au beau milieu des montagnes avec un programme d'enseignements et d'ateliers transformateurs.
                  </p>
                </div>

                <h2 className="text-3xl font-serif text-wood-dark mt-12 mb-6">
                  Pourquoi participer à cette retraite ?
                </h2>
                <div className="grid md:grid-cols-2 gap-8 my-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-serif text-wood-dark mb-4">Reconnexion profonde</h3>
                    <p>Un moment privilégié pour vous reconnecter à votre essence, loin du tumulte quotidien, dans un environnement propice à l'introspection et à la méditation.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-serif text-wood-dark mb-4">Programme sur mesure</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Séances de méditation guidée</li>
                      <li>Ateliers de développement personnel</li>
                      <li>Pratiques de yoga et de respiration</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-serif text-wood-dark mt-12 mb-6">Programme de la retraite</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="font-bold">07:00</span>
                    <span>Méditation du lever du soleil</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="font-bold">09:00</span>
                    <span>Séance de yoga matinal</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="font-bold">11:00</span>
                    <span>Atelier de développement personnel</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="font-bold">15:00</span>
                    <span>Marche méditative en nature</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="font-bold">18:00</span>
                    <span>Méditation du coucher du soleil</span>
                  </li>
                </ul>

                <h2 className="text-3xl font-serif text-wood-dark mt-12 mb-6">Hébergement et restauration</h2>
                <div className="bg-white p-8 rounded-lg shadow-md space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif text-wood-dark">Chambres zen</h3>
                    <p>Des chambres individuelles conçues pour favoriser la sérénité et le repos, avec vue sur les montagnes.</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif text-wood-dark">Cuisine végétarienne</h3>
                    <p>Des repas équilibrés et végétariens, préparés avec des produits locaux et biologiques, pour nourrir le corps et l'esprit.</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif text-wood-dark">Espaces de méditation</h3>
                    <p>Accès à des espaces dédiés à la méditation, tant en intérieur qu'en extérieur, pour vos pratiques personnelles.</p>
                  </div>
                </div>

                <div className="bg-wood/10 p-8 rounded-lg mt-12">
                  <h2 className="text-3xl font-serif text-wood-dark mb-6">Informations pratiques</h2>
                  <ul className="space-y-4">
                    <li><strong>Date :</strong> 10 septembre 2024</li>
                    <li><strong>Lieu :</strong> Haute-savoie</li>
                    <li><strong>Tarif :</strong> 1'499 EUR</li>
                    <li><strong>Places :</strong> Limitées à 12 participants</li>
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

export default RetraiteSpirituelle;