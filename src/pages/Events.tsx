import { useState } from "react";
import Navigation from "@/components/Navigation";
import EventCard from "@/components/events/EventCard";
import EventGallery from "@/components/events/EventGallery";
import EventBooking from "@/components/events/EventBooking";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-snow">
      <Navigation />
      <div className="pt-32">
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-wood-dark">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/4d342c91-ceb6-4141-a701-6f69d7172cd8.png')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl font-serif text-white mb-4">
                Événements Exclusifs
              </h1>
              <p className="text-xl text-snow-light/90">
                Découvrez nos événements exceptionnels dans un cadre alpin unique
              </p>
            </motion.div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif text-wood-dark text-center mb-12">
              Prochains Événements
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <EventCard
                id="1"
                title="Masterclass Boxe Anglaise"
                date="15 Juin 2024"
                image="/lovable-uploads/d2c8ea04-bce7-4999-a91c-c30e452cf844.png"
                description="Une expérience unique avec le Champion du Monde WBC Nordine Oubaali"
                price="2199€"
                onSelect={() => navigate("/masterclass-boxe")}
              />
              <EventCard
                id="2"
                title="Week-end Bien-être"
                date="22-23 Juillet 2024"
                image="/lovable-uploads/1fa5ade7-9389-4844-87eb-72a28c18610c.png"
                description="Yoga, méditation et soins spa dans un cadre exceptionnel"
                price="450€"
                onSelect={() => setSelectedEvent("2")}
              />
              <EventCard
                id="3"
                title="Séminaire Luxe"
                date="10 Septembre 2024"
                image="/lovable-uploads/37aa1fba-d804-4af0-b331-1dbeb3db8939.png"
                description="Un cadre prestigieux pour vos événements professionnels"
                price="Sur devis"
                onSelect={() => setSelectedEvent("3")}
              />
            </div>
          </div>
        </section>

        {/* Gallery */}
        <EventGallery />

        {/* Booking Form */}
        <EventBooking selectedEvent={selectedEvent} />
      </div>
    </div>
  );
};

export default Events;