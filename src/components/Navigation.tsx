import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { Instagram, Facebook, Youtube, BrandTiktok } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
    }
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
          <Link to="/">
            <Logo />
          </Link>
          <div className="flex items-center gap-8">
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
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-wood-dark hover:text-wood transition-colors"
              >
                <BrandTiktok className="w-5 h-5" />
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