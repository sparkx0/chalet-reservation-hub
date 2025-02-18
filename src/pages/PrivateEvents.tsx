import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import EventBooking from "@/components/events/EventBooking";
import { 
  Users, 
  PartyPopper, 
  Building2, 
  Utensils,
  Heart,
  Baby,
  Users2,
  GraduationCap
} from "lucide-react";

const PrivateEvents = () => {
  const navigate = useNavigate();

  const eventTypes = [
    {
      title: "Mariages",
      icon: <Heart className="w-8 h-8 text-wood" />,
      description: "Célébrez votre union dans un cadre idyllique avec une capacité jusqu'à 150 personnes",
      capacity: "150 personnes",
    },
    {
      title: "Anniversaires d'enfants",
      icon: <Baby className="w-8 h-8 text-wood" />,
      description: "Un espace sécurisé et ludique pour des fêtes d'anniversaire inoubliables",
      capacity: "30 enfants",
    },
    {
      title: "Team Building",
      icon: <Users2 className="w-8 h-8 text-wood" />,
      description: "Renforcez la cohésion d'équipe dans un environnement inspirant",
      capacity: "50 personnes",
    },
    {
      title: "Séminaires",
      icon: <GraduationCap className="w-8 h-8 text-wood" />,
      description: "Des espaces équipés pour vos réunions professionnelles",
      capacity: "80 personnes",
    },
  ];

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Capacité Adaptable",
      description: "Configuration flexible pour accueillir de 20 à 150 personnes",
    },
    {
      icon: <PartyPopper className="w-6 h-6" />,
      title: "Événements Sur Mesure",
      description: "Organisation personnalisée selon vos besoins spécifiques",
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Espaces Polyvalents",
      description: "Intérieur luxueux et extérieur aménagé avec vue panoramique",
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Service Traiteur",
      description: "Partenariats avec des traiteurs locaux de qualité",
    },
  ];

  return (
    <div className="min-h-screen bg-snow">
      <Navigation />
      <div className="pt-32">
        {/* Hero Section */}
        <section className="relative h-[70vh] bg-wood-dark">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/1fa5ade7-9389-4844-87eb-72a28c18610c.png')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl font-serif text-white mb-6">
                Location Privative du Chalet
              </h1>
              <p className="text-xl text-snow-light/90 mb-8">
                Un cadre d'exception pour vos événements privés et professionnels
              </p>
              <Button
                onClick={() => navigate("/contact")}
                className="bg-wood hover:bg-wood-dark text-white"
              >
                Demander un devis
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Event Types */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-serif text-wood-dark mb-6">
                Types d'Événements
              </h2>
              <p className="text-lg text-stone-dark max-w-2xl mx-auto">
                Le Chalet du Salève s'adapte à tous vos événements, offrant un cadre unique
                et des prestations sur mesure
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {eventTypes.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="text-center p-6 h-full">
                    <CardContent className="pt-6">
                      <div className="mb-4 flex justify-center">{event.icon}</div>
                      <h3 className="text-xl font-serif text-wood-dark mb-3">
                        {event.title}
                      </h3>
                      <p className="text-stone-dark mb-4">{event.description}</p>
                      <p className="text-sm font-semibold text-wood">
                        Jusqu'à {event.capacity}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-wood-light/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-serif text-wood-dark mb-6">
                Nos Services
              </h2>
              <p className="text-lg text-stone-dark max-w-2xl mx-auto">
                Des prestations haut de gamme pour faire de votre événement un moment inoubliable
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="text-wood mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-serif text-wood-dark mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-stone-dark">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <EventBooking selectedEvent={null} />
      </div>
    </div>
  );
};

export default PrivateEvents;
