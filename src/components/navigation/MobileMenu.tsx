import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { SocialLinks } from "./SocialLinks";

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  scrollToSection: (sectionId: string) => void;
}

export const MobileMenu = ({
  isMobileMenuOpen,
  scrollToSection,
}: MobileMenuProps) => {
  return (
    <div
      className={`${
        isMobileMenuOpen ? "flex" : "hidden"
      } md:hidden fixed inset-0 bg-white flex-col items-center justify-center space-y-8 pt-20`}
    >
      <button
        onClick={() => scrollToSection("details")}
        className="text-wood-dark hover:text-wood transition-colors font-serif text-xl"
      >
        Le Chalet
      </button>
      <Link
        to="/rooms"
        className="text-wood-dark hover:text-wood transition-colors font-serif text-xl"
      >
        Chambres
      </Link>
      <button
        onClick={() => scrollToSection("reservation")}
        className="text-wood-dark hover:text-wood transition-colors font-serif text-xl"
      >
        Réserver
      </button>
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