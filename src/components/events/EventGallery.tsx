import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  "/lovable-uploads/4d342c91-ceb6-4141-a701-6f69d7172cd8.png",
  "/lovable-uploads/0ce6cff6-6aba-49e0-9e8a-45515a175135.png",
  "/lovable-uploads/1fa5ade7-9389-4844-87eb-72a28c18610c.png",
  "/lovable-uploads/37aa1fba-d804-4af0-b331-1dbeb3db8939.png",
];

const EventGallery = () => {
  return (
    <section className="py-20 bg-wood-light/10">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-serif text-wood-dark text-center mb-12"
        >
          Notre Galerie
        </motion.h2>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default EventGallery;