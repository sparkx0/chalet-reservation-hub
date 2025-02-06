
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    toast.success("Paiement effectué avec succès !");
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-snow flex items-center justify-center">
      <div className="max-w-md w-full mx-auto p-8">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-serif text-wood-dark mb-4">
            Paiement Réussi !
          </h1>
          <p className="text-stone-dark mb-6">
            Votre réservation a été confirmée. Vous serez redirigé vers la page
            d'accueil dans quelques secondes...
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-wood hover:bg-wood-dark text-white px-6 py-2 rounded-lg transition-colors duration-300"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
