const Activities = () => {
  return (
    <div className="min-h-screen bg-snow">
      <Navigation />
      <div className="pt-32 pb-16">
        <ActivityHero />
        <div className="container mx-auto px-4">
          <ActivityHighlights />
          <SeasonalActivities />
          <LocalAttractions />
          <Reviews />
        </div>
      </div>
    </div>
  );
};

export default Activities;