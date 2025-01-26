import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const Booking = () => {
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    guests: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour traiter la réservation
    console.log("Données de réservation:", formData);
  };

  return (
    <section id="reservation" className="py-20 bg-wood-light/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-serif text-wood-dark text-center mb-8">
            Réserver votre séjour
          </h2>
          <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="startDate">Date d'arrivée</Label>
                  <Input
                    id="startDate"
                    type="date"
                    required
                    value={formData.startDate}
                    onChange={(e) =>
                      setFormData({ ...formData, startDate: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endDate">Date de départ</Label>
                  <Input
                    id="endDate"
                    type="date"
                    required
                    value={formData.endDate}
                    onChange={(e) =>
                      setFormData({ ...formData, endDate: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="guests">Nombre de personnes</Label>
                <Input
                  id="guests"
                  type="number"
                  min="1"
                  max="14"
                  required
                  value={formData.guests}
                  onChange={(e) =>
                    setFormData({ ...formData, guests: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
              <button
                type="submit"
                className="w-full bg-wood hover:bg-wood-dark text-white py-3 rounded-lg transition-colors duration-300"
              >
                Demander une réservation
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Booking;