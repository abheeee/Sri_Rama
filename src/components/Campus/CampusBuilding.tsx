import { CampusCard } from "./Campus";

const CampusBuilding = () => (
<div
  className="campus-grid"
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1.5rem",
  }}
>
    <CampusCard image="https://images.unsplash.com/photo-1562774053-701939374585" label="Main Block" description="The iconic centrepiece of our campus, housing principal departments and administrative offices." />
    <CampusCard image="https://images.unsplash.com/photo-1497366216548-37526070297c" label="Administrative Block" description="Central hub for all college operations, records, and student services." />
    <CampusCard image="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b" label="Library" description="Over 20,000 volumes, digital resources, and quiet reading spaces." />
    <CampusCard image="https://images.unsplash.com/photo-1571260899304-425eee4c7efc" label="Auditorium" description="A 800-seat state-of-the-art venue for events, seminars, and cultural programmes." />
  </div>
);
export default CampusBuilding;