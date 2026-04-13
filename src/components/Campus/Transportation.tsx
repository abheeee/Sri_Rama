import { CampusCard } from "./Campus";

const Transportation = () => (
  <div
  className="campus-grid"
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1.5rem",
  }}
>
    <CampusCard image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b" label="Cricket Ground" description="Full-size turf pitch with practice nets and floodlights for evening matches." />
    <CampusCard image="https://images.unsplash.com/photo-1546519638-68e109498ffc" label="Basketball Court" description="Outdoor floodlit court following regulation dimensions for inter-college tournaments." />
    <CampusCard image="https://images.unsplash.com/photo-1574629810360-7efbbe195018" label="Football Field" description="Sprawling ground used for football, athletics, and annual sports day events." />
    <CampusCard image="https://images.unsplash.com/photo-1554068865-24cecd4e34b8" label="Indoor Games" description="Dedicated hall for table tennis, chess, carrom, and other indoor sports." />
  </div>
);
export default Transportation;