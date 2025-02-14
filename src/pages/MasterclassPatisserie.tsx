
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MasterclassPatisserie = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-snow">
      <Navigation />
      <div className="pt-32">
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-wood-dark">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/4b81a0bc-82ba-4c65-9484-2bab98458460.png')] bg-cover bg-center">
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
                Masterclass de Pâtisserie avec Guillaume Vilalonga
              </h1>
              <p className="text-xl text-snow-light/90 mb-8">
                Une expérience culinaire exclusive de 4 jours avec un maître pâtissier d'exception
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
                      src="/lovable-uploads/4b81a0bc-82ba-4c65-9484-2bab98458460.png"
                      alt="Chef Guillaume Vilalonga en action"
                      className="rounded-lg shadow-lg w-full h-[300px] object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xl leading-relaxed text-stone-dark">
                      Plongez dans l'univers fascinant de la pâtisserie française avec le Chef Guillaume Vilalonga, maître pâtissier reconnu pour ses créations audacieuses et sa maîtrise technique exceptionnelle.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-serif text-wood-dark mt-12 mb-6">
                  Programme de la Masterclass
                </h2>
                <div className="grid md:grid-cols-2 gap-8 my-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-serif text-wood-dark mb-4">Jour 1 & 2</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Les bases de la pâtisserie française</li>
                      <li>Techniques de travail du chocolat</li>
                      <li>Création de pâtes et crèmes de base</li>
                      <li>Maîtrise des cuissons et températures</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-serif text-wood-dark mb-4">Jour 3 & 4</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Création de desserts signature</li>
                      <li>Techniques de décoration avancées</li>
                      <li>Travail des entremets modernes</li>
                      <li>Présentation et dressage professionnel</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-wood/10 p-8 rounded-lg mt-12">
                  <h2 className="text-3xl font-serif text-wood-dark mb-6">Informations pratiques</h2>
                  <ul className="space-y-4">
                    <li><strong>Date :</strong> 15 septembre 2025</li>
                    <li><strong>Durée :</strong> 4 jours intensifs</li>
                    <li><strong>Lieu :</strong> Cuisine professionnelle du Chalet</li>
                    <li><strong>Tarif :</strong> 1'899 EUR (tout inclus)</li>
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

export default MasterclassPatisserie;
