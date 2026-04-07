import React from 'react';
import HeroSection from '../components/home/HeroSection';
import RankHolders from '../components/home/RankHolders';
import Spotlight from '../components/home/Spotlight';
import Testimonials from '../components/home/Testimonials';
import PlacementSection from '../components/home/PlacementSection';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">

      {/* HERO */}
      <div className="relative">
        <HeroSection />
      </div>

      <RankHolders />
      <Spotlight />
      <Testimonials />
      <PlacementSection />

    </div>
  );
};

export default Home;