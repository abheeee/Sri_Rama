import React from 'react';
import HeroSection from '../components/home/HeroSection';
import RankHolders from '../components/home/RankHolders';
import AboutCampus from '../components/home/AboutCampus';
import Spotlight from '../components/home/Spotlight';
import Testimonials from '../components/home/Testimonials';
import PlacementSection from '../components/home/PlacementSection';




const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <RankHolders />
      <AboutCampus />
      <Spotlight />
      <Testimonials />
      <PlacementSection />
      
    </div>
  );
};

export default Home;