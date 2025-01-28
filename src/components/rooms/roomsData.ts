export interface Room {
  id: number;
  name: string;
  description: string;
  price: number;
  superficie: number;
  image: string;
  amenities: string[];
}

export const rooms: Room[] = [
  {
    id: 1,
    name: "La chambre Salève",
    description: "Chambre chaleureuse sous les combles avec poutres apparentes, lit king-size et espace salon cosy. Vue sur le ciel par fenêtre de toit.",
    price: 280,
    superficie: 35,
    image: "/lovable-uploads/1b847041-1b4e-4c52-a337-5543d3d27c8a.png",
    amenities: ["wifi", "tv", "climatisation", "sechecheveux", "pesepersonne", "superficie"],
  },
  {
    id: 2,
    name: "Atlas",
    description: "Suite idéale pour les familles avec deux chambres séparées et un salon commun.",
    price: 420,
    superficie: 55,
    image: "/lovable-uploads/2143be96-8145-4f73-8bda-48b58252f139.png",
    amenities: ["wifi", "tv", "climatisation", "sechecheveux", "pesepersonne", "superficie"],
  },
  {
    id: 3,
    name: "Mont-Blanc",
    description: "Chambre élégante avec balcon privé et vue sur la vallée.",
    price: 320,
    superficie: 40,
    image: "/lovable-uploads/40f0594d-9330-4f60-a87b-0db2f3846b44.png",
    amenities: ["wifi", "tv", "climatisation", "sechecheveux", "pesepersonne", "superficie"],
  },
  {
    id: 4,
    name: "Alaska",
    description: "Suite luxueuse avec salon séparé et jacuzzi privatif.",
    price: 520,
    superficie: 65,
    image: "/lovable-uploads/146dd9c2-c0d3-4301-b359-cf35214e6f92.png",
    amenities: ["wifi", "tv", "climatisation", "sechecheveux", "pesepersonne", "superficie"],
  },
  {
    id: 5,
    name: "ALPINE",
    description: "Chambre confortable et chaleureuse avec lit queen-size.",
    price: 240,
    superficie: 30,
    image: "/lovable-uploads/d7bfbf16-f70b-4310-8b52-e8e1798c2a04.png",
    amenities: ["wifi", "tv", "climatisation", "sechecheveux", "pesepersonne", "superficie"],
  },
];