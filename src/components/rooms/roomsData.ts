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
    name: "Salève",
    description: "Suite luxueuse avec vue panoramique sur les Alpes, lit king-size et espace salon privé.",
    price: 280,
    superficie: 35,
    image: "/lovable-uploads/b389c2bf-ff3b-4f89-a42c-80a6a3aace7d.png",
    amenities: ["wifi", "tv", "climatisation", "sechecheveux", "pesepersonne", "superficie"],
  },
  {
    id: 2,
    name: "Atlas",
    description: "Suite idéale pour les familles avec deux chambres séparées et un salon commun.",
    price: 420,
    superficie: 55,
    image: "/lovable-uploads/1fa5ade7-9389-4844-87eb-72a28c18610c.png",
    amenities: ["wifi", "tv", "climatisation", "sechecheveux", "pesepersonne", "superficie"],
  },
  {
    id: 3,
    name: "Mont-Blanc",
    description: "Chambre élégante avec balcon privé et vue sur la vallée.",
    price: 320,
    superficie: 40,
    image: "/lovable-uploads/e648d43b-e0c4-443d-b120-43117be90e8e.png",
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