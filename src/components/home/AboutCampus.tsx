import React, { useRef, useEffect, useState } from 'react';
import { MapPin, Users, BookOpen, Award, Building2, CheckCircle2, ChevronRight } from 'lucide-react';

const stats = [
  { value: '50+', label: 'Acres Campus', icon: Building2 },
  { value: '200+', label: 'Faculty', icon: Users },
  { value: '25+', label: 'Courses', icon: BookOpen },
  { value: '5000+', label: 'Alumni', icon: Award },
];

const features = [
  'State-of-the-art infrastructure',
  'Modern laboratories',
  'Sports facilities',
  'Cafeteria',
  'Experienced faculty members',
  'Digital library',
  'Wi-Fi Campus',
  'Hostel accommodation',
];

const AboutCampus: React.FC = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.1 } // lower threshold for small screens
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0a1a4e] overflow-hidden pt-8 pb-14 px-4 sm:px-6 md:px-12"
    >
      {/* Background decorations — scaled down on mobile */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full border-[30px] sm:border-[50px] border-[#0d2260]/60 pointer-events-none"
        style={{ width: '300px', height: '300px' }}
      />
      <div
        className="absolute -left-16 -bottom-16 rounded-full border-[20px] sm:border-[30px] border-[#0d2260]/40 pointer-events-none"
        style={{ width: '250px', height: '250px' }}
      />
      <div className="absolute top-10 right-1/3 w-1.5 h-1.5 rounded-full bg-[#00d4c8]/40 pointer-events-none" />
      <div className="absolute bottom-16 left-1/4 w-2 h-2 rounded-full bg-[#00d4c8]/20 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Top label */}
        <div
          className={`flex items-center gap-2 mb-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="h-px w-8 bg-[#00d4c8]" />
          <span className="text-[#00d4c8] text-[10px] sm:text-xs font-bold tracking-[3px] sm:tracking-[4px] uppercase">
            About the Campus
          </span>
          <div className="h-px w-8 bg-[#00d4c8]" />
        </div>

        {/* Stack vertically on mobile, side-by-side on lg+ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Image block */}
          <div
            className={`relative transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <div className="relative group rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=560&fit=crop"
                alt="Campus main"
                className="w-full h-56 sm:h-72 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a4e]/80 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 px-4 py-4 sm:px-6 sm:py-5">
                <p className="text-[#00d4c8] font-bold text-xs uppercase tracking-widest">
                  Sri Rama Degree College
                </p>
                <p className="text-white/70 text-[11px] mt-0.5">
                  Sullya, Karnataka — 50+ Acres Campus
                </p>
              </div>

              <div className="absolute top-3 left-3 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-[#00d4c8] rounded-tl-lg pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-[#00d4c8] rounded-br-lg pointer-events-none" />
            </div>

            {/* Floating stat card — repositioned for mobile */}
            <div className="absolute -top-4 right-2 sm:-top-5 sm:-right-4 bg-[#00d4c8] text-[#0a1a4e] rounded-xl sm:rounded-2xl px-4 py-3 sm:px-5 sm:py-4 shadow-xl z-10">
              <p className="font-extrabold text-2xl sm:text-3xl leading-none">25+</p>
              <p className="text-[10px] sm:text-xs font-bold mt-0.5 uppercase tracking-wide">
                Years of Excellence
              </p>
            </div>
          </div>

          {/* Content block */}
          <div
            className={`transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <h2 className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 sm:mb-6">
              Where{' '}
              <span className="text-[#00d4c8]">Excellence</span>
              <br />Meets Opportunity
            </h2>

            <p className="text-white/70 text-sm leading-relaxed mb-6 sm:mb-8">
              Sri Rama Degree College is committed to providing quality education with a focus on
              holistic development. Our campus spans over 50 acres with modern facilities and a
              conducive learning environment that nurtures talent and encourages innovation.
            </p>

            {/* Stats grid — 2 cols on all small screens */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-6 sm:mb-8">
              {stats.map(({ value, label, icon: Icon }, i) => (
                <div
                  key={label}
                  className={`bg-white/5 hover:bg-white/10 active:bg-white/10 border border-white/10 hover:border-[#00d4c8]/40 rounded-xl p-2.5 sm:p-3 text-center transition-all duration-300 cursor-default
                    ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${400 + i * 80}ms` }}
                >
                  <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#00d4c8] mx-auto mb-1" />
                  <p className="text-[#00d4c8] font-extrabold text-lg sm:text-xl leading-none">{value}</p>
                  <p className="text-white/50 text-[9px] sm:text-[10px] mt-1">{label}</p>
                </div>
              ))}
            </div>

            {/* Features — 2 cols on mobile */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-3 gap-y-2 mb-7 sm:mb-8">
              {features.map((f, i) => (
                <div
                  key={f}
                  className={`flex items-start gap-2 transition-all duration-500 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                  style={{ transitionDelay: `${600 + i * 60}ms` }}
                >
                  <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#00d4c8] flex-shrink-0 mt-0.5" />
                  <span className="text-white/70 text-[11px] sm:text-sm leading-snug">{f}</span>
                </div>
              ))}
            </div>

            {/* CTA buttons — full-width on xs, inline from sm */}
            <div className="flex flex-col xs:flex-row sm:flex-row items-stretch sm:items-center gap-3">
              <button className="flex items-center justify-center gap-2 bg-[#00d4c8] hover:bg-[#00bfb3] active:bg-[#00aaa0] text-[#0a1a4e] font-bold text-sm px-6 py-3.5 sm:py-3 rounded-full transition-colors duration-300 min-h-[48px] sm:min-h-0 touch-manipulation">
                Read More
                <ChevronRight className="h-4 w-4" />
              </button>

              <button className="flex items-center justify-center gap-2 text-white/70 hover:text-[#00d4c8] active:text-[#00d4c8] text-sm font-medium transition-colors duration-300 min-h-[48px] sm:min-h-0 touch-manipulation">
                <MapPin className="h-4 w-4" />
                Our Location
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCampus;