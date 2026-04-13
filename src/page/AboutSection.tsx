import React from "react";
import { useParams } from "react-router-dom";

import AboutUs from "@/components/about/Aboutus";
import FeedbackPage from "@/components/about/Feedback";
import GoverningBodyPage from "@/components/about/GoverningBody";
import PrincipalMessage from "@/components/about/PrincipalMessage";
import LocationPage from "@/components/about/LocationPage";
import ScholarshipPage from "@/components/about/ScholarshipPage";

import PlaceholderPage from "./PlaceholderPage";

function titleFromSection(section: string) {
  return section
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (ch) => ch.toUpperCase());
}

const AboutSectionPage: React.FC = () => {
  const { section } = useParams();
  const normalized = (section ?? "").toLowerCase();

  if (!normalized) {
    return <PlaceholderPage title="About" />;
  }

  switch (normalized) {
    case "about-us":
    case "aboutus":
      return <AboutUs />;

    case "feedback":
      return <FeedbackPage />;

    case "governing-body":
    case "governingbody":
      return <GoverningBodyPage />;

    case "principal-message":
    case "principalmessage":
      return <PrincipalMessage />;

    case "location":
      return <LocationPage />;

    case "scholarship":
    case "scholarships":
      return <ScholarshipPage />;

    default:
      return <PlaceholderPage title={titleFromSection(normalized)} />;
  }
};

export default AboutSectionPage;
