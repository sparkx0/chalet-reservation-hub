import { useParams } from "react-router-dom";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { rooms } from "@/components/rooms/roomsData";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { Bed, Users, Bath, Maximize2 } from "lucide-react";

const RoomDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [date, setDate] = useState<Date | undefined>(new Date());

  const room = rooms.find((r) => r.id === Number(id));

  if (!room) {
    return <div>Chambre non trouvée</div>;
  }

  const additionalImages = [
    room.image,
    "/lovable-uploads/bathroom1.jpg",
    "/lovable-uploads/bathroom2.jpg",
    "/lovable-uploads/detail1.jpg",
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-snow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="space-y-6">
                  <h1 className="text-4xl font-serif text-wood-dark">{room.name}</h1>
                  <p className="text-lg text-stone-dark">{room.description}</p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-wood-dark">
                      <Bed className="w-5 h-5" />
                      <span>Lit King Size</span>
                    </div>
                    <div className="flex items-center gap-2 text-wood-dark">
                      <Users className="w-5 h-5" />
                      <span>2-3 personnes</span>
                    </div>
                    <div className="flex items-center gap-2 text-wood-dark">
                      <Bath className="w-5 h-5" />
                      <span>Salle de bain privée</span>
                    </div>
                    <div className="flex items-center gap-2 text-wood-dark">
                      <Maximize2 className="w-5 h-5" />
                      <span>{room.superficie} m²</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-serif text-wood-dark">Confort & Équipements</h2>
                    <ul className="list-disc list-inside space-y-2 text-stone-dark">
                      <li>Literie haut de gamme avec surmatelas</li>
                      <li>Mobilier en bois massif fait main</li>
                      <li>Smart TV 4K 55 pouces</li>
                      <li>Climatisation réversible</li>
                      <li>Mini-bar</li>
                      <li>Coffre-fort</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-serif text-wood-dark">Salle de bain</h2>
                    <ul className="list-disc list-inside space-y-2 text-stone-dark">
                      <li>Douche à l'italienne</li>
                      <li>Double vasque</li>
                      <li>Sèche-serviettes</li>
                      <li>Produits d'accueil bio</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    {additionalImages.map((image, index) => (
                      <div
                        key={index}
                        className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => setSelectedImage(image)}
                      >
                        <img
                          src={image}
                          alt={`Vue ${index + 1} de ${room.name}`}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="bg-wood-light/10 rounded-lg p-6 space-y-4">
                    <h2 className="text-2xl font-serif text-wood-dark">Réserver cette chambre</h2>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-semibold text-wood-dark">
                        {room.price}€ / nuit
                      </span>
                    </div>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border"
                    />
                    <Button className="w-full bg-wood hover:bg-wood-dark text-white">
                      Réserver maintenant
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <div className="relative aspect-[16/9]">
              <img
                src={selectedImage}
                alt="Vue détaillée"
                className="object-contain w-full h-full"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RoomDetail;