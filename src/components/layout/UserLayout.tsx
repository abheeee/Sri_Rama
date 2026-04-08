import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import AboutOverlay from "../AboutOverlay"; // adjust path if needed

const UserLayout: React.FC = () => {
  const [showAbout, setShowAbout] = useState(false);

  const toggleAbout = () => {
    setShowAbout((prev) => !prev);
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-gray-100 text-black">

      <Header />

      {/* 🔥 MAIN CONTENT */}
      <main className="flex-1 relative w-full overflow-x-hidden">

        <Outlet />

        {/* 🔥 ABOUT OVERLAY */}
        {showAbout && <AboutOverlay onClose={toggleAbout} />}

      </main>

      <Footer />

    </div>
  );
};

export default UserLayout;