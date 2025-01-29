import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";
import WorldClock from "./WorldClock";

const Footer = () => {
  return (
    <footer className="bg-wood-light/10 border-t border-wood/10">
      <WorldClock />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/">
              <Logo variant="footer" />
            </Link>
            <p className="text-wood-dark/80 text-sm">
              Un chalet d'exception au cœur des Alpes, offrant une expérience unique de luxe et de bien-être.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-wood-dark text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-wood-dark/80 hover:text-wood transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/activities" className="text-wood-dark/80 hover:text-wood transition-colors">
                  Activités
                </Link>
              </li>
              <li>
                <Link to="/spa" className="text-wood-dark/80 hover:text-wood transition-colors">
                  Spa & Bien-être
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-wood-dark/80 hover:text-wood transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-wood-dark text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-wood-dark/80">
                <Phone className="w-4 h-4" />
                <span>+33 4 50 XX XX XX</span>
              </li>
              <li className="flex items-center gap-2 text-wood-dark/80">
                <Mail className="w-4 h-4" />
                <span>contact@chaletdusaleve.fr</span>
              </li>
              <li className="flex items-center gap-2 text-wood-dark/80">
                <MapPin className="w-4 h-4" />
                <span>Route du Salève, 74160 Beaumont</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-serif text-wood-dark text-lg mb-4">Suivez-nous</h3>
            <div className="flex gap-4">
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
        </div>

        <div className="mt-12 pt-6 border-t border-wood/10">
          <p className="text-center text-wood-dark/60 text-sm">
            © {new Date().getFullYear()} Le Chalet du Salève. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;