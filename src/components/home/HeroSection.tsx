import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Users, Award, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  'https://images.unsplash.com/photo-1562774053-701939374585?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&h=1080&fit=crop',
];

const HeroSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative min-h-[60vh] md:min-h-[65vh] flex items-center overflow-hidden">

      {/* Background slides */}
      {slides.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 z-0 transition-opacity duration-700 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
          <img
            src={src}
            alt={`Slide ${i + 1}`}
            /* Removed scale-110 Ken Burns — causes horizontal overflow on mobile */
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="max-w-3xl mx-auto md:mx-0 text-center md:text-left">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 mb-5">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white text-xs sm:text-sm font-medium">Admissions Open 2024-25</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Sri Rama
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-xl text-gray-200 mb-6 md:mb-8 max-w-2xl mx-auto md:mx-0">
            Blending heritage with education for a brighter tomorrow.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start mb-10">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 w-full sm:w-auto min-h-[48px] touch-manipulation"
            >
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 w-full min-h-[48px] touch-manipulation"
              >
                Contact Us
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Slide dots */}
          <div className="flex justify-center md:justify-start gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 touch-manipulation ${
                  i === current ? 'bg-white w-6 h-2' : 'bg-white/40 w-2 h-2'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;