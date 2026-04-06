import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 text-white shadow-md">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 " >
        <div className="flex h-16 items-center justify-between ">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-lg">SRi</span>
            </div>

            {/* Show small text even on mobile */}
            <div className="block">
              <span className="font-semibold text-sm sm:text-lg leading-tight">
                Sri Rama
              </span>
              <p className="text-[10px] sm:text-xs text-muted-foreground leading-tight">
                Degree College
              </p>
            </div>
          </Link>

          {/* Navbar */}
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;