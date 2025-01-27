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
    name: "Chambre Deluxe Vue Montagne",
    description: "Spacieuse chambre avec vue panoramique sur les Alpes, lit king-size et espace salon.",
    price: 280,
    superficie: 35,
    image: "/lovable-uploads/37aa1fba-d804-4af0-b331-1dbeb3db8939.png",
    amenities: ["wifi", "tv", "climatisation", "sechecheveux", "pesepersonne", "superficie"],
  },
  {
    id: 2,
    name: "Suite Familiale",
    description: "Suite idéale pour les familles avec deux chambres séparées et un salon commun.",
    price: 420,
    superficie: 55,
    image: "/lovable-uploads/1fa5ade7-9389-4844-87eb-72a28c18610c.png",
    amenities: ["wifi", "tv", "climatisation", "sechecheveux", "pesepersonne", "superficie"],
  },
  {
    id: 3,
    name: "Chambre Premium",
    description: "Chambre élégante avec balcon privé et vue sur la vallée.",
    price: 320,
    superficie: 40,
    image: "/lovable-uploads/e648d43b-e0c4-443d-b120-43117be90e8e.png",
    amenities: ["wifi", "tv", "climatisation", "sechecheveux", "pesepersonne", "superficie"],
  },
  {
    id: 4,
    name: "Suite Executive",
    description: "Suite luxueuse avec salon séparé et jacuzzi privatif.",
    price: 520,
    superficie: 65,
    image: "/lovable-uploads/4d342c91-ceb6-4141-a701-6f69d7172cd8.png",
    amenities: ["wifi", "tv", "climatisation", "sechecheveux", "pesepersonne", "superficie"],
  },
  {
    id: 5,
    name: "Chambre Classique",
    description: "Chambre confortable et chaleureuse avec lit queen-size.",
    price: 240,
    superficie: 30,
    image: "/lovable-uploads/d7bfbf16-f70b-4310-8b52-e8e1798c2a04.png",
    amenities: ["wifi", "tv", "climatisation", "sechecheveux", "pesepersonne", "superficie"],
  },
];