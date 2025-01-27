import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Calendar, MapPin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import Map from "@/components/Map";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    description: "",
    specialRequests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    console.log("Form data:", formData);
  };

  return (
    <div className="min-h-screen bg-snow">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-serif text-wood-dark mb-6">
                Contactez-nous
              </h1>
              <div className="flex flex-col items-center justify-center gap-2 text-wood">
                <div className="flex items-center gap-2">
                  <Mail className="w-6 h-6" />
                  <span className="text-lg">Planifiez votre séjour de rêve</span>
                </div>
                <p className="text-wood-dark/80">
                  Route du Salève, 74350 LE SAPPEY
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
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
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="eventDate">Date souhaitée</Label>
                      <div className="relative">
                        <Input
                          id="eventDate"
                          type="date"
                          value={formData.eventDate}
                          onChange={(e) =>
                            setFormData({ ...formData, eventDate: e.target.value })
                          }
                          required
                        />
                        <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-stone" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Message</Label>
                    <Textarea
                      id="description"
                      placeholder="Décrivez-nous votre projet de séjour..."
                      className="min-h-[150px]"
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialRequests">Demandes spéciales</Label>
                    <Textarea
                      id="specialRequests"
                      placeholder="Avez-vous des demandes particulières ?"
                      className="min-h-[100px]"
                      value={formData.specialRequests}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          specialRequests: e.target.value,
                        })
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-wood hover:bg-wood-dark text-white py-3 rounded-lg transition-colors duration-300"
                  >
                    Envoyer
                  </button>
                </form>
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-xl p-8">
                  <h2 className="text-2xl font-serif text-wood-dark mb-4">
                    Notre adresse
                  </h2>
                  <div className="flex items-start gap-3 text-wood-dark/80 mb-6">
                    <MapPin className="w-5 h-5 mt-1" />
                    <p>
                      Le Chalet du Salève<br />
                      Route du Salève<br />
                      74350 LE SAPPEY<br />
                      Haute-Savoie, FRANCE
                    </p>
                  </div>
                  <Map />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;