import { CampusCard } from "./Campus";

const SeminarHalls = () => (
  <div
  className="campus-grid"
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1.5rem",
  }}
>
    <CampusCard image="https://images.unsplash.com/photo-1540575467063-178a50c2df87" label="Main Seminar Hall" description="300-seat hall with HD projection, surround sound, and climate control." />
    <CampusCard image="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04" label="Conference Room" description="Professional boardroom setup for faculty meetings and external delegations." />
    <CampusCard image="https://images.unsplash.com/photo-1511578314322-379afb476865" label="Mini Hall" description="Flexible 80-seat venue for workshops, guest lectures, and departmental talks." />
    <CampusCard image="https://images.unsplash.com/photo-1475721027785-f74eccf877e2" label="Presentation Room" description="Dedicated room for project defences, viva voce, and student presentations." />
  </div>
);
export default SeminarHalls;