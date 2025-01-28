import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Waves, Ruler, Dumbbell, Flame, Heart } from "lucide-react";
import PrivateFeatures from "@/components/privatization/PrivateFeatures";
import PrivateBooking from "@/components/privatization/PrivateBooking";

const Spa = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-snow">
      <Navigation />
      
      {/* Hero Banner */}
      <div className="relative h-[60vh] w-full">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            alt="Spa et bien-être"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-serif text-white text-center"
          >
            Spa & Bien-être
          </motion.h1>
        </div>
      </div>

      <div className="pt-16 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
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
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <img
                      src="/lovable-uploads/7fe3f31d-c5cc-4bf6-bac6-b6de3826c03d.png"
                      alt="Espace méditation et détente"
                      className="rounded-lg w-full h-64 object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-stone-dark mb-4">
                      Profitez de notre sauna traditionnel pour un moment de pure détente. 
                      Idéal pour la récupération après une journée de ski ou de randonnée, 
                      le sauna vous aide à éliminer les tensions et à vous ressourcer.
                    </p>
                    <div className="flex items-center gap-2 text-wood">
                      <Heart className="w-5 h-5" />
                      <span>Température optimale pour votre bien-être</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section Salle de Sport */}
            <Card className="mb-12">
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
                  <div className="space-y-4">
                    <img
                      src="/lovable-uploads/acfa66a1-1b13-4393-99ba-93a65a55c910.png"
                      alt="Équipement de musculation"
                      className="rounded-lg w-full h-48 object-cover mb-4"
                    />
                    <img
                      src="/lovable-uploads/350cf7f3-24d1-4c00-9ee2-1d3417e87bd4.png"
                      alt="Rack d'haltères"
                      className="rounded-lg w-full h-48 object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <p className="text-stone-dark">
                      Notre salle de sport est équipée d'appareils professionnels pour maintenir 
                      votre routine fitness même en vacances. Des séances de coaching personnalisées 
                      sont disponibles sur réservation.
                    </p>
                    <img
                      src="/lovable-uploads/6ad30a73-102f-41b3-b76d-3dc03b019747.png"
                      alt="Vestiaires"
                      className="rounded-lg w-full h-48 object-cover"
                    />
                    <p className="text-stone-dark">
                      Pour réserver une séance avec un coach, contactez-nous via notre formulaire 
                      de contact ou à la réception du chalet.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section Location Privative */}
            <div className="mt-16">
              {/* Nouvelle bannière pour la section Location Privative */}
              <div className="relative h-[40vh] w-full mb-8 rounded-xl overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1439337153520-7082a56a81f4"
                    alt="Location privative espace bien-être"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="relative h-full flex flex-col items-center justify-center">
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-serif text-white text-center mb-4"
                  >
                    Location Privative de l'Espace Bien-être
                  </motion.h2>
                  <p className="text-center text-lg text-white/90 max-w-2xl px-4">
                    Profitez de nos installations en toute intimité : piscine chauffée, sauna et salle de sport.
                  </p>
                </div>
              </div>

              <PrivateFeatures />
              <PrivateBooking />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Spa;