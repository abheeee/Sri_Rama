import React from "react";

// Import ALL sections
import AboutUs from "../components/about/Aboutus";
import Feedback from "../components/about/Feedback";
import LocationPage from "../components/about/LocationPage";
import GoverningBodyPage from "../components/about/GoverningBody";
import PrincipalMessage from "../components/about/PrincipalMessage";
import ScholarshipPage from "../components/about/ScholarshipPage";

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">

      {/* 🔥 HERO HEADER */}
      <div className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 py-16 text-center text-white shadow-lg">
        <h1 className="text-5xl font-bold">About Our Institution</h1>
        <p className="mt-4 text-lg opacity-90">
          Discover everything about our college
        </p>
      </div>

      {/* 🔹 ALL SECTIONS (LIKE HOME PAGE) */}
      <div className="flex flex-col gap-16 py-10 px-4 md:px-10">

        <AboutUs />

        <GoverningBodyPage />

        <PrincipalMessage />

        <ScholarshipPage />

        <Feedback />

        <LocationPage />

      </div>
    </div>
  );
};

export default AboutPage;
