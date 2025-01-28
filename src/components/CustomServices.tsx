import { motion } from "framer-motion";
import { Utensils, Car, Heart, Compass } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

const services = [
  {
    icon: <Utensils className="w-8 h-8" />,
    title: "Chef Privé",
    description: "Profitez d'une expérience gastronomique unique avec notre chef étoilé",
    price: "À partir de 150€/repas"
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: "Service de Navette",
    description: "Transport privé depuis/vers l'aéroport et excursions personnalisées",
    price: "À partir de 80€/trajet"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Massage à Domicile",
    description: "Détente et bien-être dans le confort de votre chambre",
    price: "À partir de 90€/heure"
  },
  {
    icon: <Compass className="w-8 h-8" />,
    title: "Guide de Montagne",
    description: "Excursions privées et découverte des plus beaux sentiers",
    price: "À partir de 120€/demi-journée"
  }
];

const CustomServices = () => {
  const { toast } = useToast();

  const handleBooking = (service: string) => {
    toast({
      title: "Demande envoyée",
      description: `Nous vous contacterons rapidement pour organiser votre ${service.toLowerCase()}.`
    });
  };

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
            Services Sur Mesure
          </h2>
          <p className="text-stone-dark max-w-2xl mx-auto">
            Des prestations exclusives pour une expérience inoubliable
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-wood mb-4">{service.icon}</div>
              <h3 className="text-xl font-serif text-wood-dark mb-2">
                {service.title}
              </h3>
              <p className="text-stone-dark mb-4">
                {service.description}
              </p>
              <p className="text-wood-dark font-medium mb-4">
                {service.price}
              </p>
              <Button 
                variant="outline"
                className="w-full border-wood text-wood hover:bg-wood hover:text-white transition-colors"
                onClick={() => handleBooking(service.title)}
              >
                Réserver
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomServices;