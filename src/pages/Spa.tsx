import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Waves, Ruler, Dumbbell, Flame } from "lucide-react";

const Spa = () => {
  return (
    <div className="min-h-screen bg-snow">
      <Navigation />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl font-serif text-wood-dark text-center mb-12">
              Espace Bien-être
            </h1>

            {/* Section Piscine */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-wood-dark">
                  Piscine Chauffée
                </CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Waves className="w-4 h-4" />
                  Accessible toute l'année
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <img
                      src="/lovable-uploads/1fa5ade7-9389-4844-87eb-72a28c18610c.png"
                      alt="Piscine chauffée"
                      className="rounded-lg w-full h-64 object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Ruler className="w-5 h-5 text-wood" />
                      <span>Dimensions : 8m x 7m</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Waves className="w-5 h-5 text-wood" />
                      <span>Profondeur : 2m</span>
                    </div>
                    <p className="text-stone-dark">
                      Notre piscine chauffée vous offre un moment de détente unique avec vue sur les montagnes. 
                      Maintenue à une température idéale toute l'année, elle vous permet de vous ressourcer 
                      quelle que soit la saison.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section Sauna */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-wood-dark">
                  Sauna Privé
                </CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Flame className="w-4 h-4" />
                  Un espace de détente et de bien-être
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-stone-dark">
                  Profitez de notre sauna traditionnel pour un moment de pure détente. 
                  Idéal pour la récupération après une journée de ski ou de randonnée, 
                  le sauna vous aide à éliminer les tensions et à vous ressourcer.
                </p>
              </CardContent>
            </Card>

            {/* Section Salle de Sport */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-wood-dark">
                  Salle de Sport
                </CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Dumbbell className="w-4 h-4" />
                  Équipements professionnels et coaching personnalisé
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <img
                      src="/lovable-uploads/4d342c91-ceb6-4141-a701-6f69d7172cd8.png"
                      alt="Salle de sport"
                      className="rounded-lg w-full h-64 object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-stone-dark mb-4">
                      Notre salle de sport est équipée d'appareils professionnels pour maintenir 
                      votre routine fitness même en vacances. Des séances de coaching personnalisées 
                      sont disponibles sur réservation.
                    </p>
                    <p className="text-stone-dark">
                      Pour réserver une séance avec un coach, contactez-nous via notre formulaire 
                      de contact ou à la réception du chalet.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Spa;