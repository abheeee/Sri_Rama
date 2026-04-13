import { CampusCard } from "./Campus";

const Classrooms = () => (
<div
  className="campus-grid"
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1.5rem",
  }}
>
    <CampusCard image="https://images.unsplash.com/photo-1580582932707-520aed937b7b" label="Smart Classrooms" description="Interactive boards, projectors, and Wi-Fi enabled rooms for modern learning." />
    <CampusCard image="https://images.unsplash.com/photo-1509062522246-3755977927d7" label="Lecture Halls" description="Tiered seating for 120+ students with excellent acoustics and visibility." />
    <CampusCard image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655" label="Tutorial Rooms" description="Small-group spaces designed for focused discussion and mentoring sessions." />
    <CampusCard image="https://images.unsplash.com/photo-1497633762265-9d179a990aa6" label="Digital Library" description="24/7 access to e-journals, online databases, and research repositories." />
  </div>
);
export default Classrooms;