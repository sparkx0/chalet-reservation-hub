import { Link } from "react-router-dom";
import { SocialLinks } from "./SocialLinks";
import { Search } from "lucide-react";
import { Input } from "../ui/input";

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  scrollToSection: (sectionId: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearch: (e: React.FormEvent) => void;
}

export const MobileMenu = ({
  isMobileMenuOpen,
  scrollToSection,
  searchQuery,
  setSearchQuery,
  handleSearch,
}: MobileMenuProps) => {
  return (
    <div
      className={`${
        isMobileMenuOpen ? "flex" : "hidden"
      } md:hidden fixed inset-0 bg-white flex-col items-center justify-center space-y-8 pt-20`}
    >
      <div className="w-full px-4 mb-4">
        <form onSubmit={handleSearch} className="relative">
          <Input
            type="search"
            placeholder="Rechercher..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        </form>
      </div>

      <button
        onClick={() => scrollToSection("reservation")}
        className="text-wood-dark hover:text-wood transition-colors font-serif text-xl"
      >
        Accueil
      </button>
      <Link
        to="/chalet-history"
        className="text-wood-dark hover:text-wood transition-colors font-serif text-xl"
      >
        Le Chalet
      </Link>
      <Link
        to="/rooms"
        className="text-wood-dark hover:text-wood transition-colors font-serif text-xl"
      >
        Chambres
      </Link>
      <Link
        to="/activities"
        className="text-wood-dark hover:text-wood transition-colors font-serif text-xl"
      >
        Activités
      </Link>
      <Link
        to="/spa"
        className="text-wood-dark hover:text-wood transition-colors font-serif text-xl"
      >
        Spa & Bien-être
      </Link>
      <Link
        to="/events"
        className="text-wood-dark hover:text-wood transition-colors font-serif text-xl"
      >
        Événements
      </Link>
      <Link
        to="/contact"
        className="text-wood-dark hover:text-wood transition-colors font-serif text-xl"
      >
        Contact
      </Link>

      <SocialLinks className="mt-8" />
    </div>
  );
};