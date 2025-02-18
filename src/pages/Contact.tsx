
import Navigation from "@/components/Navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const navigate = useNavigate();
  const [files, setFiles] = useState<FileList | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    guests: "",
    eventDetails: "",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data and files to your backend
    console.log("Form data:", formData);
    console.log("Files:", files);
    
    toast.success("Votre demande a été envoyée avec succès !");
    navigate("/success");
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
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-serif text-wood-dark text-center mb-8">
              Contactez-nous
            </h1>
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Nom complet</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
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
                  <Label htmlFor="eventDetails">Détails de l'événement</Label>
                  <Textarea
                    id="eventDetails"
                    value={formData.eventDetails}
                    onChange={(e) =>
                      setFormData({ ...formData, eventDetails: e.target.value })
                    }
                    placeholder="Décrivez votre événement, vos besoins particuliers..."
                    className="min-h-[150px]"
                    required
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

                <Button
                  type="submit"
                  className="w-full bg-wood hover:bg-wood-dark text-white"
                >
                  Envoyer la demande
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
