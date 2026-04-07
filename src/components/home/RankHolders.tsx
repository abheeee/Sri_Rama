import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Trophy, Medal, Award, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const rankHolders = [
  {
    name: 'Ms. Ashwini',
    rank: '2nd Rank',
    course: 'MBA',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    badge: { icon: Medal, color: 'bg-gray-400', label: 'Silver' },
  },
  {
    name: 'Ms. Prathima S',
    rank: '10th Rank',
    course: 'MBA',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    badge: { icon: Star, color: 'bg-blue-500', label: 'Star' },
  },
  {
    name: 'Ms. Meghala',
    rank: '6th Rank',
    course: 'MCA',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    badge: { icon: Star, color: 'bg-blue-500', label: 'Star' },
  },
  {
    name: 'Mr. Sohan Shetty',
    rank: '9th Rank',
    course: 'M.Tech Construction',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    badge: { icon: Star, color: 'bg-blue-500', label: 'Star' },
  },
  {
    name: 'Ms. Sandhya T.J',
    rank: '3rd Rank',
    course: 'MBA',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
    badge: { icon: Award, color: 'bg-amber-500', label: 'Bronze' },
  },
  {
    name: 'Ms. Anusha',
    rank: '3rd Rank',
    course: 'MCA',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
    badge: { icon: Award, color: 'bg-amber-500', label: 'Bronze' },
  },
  {
    name: 'Mr. Rahul Kumar',
    rank: '1st Rank',
    course: 'B.E Civil',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    badge: { icon: Trophy, color: 'bg-yellow-500', label: 'Gold' },
  },
  {
    name: 'Ms. Divya R',
    rank: '4th Rank',
    course: 'MCA',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
    badge: { icon: Star, color: 'bg-blue-500', label: 'Star' },
  },
  {
    name: 'Mr. Kiran B',
    rank: '5th Rank',
    course: 'M.Tech CS',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    badge: { icon: Star, color: 'bg-blue-500', label: 'Star' },
  },
  {
    name: 'Ms. Rekha N',
    rank: '1st Rank',
    course: 'MCA',
    image: 'https://randomuser.me/api/portraits/women/7.jpg',
    badge: { icon: Trophy, color: 'bg-yellow-500', label: 'Gold' },
  },
];

const VISIBLE_DESKTOP = 5;
const VISIBLE_MOBILE = 2;

const RankHoldersPage: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const getVisible = () => {
    const isMobile = window.innerWidth < 640;
    return isMobile ? VISIBLE_MOBILE : VISIBLE_DESKTOP;
  };

  const [visibleCount, setVisibleCount] = useState(VISIBLE_DESKTOP);

  React.useEffect(() => {
    const update = () =>
      setVisibleCount(window.innerWidth < 640 ? VISIBLE_MOBILE : window.innerWidth < 1024 ? 3 : VISIBLE_DESKTOP);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const prev = () =>
    setStartIndex((i) => (i - 1 + rankHolders.length) % rankHolders.length);
  const next = () =>
    setStartIndex((i) => (i + 1) % rankHolders.length);

  const visible = Array.from({ length: visibleCount }, (_, i) =>
    rankHolders[(startIndex + i) % rankHolders.length]
  );

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
<div className="bg-gradient-to-b from-[#0d1b4b] via-[#1a3070] to-[#0d1b4b]">
      {/* Hero banner */}
<div className="relative overflow-hidden pt-8 pb-4 px-4 text-center">
        <div className="absolute inset-0 opacity-10">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-white/30"
              style={{
                width: `${120 + i * 80}px`,
                height: `${120 + i * 80}px`,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight">
             Rank Holders
          </h1>
          <p className="text-blue-200 text-sm sm:text-base max-w-xl mx-auto">
            Celebrating the outstanding students who have brought pride to Sri Rama Institution
          </p>

         
        </div>
      </div>

      {/* Divider wave */}
      <div className="relative h-8 overflow-hidden">
        <svg viewBox="0 0 1440 32" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0,32 C360,0 1080,0 1440,32 L1440,32 L0,32 Z" fill="#f5ede0" />
        </svg>
      </div>

      {/* Cards section */}
      <div className="bg-[#f5ede0] py-10 px-4">

        <div
          className="relative max-w-6xl mx-auto"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Nav buttons */}
          <button
            onClick={prev}
            className="absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0d1b4b] hover:bg-[#1a3070] text-white flex items-center justify-center shadow-lg transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            className="grid gap-4 px-6 sm:px-8 transition-all duration-300"
            style={{ gridTemplateColumns: `repeat(${visibleCount}, minmax(0, 1fr))` }}
          >
            {visible.map((person, i) => {
              const BadgeIcon = person.badge.icon;
              return (
                <div
                  key={i}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  

                  {/* Photo */}
                  <div className="relative pt-3 px-3">
<div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                     
                    </div>
                  </div>

                  {/* Info */}
                  <div className="px-4 py-4 flex flex-col items-center text-center flex-1">
                    <p className="font-bold text-[#0d1b4b] text-xs sm:text-sm leading-tight">
                      {person.name}
                    </p>
                    <span className="mt-1.5 inline-block bg-[#0d1b4b] text-white text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      {person.rank}
                    </span>
                    <p className="mt-1.5 text-gray-500 text-[10px] sm:text-xs leading-tight">
                      {person.course}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={next}
            className="absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0d1b4b] hover:bg-[#1a3070] text-white flex items-center justify-center shadow-lg transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {rankHolders.map((_, i) => (
            <button
              key={i}
              onClick={() => setStartIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                i === startIndex
                  ? 'bg-[#0d1b4b] w-5 h-2'
                  : 'bg-[#0d1b4b]/25 hover:bg-[#0d1b4b]/50 w-2 h-2'
              }`}
              aria-label={`Go to ${i + 1}`}
            />
          ))}
        </div>

        {/* Swipe hint — mobile only */}
        <p className="text-center text-gray-400 text-xs mt-3 sm:hidden">
          Swipe left or right to browse
        </p>

        {/* Read More */}
        <div className="flex justify-center mt-8">
          <Button className="bg-[#0d1b4b] hover:bg-[#1a3070] text-white font-bold tracking-widest uppercase px-10 py-3 rounded-full text-sm shadow-lg">
            View All Rank Holders
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RankHoldersPage;