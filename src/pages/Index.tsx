import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Spaces from "@/components/Spaces";
import Details from "@/components/Details";
import Booking from "@/components/Booking";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Details />
      <Spaces />
      <Booking />
    </div>
  );
};

export default Index;