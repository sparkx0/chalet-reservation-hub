import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import Logo from "./Logo";
import { MobileMenu } from "./navigation/MobileMenu";
import { DesktopMenu } from "./navigation/DesktopMenu";
import { Input } from "./ui/input";
import { toast } from "sonner";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Liste des pages disponibles pour la recherche
    const pages = [
      { path: "/rooms", keywords: ["chambre", "suite", "hébergement", "dormir"] },
      { path: "/spa", keywords: ["spa", "massage", "bien-être", "détente"] },
      { path: "/activities", keywords: ["activité", "sport", "loisir"] },
      { path: "/events", keywords: ["événement", "séminaire", "mariage"] },
      { path: "/masterclass-boxe", keywords: ["boxe", "sport", "masterclass"] },
    ];

    const query = searchQuery.toLowerCase();
    const matchingPage = pages.find(page => 
      page.keywords.some(keyword => keyword.includes(query) || query.includes(keyword))
    );

    if (matchingPage) {
      navigate(matchingPage.path);
      setSearchQuery("");
      toast.success("Page trouvée !");
    } else {
      toast.error("Aucun résultat trouvé");
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 bg-white ${
        isScrolled ? "shadow-sm py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="z-50">
            <Logo />
          </Link>

          <div className="hidden md:flex items-center gap-4 flex-1 justify-center max-w-xs">
            <form onSubmit={handleSearch} className="w-full relative">
              <Input
                type="search"
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 text-sm"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </form>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-wood-dark hover:text-wood z-50"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <MobileMenu
            isMobileMenuOpen={isMobileMenuOpen}
            scrollToSection={scrollToSection}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleSearch={handleSearch}
          />
          <DesktopMenu scrollToSection={scrollToSection} />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;