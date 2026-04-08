import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

interface HeaderProps {
  onAboutClick: () => void;
}
const Header: React.FC<HeaderProps> = ({ onAboutClick }) => {
  return (
<<<<<<< Updated upstream
    <header className="sticky top-0 z-50 w-full border-b shadow-md bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 text-white"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
=======
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 text-white shadow-md">
      
      {/* TOP NAVBAR */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
>>>>>>> Stashed changes
        <div className="flex h-16 items-center justify-between">

          {/* 🔹 LOGO */}
          <Link to="/" className="flex items-center gap-3">
            
            <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">SR</span>
            </div>

<<<<<<< Updated upstream
            <div className="leading-tight">
              <h1 className="font-semibold text-base sm:text-lg">
=======
            <div className="block">
              <span className="font-semibold text-sm sm:text-lg leading-tight">
>>>>>>> Stashed changes
                Sri Rama
              </h1>
              <p className="text-xs opacity-80">
                Degree College
              </p>
            </div>
          </Link>
          {/* 🔹 NAVBAR (PASS CLICK HANDLER) */}
          <Navbar onAboutClick={onAboutClick} />

        </div>
      </div>

<<<<<<< Updated upstream
=======
      {/* ✅ MARQUEE SECTION (NEW) */}
    {/* ✅ MARQUEE SECTION */}
<div className="w-full bg-white text-black border-t border-gray-200 overflow-hidden">
  <div className="whitespace-nowrap animate-marquee py-2 text-sm font-medium">
    🎓 Admissions Open 2026 &nbsp;&nbsp;|&nbsp;&nbsp; 📢 New Courses Available &nbsp;&nbsp;|&nbsp;&nbsp; 🏆 100% Placement Assistance &nbsp;&nbsp;|&nbsp;&nbsp; 📅 Apply Now for Scholarships
  </div>
</div>

>>>>>>> Stashed changes
    </header>
  );
};

export default Header;