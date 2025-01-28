import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PrivateBooking = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [duration, setDuration] = useState("3");
  const [guests, setGuests] = useState("1");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici nous simulons l'envoi de la demande
    toast.success(
      "Votre demande a été envoyée avec succès. Nous vous contacterons rapidement pour la confirmation."
    );
  };

  const calculatePrice = () => {
    return Number(duration) * 199;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-serif text-wood-dark text-center mb-8">
            Réservation Privative
          </h2>
          <div className="bg-snow rounded-lg shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-serif text-wood-dark mb-4">
                  Sélectionnez votre date
                </h3>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="duration">Durée (minimum 3 heures)</Label>
                  <Select
                    value={duration}
                    onValueChange={setDuration}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez la durée" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3">3 heures</SelectItem>
                      <SelectItem value="4">4 heures</SelectItem>
                      <SelectItem value="5">5 heures</SelectItem>
                      <SelectItem value="6">6 heures</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="guests">Nombre de personnes (max 6)</Label>
                  <Select
                    value={guests}
                    onValueChange={setGuests}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Nombre de personnes" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? "personne" : "personnes"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="bg-wood-light/10 p-4 rounded-lg">
                  <p className="text-xl font-serif text-wood-dark">
                    Total estimé : {calculatePrice()}€
                  </p>
                  <p className="text-sm text-stone-dark mt-2">
                    *La réservation est soumise à validation
                  </p>
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-wood hover:bg-wood-dark text-white py-3 rounded-lg transition-colors duration-300"
                >
                  Demander une réservation
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivateBooking;