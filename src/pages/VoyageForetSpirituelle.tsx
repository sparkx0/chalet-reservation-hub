import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const VoyageForetSpirituelle = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dietaryRestrictions: "",
    roomPreference: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Votre demande de réservation a été envoyée avec succès !");
    setFormData({
      name: "",
      email: "",
      phone: "",
      dietaryRestrictions: "",
      roomPreference: "",
      message: "",
    });
    setSelectedDate(undefined);
  };

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
                Réservez votre Voyage en Forêt Spirituelle
              </h1>
              <p className="text-xl text-snow-light/90 mb-8">
                Une expérience immersive de 3 jours au cœur du Mont-Salève
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Programme et Dates */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h2 className="text-3xl font-serif text-wood-dark mb-6">Prochaines Dates</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-serif text-wood-dark">Dates disponibles :</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="w-24">5-7 Août</span>
                        <span className="text-green-600">Places disponibles</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-24">12-14 Août</span>
                        <span className="text-yellow-600">Dernières places</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-24">19-21 Août</span>
                        <span className="text-green-600">Places disponibles</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Formulaire de Réservation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h2 className="text-3xl font-serif text-wood-dark mb-6">Réserver votre place</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="roomPreference">Préférence de chambre</Label>
                      <select
                        id="roomPreference"
                        className="w-full border rounded-md p-2"
                        value={formData.roomPreference}
                        onChange={(e) => setFormData({ ...formData, roomPreference: e.target.value })}
                        required
                      >
                        <option value="">Sélectionnez une option</option>
                        <option value="private">Chambre privée</option>
                        <option value="shared">Chambre partagée</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dietaryRestrictions">Restrictions alimentaires</Label>
                    <Input
                      id="dietaryRestrictions"
                      value={formData.dietaryRestrictions}
                      onChange={(e) => setFormData({ ...formData, dietaryRestrictions: e.target.value })}
                      placeholder="Végétarien, sans gluten, etc."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message (facultatif)</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Questions ou besoins particuliers..."
                    />
                  </div>
                  <Button type="submit" className="w-full bg-wood hover:bg-wood-dark text-white">
                    Réserver maintenant
                  </Button>
                </form>
              </motion.div>

              {/* Tarifs et Conditions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h2 className="text-3xl font-serif text-wood-dark mb-6">Tarifs et Conditions</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-serif text-wood-dark">Options d'hébergement</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between items-center">
                        <span>Chambre privée</span>
                        <span className="font-bold">1'299 EUR</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Chambre partagée</span>
                        <span className="font-bold">899 EUR</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-serif text-wood-dark">Ce qui est inclus</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Hébergement en pension complète</li>
                      <li>Repas bio et végétariens</li>
                      <li>Toutes les activités et ateliers</li>
                      <li>Accès aux espaces communs</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* FAQ */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h2 className="text-3xl font-serif text-wood-dark mb-6">Questions Fréquentes</h2>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Que dois-je apporter ?</AccordionTrigger>
                    <AccordionContent>
                      Des vêtements confortables, des chaussures de marche, un tapis de yoga si vous en avez un, des vêtements chauds pour le soir, et vos effets personnels de toilette.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Quel est le niveau de difficulté des activités ?</AccordionTrigger>
                    <AccordionContent>
                      Les activités sont adaptées à tous les niveaux. Aucune expérience préalable n'est requise, seulement une bonne volonté et une ouverture d'esprit.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Comment se rendre sur place ?</AccordionTrigger>
                    <AccordionContent>
                      Le Mont-Salève est accessible en voiture depuis Genève (30 minutes) ou Annecy (45 minutes). Un service de navette peut être organisé depuis la gare la plus proche.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>

              {/* Témoignages */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h2 className="text-3xl font-serif text-wood-dark mb-6">Témoignages</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-snow p-6 rounded-lg">
                    <p className="italic mb-4">"Une expérience transformatrice qui m'a permis de me reconnecter à l'essentiel. La beauté du lieu et la qualité de l'encadrement sont exceptionnelles."</p>
                    <p className="font-bold">- Marie L.</p>
                  </div>
                  <div className="bg-snow p-6 rounded-lg">
                    <p className="italic mb-4">"Ces trois jours ont été un véritable cadeau. Les activités, l'ambiance, les repas, tout était parfait. Je recommande vivement !"</p>
                    <p className="font-bold">- Pierre D.</p>
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