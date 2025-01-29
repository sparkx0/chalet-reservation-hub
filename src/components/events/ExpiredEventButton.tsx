import { Link } from "react-router-dom";

const ExpiredEventButton = () => {
  return (
    <Link
      to="/contact"
      onClick={(e) => e.stopPropagation()}
      className="group relative overflow-hidden bg-gradient-to-r from-wood to-wood-dark text-white px-4 py-3 rounded text-center transition-all duration-300 hover:shadow-lg"
    >
      <span className="relative z-10 font-medium">
        Date expirée - Nous contacter
      </span>
      <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
    </Link>
  );
};

export default ExpiredEventButton;