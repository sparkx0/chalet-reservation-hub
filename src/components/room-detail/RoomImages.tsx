
import { Image } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface RoomImagesProps {
  images: string[];
  onImageClick: (image: string) => void;
}

const RoomImages = ({ images, onImageClick }: RoomImagesProps) => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div
              className="relative aspect-[4/3] cursor-pointer"
              onClick={() => onImageClick(image)}
            >
              <img
                src={image}
                alt={`Vue ${index + 1}`}
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
  );
};

export default RoomImages;
