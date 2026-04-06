import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Users, Award, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const HeroSection: React.FC = () => {
  const stats = [
    { icon: Users, value: '5000+', label: 'Students', color: 'bg-blue-500' },
    { icon: Award, value: '100+', label: 'Awards', color: 'bg-green-500' },
    { icon: Calendar, value: '25+', label: 'Years', color: 'bg-orange-500' },
  ];

  return (
    <section className="relative min-h-[80vh] md:min-h-[85vh] flex items-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?w=1920&h=1080&fit=crop"
          alt="Campus"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="max-w-3xl mx-auto md:mx-0 text-center md:text-left">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 mb-5">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-white text-xs sm:text-sm font-medium">
              Admissions Open 2024-25
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Sri Rama
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-xl text-gray-200 mb-6 md:mb-8 max-w-2xl mx-auto md:mx-0">
            Empowering minds, shaping futures. Join us for quality education and holistic development.
            Experience excellence with state-of-the-art facilities.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start mb-10">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 w-full sm:w-auto">
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Link to="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 w-full"
              >
                Contact Us
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

         

        </div>
      </div>

      
    </section>
  );
};

export default HeroSection;