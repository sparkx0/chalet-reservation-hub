import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { Instagram, Facebook, Youtube, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-sm shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="z-50">
            <Logo />
          </Link>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-wood-dark hover:text-wood z-50"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div
            className={`${
              isMobileMenuOpen ? "flex" : "hidden"
            } md:hidden fixed inset-0 bg-white flex-col items-center justify-center space-y-8 pt-20`}
          >
            <button
              onClick={() => scrollToSection("espaces")}
              className="text-wood-dark hover:text-wood transition-colors font-serif text-xl"
            >
              Les Espaces
            </button>
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
              to="/contact"
              className="text-wood-dark hover:text-wood transition-colors font-serif text-xl"
            >
              Contact
            </Link>

            <div className="flex items-center gap-6 mt-8">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-wood-dark hover:text-wood transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-wood-dark hover:text-wood transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-wood-dark hover:text-wood transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <div className="hidden md:flex gap-8">
              <button
                onClick={() => scrollToSection("espaces")}
                className="text-wood-dark hover:text-wood transition-colors font-serif"
              >
                Les Espaces
              </button>
              <button
                onClick={() => scrollToSection("details")}
                className="text-wood-dark hover:text-wood transition-colors font-serif"
              >
                Le Chalet
              </button>
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
                to="/contact"
                className={`text-wood-dark hover:text-wood transition-colors font-serif ${
                  location.pathname === "/contact" ? "text-wood" : ""
                }`}
              >
                Contact
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-wood-dark hover:text-wood transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-wood-dark hover:text-wood transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-wood-dark hover:text-wood transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;