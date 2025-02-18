
import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface EventBookingProps {
  selectedEvent: string | null;
}

const EventBooking = ({ selectedEvent }: EventBookingProps) => {
  const [files, setFiles] = useState<FileList | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    message: "",
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      // Check file types
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/png', 'image/jpeg'];
      const validFiles = Array.from(selectedFiles).every(file => allowedTypes.includes(file.type));
      
      if (!validFiles) {
        toast.error("Formats de fichiers acceptés: PDF, Word, PNG, JPG");
        return;
      }
      
      // Check file sizes (max 5MB each)
      const validSizes = Array.from(selectedFiles).every(file => file.size <= 5 * 1024 * 1024);
      
      if (!validSizes) {
        toast.error("La taille maximum par fichier est de 5MB");
        return;
      }

      setFiles(selectedFiles);
      toast.success(`${selectedFiles.length} fichier(s) sélectionné(s)`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Booking data:", { eventId: selectedEvent, ...formData, files });
    toast.success("Votre demande a été envoyée avec succès !");
    setFormData({
      name: "",
      email: "",
      phone: "",
      guests: "",
      message: "",
    });
    setFiles(null);
    // Reset file input
    const fileInput = document.getElementById('files') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  };

  return (
    <section id="booking" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-serif text-wood-dark text-center mb-8">
            Réserver un Événement
          </h2>
          <div className="bg-white rounded-lg shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
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
                <Label htmlFor="guests">Nombre de personnes</Label>
                <Input
                  id="guests"
                  type="number"
                  min="1"
                  value={formData.guests}
                  onChange={(e) =>
                    setFormData({ ...formData, guests: e.target.value })
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message (facultatif)</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Précisez vos besoins particuliers..."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="files">Documents complémentaires</Label>
                <Input
                  id="files"
                  type="file"
                  onChange={handleFileChange}
                  multiple
                  accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                  className="cursor-pointer"
                />
                <p className="text-sm text-stone-dark mt-1">
                  Formats acceptés: PDF, Word, PNG, JPG (max 5MB par fichier)
                </p>
              </div>
              <button
                type="submit"
                className="w-full bg-wood hover:bg-wood-dark text-white py-3 rounded-lg transition-colors duration-300"
              >
                Envoyer la demande
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventBooking;
