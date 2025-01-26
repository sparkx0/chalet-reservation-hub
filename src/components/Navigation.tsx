import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

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
          <div className="hidden md:flex gap-8">
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
            <a
              href="#espaces"
              className="text-wood-dark hover:text-wood transition-colors font-serif"
            >
              Les Espaces
            </a>
            <a
              href="#details"
              className="text-wood-dark hover:text-wood transition-colors font-serif"
            >
              Le Chalet
            </a>
            <a
              href="#reservation"
              className="text-wood-dark hover:text-wood transition-colors font-serif"
            >
              Réserver
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;