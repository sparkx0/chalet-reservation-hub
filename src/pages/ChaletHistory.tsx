import { motion } from "framer-motion";
import Map from "@/components/Map";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";

const ChaletHistory = () => {
  return (
    <div className="min-h-screen bg-snow">
      <Navigation />
      <div className="pt-32 pb-16">
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
              <section className="mb-12">
                <p className="text-xl leading-relaxed mb-6">
                  Découvrez notre chalet d'exception en Haute-Savoie, un véritable havre de paix niché à 970 mètres d'altitude. 
                  Alliant luxe contemporain et authenticité savoyarde, cette demeure finlandaise de 500m² offre un cadre idyllique 
                  pour vos séjours en famille ou entre amis, à seulement 30 minutes de l'aéroport de Genève.
                </p>
              </section>

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

              <section className="mb-12">
                <h2 className="text-2xl font-serif text-wood-dark mb-6">Un espace de vie exceptionnel</h2>
                <Card className="bg-white/80 backdrop-blur">
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      <li>• 500m² habitables sur un terrain de 4000m² entièrement clos</li>
                      <li>• Double salon/séjour de 120m² avec cheminée et plafond cathédrale</li>
                      <li>• 5 chambres spacieuses avec salles de bains privatives</li>
                      <li>• Cuisine ouverte entièrement équipée</li>
                      <li>• Deux terrasses panoramiques en rez-de-chaussée et au premier étage</li>
                      <li>• Parking privé et car-port</li>
                    </ul>
                  </CardContent>
                </Card>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-serif text-wood-dark mb-6">Prestations bien-être</h2>
                <Card className="bg-white/80 backdrop-blur">
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      <li>• Piscine intérieure chauffée</li>
                      <li>• Salle de sport privative entièrement équipée</li>
                      <li>• Sauna privatif</li>
                      <li>• Terrasse ensoleillée avec bains de soleil et barbecue</li>
                      <li>• Vue panoramique sur les Alpes</li>
                    </ul>
                  </CardContent>
                </Card>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-serif text-wood-dark mb-6">Situation privilégiée</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="bg-white/80 backdrop-blur">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Accès rapides</h3>
                      <ul className="space-y-2">
                        <li>• Aéroport de Genève : 30 min</li>
                        <li>• Centre d'Annecy : 35 min</li>
                        <li>• Chamonix Mont-Blanc : 50 min</li>
                        <li>• Frontière suisse : 15 min</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="bg-white/80 backdrop-blur">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4">À proximité</h3>
                      <ul className="space-y-2">
                        <li>• Commerces et services : 10-15 min</li>
                        <li>• Sentiers de randonnée : accès direct</li>
                        <li>• Téléphérique du Salève</li>
                        <li>• Restaurants et points de vue</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section className="mb-12">
                <p className="text-lg italic">
                  Note : Le chalet est partagé avec deux chats résidents. Véhicule indispensable pour accéder au chalet. 
                  En période hivernale, les pneus neige sont vivement conseillés.
                </p>
              </section>
            </div>

            <div className="h-[400px] mb-16 rounded-lg overflow-hidden shadow-lg">
              <Map />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ChaletHistory;