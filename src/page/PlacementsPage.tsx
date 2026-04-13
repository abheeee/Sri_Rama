import PlacementHero from "@/components/Placements/PlacementHero";
import RecruitersSection from "@/components/Placements/RecruitersSection";
import TrainingPrograms from "@/components/Placements/TrainingPrograms";
import PlacementStats from "@/components/Placements/PlacementStats";

const PlacementsPage = () => {
  return (
    <div className="w-full">
      <PlacementHero />
      <RecruitersSection />
      <TrainingPrograms />
      <PlacementStats />
    </div>
  );
};

export default PlacementsPage;