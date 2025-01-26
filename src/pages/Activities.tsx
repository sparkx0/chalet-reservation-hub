import Navigation from "@/components/Navigation";
import ActivityHero from "@/components/ActivityHero";
import SeasonalActivities from "@/components/SeasonalActivities";
import LocalAttractions from "@/components/LocalAttractions";

const Activities = () => {
  return (
    <div className="min-h-screen bg-snow">
      <Navigation />
      <ActivityHero />
      <SeasonalActivities />
      <LocalAttractions />
    </div>
  );
};

export default Activities;