import { useParams } from "react-router-dom";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { rooms } from "@/components/rooms/roomsData";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { Bed, Users, Bath, Maximize2, Image, CreditCard } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
            className="max-w-7xl mx-auto"
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Image Carousel Section */}
                <div className="space-y-6">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {additionalImages.map((image, index) => (
                        <CarouselItem key={index}>
                          <div
                            className="relative aspect-[4/3] cursor-pointer"
                            onClick={() => setSelectedImage(image)}
                          >
                            <img
                              src={image}
                              alt={`Vue ${index + 1} de ${room.name}`}
                              className="object-cover w-full h-full rounded-lg"
                            />
                            <div className="absolute bottom-2 right-2 bg-black/50 text-white p-2 rounded-full">
                              <Image size={20} />
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                </div>

                {/* Room Details Section */}
                <div className="space-y-6">
                  <div>
                    <h1 className="text-4xl font-serif text-wood-dark mb-4">{room.name}</h1>
                    <p className="text-lg text-stone-dark mb-6">{room.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
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

                    <Accordion type="single" collapsible className="mb-6">
                      <AccordionItem value="rules">
                        <AccordionTrigger className="text-xl font-serif text-wood-dark">
                          Règles de la maison
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-3 text-stone-dark">
                            <li>• Arrivée : 15h00 / Départ : 11h00</li>
                            <li>• Lit enfant disponible sur demande</li>
                            <li>• Les fêtes/événements ne sont pas autorisés</li>
                            <li className="mt-4">Cartes bancaires acceptées :</li>
                            <li className="flex gap-4">
                              <CreditCard className="text-wood-dark" />
                              <span>Visa, Mastercard, American Express, Maestro</span>
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="info">
                        <AccordionTrigger className="text-xl font-serif text-wood-dark">
                          À savoir
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3 text-stone-dark">
                            <p>Veuillez informer l'établissement Le chalet du Salève à l'avance de l'heure à laquelle vous prévoyez d'arriver. Vous pouvez indiquer cette information dans la rubrique « Demandes spéciales » lors de la réservation ou contacter directement l'établissement.</p>
                            <p>Les enterrements de vie de célibataire et autres fêtes de ce type sont interdits dans cet établissement.</p>
                            <p>Les clients âgés de moins de 18 ans doivent être accompagnés d'un parent ou d'un tuteur légal pour pouvoir s'enregistrer.</p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

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