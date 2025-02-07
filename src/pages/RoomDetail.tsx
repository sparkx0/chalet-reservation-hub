
import { useParams } from "react-router-dom";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { rooms } from "@/components/rooms/roomsData";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { differenceInDays } from "date-fns";
import RoomImages from "@/components/room-detail/RoomImages";
import RoomFeatures from "@/components/room-detail/RoomFeatures";
import RoomRules from "@/components/room-detail/RoomRules";
import BookingSection from "@/components/room-detail/BookingSection";

const RoomDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [dateRange, setDateRange] = useState<{
    from: Date;
    to: Date | undefined;
  }>({
    from: new Date(),
    to: undefined,
  });

  const room = rooms.find((r) => r.id === Number(id));

  if (!room) {
    return <div>Chambre non trouvée</div>;
  }

  const calculateTotalPrice = () => {
    if (!dateRange.to) return room.price;
    const nights = differenceInDays(dateRange.to, dateRange.from);
    return nights * room.price;
  };

  const additionalImages = room.id === 1 ? [
    room.image,
    "/lovable-uploads/7b4cfbe4-8fcd-4828-b1be-4fad01c2b109.png",
    "/lovable-uploads/fb4cee1f-dafd-44dd-83ed-a077116ade8b.png",
    "/lovable-uploads/77ef421e-0533-4aa0-880d-445f49706795.png",
    "/lovable-uploads/82fa1c1d-0fd0-4eae-a8ed-9c87072ef7cc.png"
  ] : [
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
                <div className="space-y-6">
                  <RoomImages 
                    images={additionalImages}
                    onImageClick={setSelectedImage}
                  />
                </div>

                <div className="space-y-6">
                  <div>
                    <h1 className="text-4xl font-serif text-wood-dark mb-4">{room.name}</h1>
                    <p className="text-lg text-stone-dark mb-6">{room.description}</p>

                    <RoomFeatures superficie={room.superficie} />
                    <RoomRules />
                    <BookingSection
                      price={room.price}
                      dateRange={dateRange}
                      onDateSelect={setDateRange}
                      calculateTotalPrice={calculateTotalPrice}
                    />
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
