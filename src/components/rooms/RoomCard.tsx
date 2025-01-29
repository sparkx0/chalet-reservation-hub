import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Room } from "./roomsData";
import { Wifi, Tv, Wind, Droplets, Scale, Maximize2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface RoomCardProps {
  room: Room;
}

const RoomCard = ({ room }: RoomCardProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    const path = `/room/${room.id}`;
    navigate(path);
  };

  const amenityIcons = {
    wifi: <Wifi className="w-4 h-4" />,
    tv: <Tv className="w-4 h-4" />,
    climatisation: <Wind className="w-4 h-4" />,
    sechecheveux: <Droplets className="w-4 h-4" />,
    pesepersonne: <Scale className="w-4 h-4" />,
    superficie: <Maximize2 className="w-4 h-4" />,
  };

  return (
    <Card 
      className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-serif text-wood-dark">{room.name}</h3>
          <Badge variant="secondary" className="bg-wood-light/20 text-wood-dark">
            {room.price}€ / nuit
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-wood-dark">
            <Maximize2 className="w-4 h-4" />
            <span>{room.superficie} m²</span>
          </div>
          <p className="text-stone-dark">{room.description}</p>
          <div className="flex flex-wrap gap-3">
            {room.amenities.map((amenity) => (
              <div
                key={amenity}
                className="flex items-center gap-1 text-sm text-wood-dark/80"
              >
                {amenityIcons[amenity as keyof typeof amenityIcons]}
                <span>{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RoomCard;