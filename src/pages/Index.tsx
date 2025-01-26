import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Spaces from "@/components/Spaces";
import Booking from "@/components/Booking";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Spaces />
      <Booking />
    </div>
  );
};

export default Index;