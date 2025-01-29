import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Logo from "./Logo";
import SocialLinks from "./navigation/SocialLinks";

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t">
      <div className="container mx-auto px-4">
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
            <h3 className="font-semibold text-wood-dark mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/rooms" className="text-wood-dark/80 hover:text-wood-dark text-sm">
                  Nos Chambres
                </Link>
              </li>
              <li>
                <Link to="/spa" className="text-wood-dark/80 hover:text-wood-dark text-sm">
                  Le Spa
                </Link>
              </li>
              <li>
                <Link to="/activities" className="text-wood-dark/80 hover:text-wood-dark text-sm">
                  Activités
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-wood-dark/80 hover:text-wood-dark text-sm">
                  Événements
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-wood-dark mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-wood-dark/80 text-sm">
                Email: contact@chaletdusaleve.fr
              </li>
              <li className="text-wood-dark/80 text-sm">
                Tél: +33 4 50 XX XX XX
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-wood-dark mb-4">Réseaux Sociaux</h3>
            <SocialLinks className="flex gap-4" />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-wood-dark/60 text-sm">
            © {new Date().getFullYear()} Le Chalet du Salève. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;