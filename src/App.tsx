import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Activities from "./pages/Activities";
import Contact from "./pages/Contact";
import Spa from "./pages/Spa";
import Rooms from "./pages/Rooms";
import RoomDetail from "./pages/RoomDetail";
import Events from "./pages/Events";
import ChaletHistory from "./pages/ChaletHistory";
import MasterclassBoxe from "./pages/MasterclassBoxe";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

const AppRoutes = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/spa" element={<Spa />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:id" element={<RoomDetail />} />
          <Route path="/events" element={<Events />} />
          <Route path="/chalet-history" element={<ChaletHistory />} />
          <Route path="/masterclass-boxe" element={<MasterclassBoxe />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;