import { motion } from "framer-motion";
import Map from "@/components/Map";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ChaletHistory = () => {
  const images = [
    {
      src: "/lovable-uploads/37aa1fba-d804-4af0-b331-1dbeb3db8939.png",
      alt: "Vue extérieure du chalet",
    },
    {
      src: "/lovable-uploads/1fa5ade7-9389-4844-87eb-72a28c18610c.png",
      alt: "Vue sur les montagnes",
    },
    {
      src: "/lovable-uploads/e648d43b-e0c4-443d-b120-43117be90e8e.png",
      alt: "Vue panoramique",
    },
    {
      src: "/lovable-uploads/395ec1d4-37b5-4380-b50d-7aed358bfc59.png",
      alt: "Chambre avec plafond en bois et velux",
    },
    {
      src: "/lovable-uploads/d6b359a4-c835-4970-a44d-0c52afd573c3.png",
      alt: "Vue hivernale avec groupe dans la neige",
    },
    {
      src: "/lovable-uploads/856d85f4-39f1-4e4c-854e-d47f5f64275d.png",
      alt: "Vue panoramique d'été avec terrain",
    },
    {
      src: "/lovable-uploads/6215370c-2a23-409f-854d-907f0963d140.png",
      alt: "Coucher de soleil sur les montagnes",
    },
    {
      src: "/lovable-uploads/5808f818-1c44-43d6-a424-b3a73e33b08a.png",
      alt: "Vue depuis la terrasse",
    },
    {
      src: "/lovable-uploads/c965e49e-b1eb-47c4-9e64-639dc8635dda.png",
      alt: "Chalet sous la neige de nuit",
    },
    {
      src: "/lovable-uploads/b7ea0037-cd29-47ab-b41b-f3cb21babe02.png",
      alt: "Vue nocturne enneigée",
    },
    {
      src: "/lovable-uploads/ae11aa12-1447-4550-a52e-f13e7f892f14.png",
      alt: "Coucher de soleil hivernal",
    },
    {
      src: "/lovable-uploads/682266fc-8a49-423b-a78f-d4c1ce08d9f5.png",
      alt: "Lever de soleil sur les montagnes",
    },
    {
      src: "/lovable-uploads/fa5b57de-15ea-4212-8624-906732b882d5.png",
      alt: "Vue panoramique au coucher du soleil",
    },
  ];

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
                  Découvrez notre chalet d'exception en Haute-Savoie, un véritable havre de paix niché à 1000 mètres d'altitude. 
                  Alliant luxe contemporain et authenticité savoyarde, cette demeure finlandaise de 587m² offre un cadre idyllique 
                  pour vos séjours en famille ou entre amis, à seulement 30 minutes de l'aéroport de Genève.
                </p>
              </section>

              <div className="mt-12 mb-16">
                <Carousel className="w-full max-w-4xl mx-auto">
                  <CarouselContent>
                    {images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </div>

              <section className="mb-12">
                <h2 className="text-2xl font-serif text-wood-dark mb-6">Un espace de vie exceptionnel</h2>
                <Card className="bg-white/80 backdrop-blur">
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      <li>• 587m² habitables sur un terrain de plus de 4200m² entièrement clos</li>
                      <li>• Double salon/séjour de 120m² avec grande cheminée ouverte en pierre</li>
                      <li>• 5 chambres spacieuses avec salles de bains privatives</li>
                      <li>• Cuisine ouverte entièrement équipée</li>
                      <li>• Deux terrasses panoramiques en rez-de-chaussée et au premier étage</li>
                      <li>• Parking privé et cars-park</li>
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
                <h2 className="text-2xl font-serif text-wood-dark mb-6">Équipements et services</h2>
                <Card className="bg-white/80 backdrop-blur">
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      <li>• Buanderie équipée (lave-linge et sèche-linge)</li>
                      <li>• Cintres et draps fournis</li>
                      <li>• Machine à café</li>
                      <li>• Wifi haut débit</li>
                      <li>• Service ménage supplémentaire sur demande</li>
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
                  Note : Véhicule indispensable pour accéder au chalet. 
                  En période hivernale, les pneus neige sont vivement conseillés.
                </p>
              </section>

              <div className="h-[400px] mb-16 rounded-lg overflow-hidden shadow-lg">
                <Map />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ChaletHistory;