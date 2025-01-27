import { Link, useLocation } from "react-router-dom";
import { SocialLinks } from "./SocialLinks";

interface DesktopMenuProps {
  scrollToSection: (sectionId: string) => void;
}

export const DesktopMenu = ({ scrollToSection }: DesktopMenuProps) => {
  const location = useLocation();

  return (
    <div className="hidden md:flex items-center gap-8">
      <div className="hidden md:flex gap-8">
        <Link
          to="/chalet-history"
          className={`text-wood-dark hover:text-wood transition-colors font-serif ${
            location.pathname === "/chalet-history" ? "text-wood" : ""
          }`}
        >
          Le Chalet
        </Link>
        <Link
          to="/rooms"
          className={`text-wood-dark hover:text-wood transition-colors font-serif ${
            location.pathname === "/rooms" ? "text-wood" : ""
          }`}
        >
          Chambres
        </Link>
        <button
          onClick={() => scrollToSection("reservation")}
          className="text-wood-dark hover:text-wood transition-colors font-serif"
        >
          Réserver
        </button>
        <Link
          to="/activities"
          className={`text-wood-dark hover:text-wood transition-colors font-serif ${
            location.pathname === "/activities" ? "text-wood" : ""
          }`}
        >
          Activités
        </Link>
        <Link
          to="/spa"
          className={`text-wood-dark hover:text-wood transition-colors font-serif ${
            location.pathname === "/spa" ? "text-wood" : ""
          }`}
        >
          Spa & Bien-être
        </Link>
        <Link
          to="/events"
          className={`text-wood-dark hover:text-wood transition-colors font-serif ${
            location.pathname === "/events" ? "text-wood" : ""
          }`}
        >
          Événements
        </Link>
        <Link
          to="/contact"
          className={`text-wood-dark hover:text-wood transition-colors font-serif ${
            location.pathname === "/contact" ? "text-wood" : ""
          }`}
        >
          Contact
        </Link>
      </div>
      <SocialLinks />
    </div>
  );
};