import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const attractions = [
  {
    title: "Le Salève",
    description: "Surnommée la « Balcon de Genève », cette montagne offre une vue imprenable sur le lac Léman et le Mont-Blanc. Profitez du téléphérique pour une montée spectaculaire.",
    image: "/lovable-uploads/0ce6cff6-6aba-49e0-9e8a-45515a175135.png",
    distance: "5 min",
    website: "https://www.telepherique-du-saleve.com",
    activities: ["Randonnée", "Parapente", "Restaurant panoramique"]
  },
  {
    title: "Lac d'Annecy",
    description: "L'un des lacs les plus purs d'Europe, parfait pour la baignade, les sports nautiques ou simplement la détente. La vieille ville d'Annecy, surnommée la Venise des Alpes, vous charmera.",
    image: "/lovable-uploads/2073fae2-5a1e-4418-b337-721d8c2cfa9e.png",
    distance: "30 min",
    website: "https://www.lac-annecy.com",
    activities: ["Baignade", "Paddle", "Croisière", "Vélo"]
  },
  {
    title: "Genève",
    description: "Ville internationale aux multiples facettes, entre culture, shopping et gastronomie. Ne manquez pas le jet d'eau, la vieille ville et les boutiques de luxe.",
    image: "/lovable-uploads/c7a6f92f-1344-427d-ae43-5301bd8a0707.png",
    distance: "20 min",
    website: "https://www.geneve.com",
    activities: ["Shopping", "Musées", "Restaurants étoilés"]
  }
];

const LocalAttractions = () => {
  return (
    <section className="py-20 bg-snow">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif text-wood-dark mb-6">
            À découvrir aux alentours
          </h2>
          <p className="text-stone-dark max-w-2xl mx-auto">
            Notre région regorge de trésors naturels et culturels à explorer
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction, index) => (
            <motion.div
              key={attraction.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-[4/3]">
                <img
                  src={attraction.image}
                  alt={attraction.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-wood" />
                  <span className="text-sm text-wood-dark">{attraction.distance}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif text-wood-dark mb-3">{attraction.title}</h3>
                <p className="text-stone-dark mb-4">{attraction.description}</p>
                <div className="mb-4">
                  <h4 className="font-medium text-wood-dark mb-2">Activités suggérées :</h4>
                  <ul className="flex flex-wrap gap-2">
                    {attraction.activities.map((activity) => (
                      <li
                        key={activity}
                        className="bg-snow text-stone-dark px-3 py-1 rounded-full text-sm"
                      >
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-wood text-wood hover:bg-wood hover:text-white transition-colors"
                  onClick={() => window.open(attraction.website, '_blank')}
                >
                  Plus d'informations
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalAttractions;