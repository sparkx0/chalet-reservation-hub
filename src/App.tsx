import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Rooms from "./pages/Rooms";
import RoomDetail from "./pages/RoomDetail";
import Events from "./pages/Events";
import MasterclassBoxe from "./pages/MasterclassBoxe";
import Activities from "./pages/Activities";
import Spa from "./pages/Spa";
import PrivatePool from "./pages/PrivatePool";
import ChaletHistory from "./pages/ChaletHistory";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:id" element={<RoomDetail />} />
        <Route path="/events" element={<Events />} />
        <Route path="/masterclass-boxe" element={<MasterclassBoxe />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/spa" element={<Spa />} />
        <Route path="/private-pool" element={<PrivatePool />} />
        <Route path="/chalet-history" element={<ChaletHistory />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
