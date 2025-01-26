import Navigation from "@/components/Navigation";
import ActivityHero from "@/components/ActivityHero";
import ActivityHighlights from "@/components/ActivityHighlights";
import SeasonalActivities from "@/components/SeasonalActivities";
import LocalAttractions from "@/components/LocalAttractions";

const Activities = () => {
  return (
    <div className="min-h-screen bg-snow">
      <Navigation />
      <ActivityHero />
      <ActivityHighlights />
      <SeasonalActivities />
      <LocalAttractions />
    </div>
  );
};

export default Activities;