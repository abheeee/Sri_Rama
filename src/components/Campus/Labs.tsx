import { CampusCard } from "./Campus";

const Labs = () => (
<div
  className="campus-grid"
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1.5rem",
  }}
>
    <CampusCard image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3" label="Computer Lab" description="100+ high-performance workstations with latest software and broadband internet." />
    <CampusCard image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" label="Physics Lab" description="Advanced instruments for optics, electronics, and modern physics experiments." />
    <CampusCard image="https://images.unsplash.com/photo-1554475901-4538ddfbccc2" label="Chemistry Lab" description="Fully equipped with fume hoods, analytical balances, and safety systems." />
    <CampusCard image="https://images.unsplash.com/photo-1576086213369-97a306d36557" label="Biology Lab" description="Modern microscopy, specimen collections, and molecular biology equipment." />
  </div>
);
export default Labs;