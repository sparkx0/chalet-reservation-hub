import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Rooms from "@/pages/Rooms";
import RoomDetail from "@/pages/RoomDetail";
import Activities from "@/pages/Activities";
import Spa from "@/pages/Spa";
import Events from "@/pages/Events";
import MasterclassBoxe from "@/pages/MasterclassBoxe";
import RetraiteSpirituelle from "@/pages/RetraiteSpirituelle";
import Contact from "@/pages/Contact";
import ChaletHistory from "@/pages/ChaletHistory";
import PrivatePool from "@/pages/PrivatePool";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/room/:id" element={<RoomDetail />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/spa" element={<Spa />} />
        <Route path="/events" element={<Events />} />
        <Route path="/masterclass-boxe" element={<MasterclassBoxe />} />
        <Route path="/retraite-spirituelle" element={<RetraiteSpirituelle />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/chalet-history" element={<ChaletHistory />} />
        <Route path="/private-pool" element={<PrivatePool />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
