import { CampusCard } from "./Campus";

const RecreationalArea = () => (
 <div
  className="campus-grid"
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1.5rem",
  }}
>
    <CampusCard image="https://images.unsplash.com/photo-1506126613408-eca07ce68773" label="Yoga & Meditation" description="A serene dedicated space for daily yoga, mindfulness, and stress relief." />
    <CampusCard image="https://images.unsplash.com/photo-1571902943202-507ec2618e8f" label="Gymnasium" description="Modern fitness centre with cardio equipment, free weights, and trained instructors." />
    <CampusCard image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac" label="Student Lounge" description="A relaxed hangout space for students to unwind between classes." />
    <CampusCard image="https://images.unsplash.com/photo-1565118531796-763e5082d113" label="Open Air Theatre" description="Scenic outdoor stage hosting cultural evenings, fests, and student performances." />
  </div>
);
export default RecreationalArea;