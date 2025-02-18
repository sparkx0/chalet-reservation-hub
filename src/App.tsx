
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "@/pages/Index";
import Rooms from "@/pages/Rooms";
import RoomDetail from "@/pages/RoomDetail";
import Activities from "@/pages/Activities";
import Spa from "@/pages/Spa";
import Events from "@/pages/Events";
import MasterclassBoxe from "@/pages/MasterclassBoxe";
import RetraiteSpirituelle from "@/pages/RetraiteSpirituelle";
import WellnessWeekend from "@/pages/WellnessWeekend";
import Contact from "@/pages/Contact";
import ChaletHistory from "@/pages/ChaletHistory";
import PrivatePool from "@/pages/PrivatePool";
import Success from "@/pages/Success";
import MasterclassPatisserie from "@/pages/MasterclassPatisserie";
import DecouverteFuste from "@/pages/DecouverteFuste";
import PrivateEvents from "@/pages/PrivateEvents";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

// Composant pour gérer le scroll en haut de page
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/room/:id" element={<RoomDetail />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/spa" element={<Spa />} />
        <Route path="/events" element={<Events />} />
        <Route path="/masterclass-boxe" element={<MasterclassBoxe />} />
        <Route path="/retraite-spirituelle" element={<RetraiteSpirituelle />} />
        <Route path="/wellness-weekend" element={<WellnessWeekend />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/chalet-history" element={<ChaletHistory />} />
        <Route path="/private-pool" element={<PrivatePool />} />
        <Route path="/success" element={<Success />} />
        <Route path="/masterclass-patisserie" element={<MasterclassPatisserie />} />
        <Route path="/decouverte-fuste" element={<DecouverteFuste />} />
        <Route path="/private-events" element={<PrivateEvents />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
