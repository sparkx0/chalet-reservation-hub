import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const VoyageForetSpirituelle = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-snow">
      <Navigation />
      <div className="pt-32">
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-wood-dark">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/1472396961693-142e6e269027.jpg')] bg-cover bg-center">
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
                Voyage en Forêt Spirituelle
              </h1>
              <p className="text-xl text-snow-light/90 mb-8">
                Une expérience immersive de 3 jours au cœur du Mont-Salève
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
                      Découvrez une expérience unique de connexion profonde avec la nature, au cœur des majestueuses forêts du Mont-Salève. Ce voyage spirituel de 3 jours vous invite à une immersion totale dans un environnement naturel préservé, où la sagesse des arbres et la puissance des montagnes vous guideront vers une reconnexion authentique avec votre essence.
                    </p>
                  </div>
                  <div className="flex-1">
                    <img 
                      src="/lovable-uploads/1513836279014-a89f7a76ae86.jpg"
                      alt="Forêt majestueuse du Mont-Salève"
                      className="rounded-lg shadow-lg w-full"
                    />
                  </div>
                </div>

                <h2 className="text-3xl font-serif text-wood-dark mt-12 mb-6">
                  Programme du Voyage
                </h2>
                <div className="grid md:grid-cols-2 gap-8 my-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-serif text-wood-dark mb-4">Jour 1 : L'Éveil des Sens</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Accueil et cercle d'ouverture</li>
                      <li>Méditation guidée en forêt</li>
                      <li>Atelier de sylvothérapie</li>
                      <li>Repas en pleine conscience</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-serif text-wood-dark mb-4">Jour 2 : L'Ascension Intérieure</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Randonnée méditative</li>
                      <li>Pratiques respiratoires en altitude</li>
                      <li>Cercle de partage au sommet</li>
                      <li>Méditation du coucher de soleil</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md mt-8">
                  <h3 className="text-xl font-serif text-wood-dark mb-4">Jour 3 : L'Intégration</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Yoga matinal en pleine nature</li>
                    <li>Atelier d'écriture créative</li>
                    <li>Cérémonie de clôture</li>
                    <li>Partage final et intentions</li>
                  </ul>
                </div>

                <div className="my-12">
                  <img 
                    src="/lovable-uploads/1469474968028-56623f02e42e.jpg"
                    alt="Lever de soleil sur le Mont-Salève"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>

                <h2 className="text-3xl font-serif text-wood-dark mt-12 mb-6">Hébergement et Restauration</h2>
                <div className="bg-white p-8 rounded-lg shadow-md space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif text-wood-dark">Hébergement en Pleine Nature</h3>
                    <p>Logement dans notre chalet écologique, intégré harmonieusement dans son environnement naturel, offrant une vue imprenable sur les Alpes.</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif text-wood-dark">Cuisine Consciente</h3>
                    <p>Repas végétariens préparés avec des produits locaux et biologiques, en harmonie avec les principes de l'alimentation consciente.</p>
                  </div>
                </div>

                <div className="bg-wood/10 p-8 rounded-lg mt-12">
                  <h2 className="text-3xl font-serif text-wood-dark mb-6">Informations pratiques</h2>
                  <ul className="space-y-4">
                    <li><strong>Dates :</strong> 5-7 Août 2024</li>
                    <li><strong>Lieu :</strong> Mont-Salève, Haute-Savoie</li>
                    <li><strong>Tarif :</strong> 899 EUR (tout inclus)</li>
                    <li><strong>Groupe :</strong> Limité à 12 participants</li>
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

export default VoyageForetSpirituelle;