import Classrooms from "./Classrooms";
import Labs from "./Labs";
import SeminarHall from "./SeminarHall";
import Sports from "./SportsandGames";
import Hostel from "./Hostel";
import Transportation from "./Transportation";
import Recreational from "./RecreationalArea";

export default function Campus() {
  return (
    <div className="bg-[#0a0a0f] text-white">

      <h1 className="text-4xl font-bold text-center py-10">
        Campus Overview
      </h1>

      {/* Sections */}
      <Classrooms />
      <Labs />
      <SeminarHall />
      <Sports />
      <Recreational />
      <Hostel />
      <Transportation />

    </div>
  );
}