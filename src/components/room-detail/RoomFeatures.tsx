
import { Bed, Users, Bath, Maximize2 } from "lucide-react";

interface RoomFeaturesProps {
  superficie: number;
}

const RoomFeatures = ({ superficie }: RoomFeaturesProps) => {
  return (
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
        <span>{superficie} m²</span>
      </div>
    </div>
  );
};

export default RoomFeatures;
