import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import Map from "@/components/Map";
import Logo from "@/components/Logo";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

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
            <div className="flex flex-col items-center mb-12">
              <Logo variant="nav" />
              <h1 className="text-4xl font-serif text-wood-dark text-center mt-8 mb-4">
                Contactez-nous
              </h1>
              <div className="w-20 h-1 bg-wood-light rounded mb-8"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 bg-white p-8 rounded-lg shadow-sm">
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-wood-dark mb-2 font-medium">
                      Nom
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="border-wood-light focus:border-wood"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-wood-dark mb-2 font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="border-wood-light focus:border-wood"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-wood-dark mb-2 font-medium">
                      Sujet
                    </label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="border-wood-light focus:border-wood"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-wood-dark mb-2 font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="min-h-[150px] border-wood-light focus:border-wood"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-wood hover:bg-wood-dark text-white transition-colors"
                  >
                    Envoyer
                  </Button>
                </form>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-serif text-wood-dark mb-6">
                    Informations
                  </h2>
                  <div className="space-y-4 text-stone-dark">
                    <p>
                      <strong className="text-wood-dark">Adresse:</strong>
                      <br />
                      Le Chalet du Salève
                      <br />
                      123 Route des Alpes
                      <br />
                      74350 Le Sappey, France
                    </p>
                    <p>
                      <strong className="text-wood-dark">Téléphone:</strong>
                      <br />
                      +33 (0)4 50 XX XX XX
                    </p>
                    <p>
                      <strong className="text-wood-dark">Email:</strong>
                      <br />
                      contact@chaletdusaleve.fr
                    </p>
                  </div>
                </div>

                <div className="h-[300px] rounded-lg overflow-hidden shadow-sm">
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