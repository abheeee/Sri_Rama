import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

interface HeaderProps {
  onAboutClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAboutClick }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b shadow-md bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 text-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">

          {/* 🔹 LOGO */}
          <Link to="/" className="flex items-center gap-3">
            
            <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">SR</span>
            </div>

            <div className="leading-tight">
              <h1 className="font-semibold text-base sm:text-lg">
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

    </header>
  );
};

export default Header;