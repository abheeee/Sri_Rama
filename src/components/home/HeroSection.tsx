import React, { useState, useEffect, useRef } from "react";

const slides = [
  "https://images.unsplash.com/photo-1562774053-701939374585?w=1920",
  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920",
];

const HeroSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [showTab, setShowTab] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // 🔁 Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // 👉 Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      setCurrent((prev) => (prev + 1) % slides.length);
    }
    if (touchEndX.current - touchStartX.current > 50) {
      setCurrent((prev) =>
        prev === 0 ? slides.length - 1 : prev - 1
      );
    }
  };

  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      {slides.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100 z-10" : "opacity-0"
          }`}
        >
          {/* 🔥 Parallax + Zoom */}
          <img
            src={src}
            className={`w-full h-full object-cover transition-transform duration-[6000ms] ${
              i === current ? "scale-110" : "scale-100"
            }`}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-orange-900/60 to-orange-500/40" />
        </div>
      ))}

    <div className="relative z-20 flex flex-col justify-start pt-6 px-5 sm:px-12 sm:justify-center sm:h-full">
  <div className="max-w-4xl text-white">

    {/* 🔥 Glass Badge */}
    <div className="inline-flex items-center gap-2 backdrop-blur-xl bg-white/10 border border-white/20 px-4 py-1.5 rounded-full mb-6 shadow-lg">
      <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
      <span className="text-sm tracking-wide">
        Admissions Open 2024-25
      </span>
    </div>

    {/* 🔥 Heading (FORCED SINGLE LINE) */}
    <h1 className="whitespace-nowrap text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">

      <span className="text-white drop-shadow-lg">
        Welcome to{" "}
      </span>

      <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,140,0,0.5)]">
        Sri Rama
      </span>
    </h1>

    {/* ✨ Subtitle */}
    <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-8 max-w-2xl leading-relaxed">
      Blending heritage with education for a brighter tomorrow.
    </p>

    {/* 🔥 Buttons (Glass + Glow) */}
    <div className="flex flex-col sm:flex-row gap-4">

      <button className="px-6 py-3 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg hover:shadow-orange-500/40 hover:bg-orange-500/20 transition-all duration-300">
        Apply Now →
      </button>

      <button className="px-6 py-3 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg hover:shadow-orange-500/40 hover:bg-orange-500/20 transition-all duration-300">
        Contact Us →
      </button>

    </div>
  </div>
</div>

      {/* RIGHT SIDE (Desktop only) */}
      <div className="hidden sm:flex absolute right-5 top-1/2 -translate-y-1/2 z-30 flex-col items-end gap-3">

        {/* Buttons */}
        <button className="backdrop-blur-lg bg-white/10 border border-white/20 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-500/40 transition">
          Academic Guidance for +2 Students
        </button>

        <button className="backdrop-blur-lg bg-white/10 border border-white/20 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-500/40 transition">
          Apply Management Quota
        </button>

        {/* 🔥 Auto-hide Notifications */}
        <div
          onMouseEnter={() => setShowTab(true)}
          onMouseLeave={() => setShowTab(false)}
          className="relative mt-4"
        >
          <div
            className={`transition-all duration-500 ${
              showTab ? "translate-x-0" : "translate-x-12"
            }`}
          >
            <div className="bg-gradient-to-b from-orange-500 to-yellow-400 text-white px-3 py-6 rounded-l-xl shadow-lg">
              <span className="[writing-mode:vertical-rl] rotate-180 font-semibold">
                Notifications
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE ACTIONS */}
      <div className="sm:hidden absolute bottom-16 left-1/2 -translate-x-1/2 w-[90%] z-30">
        <div className="flex flex-col gap-3">
          <button className="backdrop-blur-lg bg-white/10 border border-white/20 text-white py-2 rounded-lg">
            Academic Guidance for +2 Students
          </button>
          <button className="backdrop-blur-lg bg-white/10 border border-white/20 text-white py-2 rounded-lg">
            Apply Management Quota
          </button>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 w-full flex justify-center gap-2 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition ${
              i === current
                ? "w-6 h-2 bg-orange-400"
                : "w-3 h-3 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;