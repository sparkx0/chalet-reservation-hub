import React from "react";
import Logo from "./Logo";

const Navigation = () => {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Logo />
        <div className="flex gap-6">
          <a href="#spaces" className="text-wood-dark hover:text-wood transition-colors">
            Espaces
          </a>
          <a href="#activities" className="text-wood-dark hover:text-wood transition-colors">
            Activités
          </a>
          <a href="#reservation" className="text-wood-dark hover:text-wood transition-colors">
            Réserver
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;