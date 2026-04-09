import React, { useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const rankHolders = [
  {
    name: "Ms. Ashwini",
    rank: "2nd Rank",
    course: "MBA",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Ms. Prathima S",
    rank: "10th Rank",
    course: "MBA",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Ms. Meghala",
    rank: "6th Rank",
    course: "MCA",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "Mr. Sohan Shetty",
    rank: "9th Rank",
    course: "M.Tech",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
];

export default function RankHoldersSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.clientWidth;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative py-16 px-4 sm:px-10 bg-[#0f0a08] overflow-hidden">

      {/* 🔥 Glow Background */}
      <div className="absolute w-[400px] h-[400px] bg-orange-500/20 blur-[120px] top-[-100px] left-[-100px] rounded-full" />
      <div className="absolute w-[300px] h-[300px] bg-yellow-400/20 blur-[120px] bottom-[-80px] right-[10%] rounded-full" />

      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto mb-14 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent">
          Rank Holders
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">
          Celebrating our top achievers and academic excellence.
        </p>
      </div>

      {/* SLIDER */}
      <div className="relative max-w-7xl mx-auto">

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar px-2"
        >
          {rankHolders.map((student, index) => (
            <div
              key={index}
              className="snap-center min-w-[240px] sm:min-w-[300px] flex-shrink-0"
            >
              <div className="group relative">

                {/* IMAGE */}
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src={student.image}
                    className="w-full h-64 object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* GLASS CARD */}
                <div className="absolute bottom-4 left-4 right-4 backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl p-4 shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:translate-y-[-6px]">

                  <h3 className="text-white font-semibold text-lg">
                    {student.name}
                  </h3>

                  <p className="text-orange-400 font-semibold text-sm">
                    {student.rank}
                  </p>

                  <p className="text-gray-300 text-sm mb-3">
                    {student.course}
                  </p>

                  <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white shadow-lg hover:scale-110 transition">
                    <ArrowRight size={16} />
                  </button>
                </div>

                {/* GLOW BORDER */}
                <div className="absolute inset-0 rounded-3xl border border-orange-400/20 group-hover:border-orange-400/50 transition" />

              </div>
            </div>
          ))}
        </div>

        {/* ARROWS */}
        <button
          onClick={() => scroll("left")}
          className="hidden sm:flex absolute left-[-10px] top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-md border border-orange-400/30 p-3 rounded-full text-orange-400 hover:bg-orange-500 hover:text-white transition"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={() => scroll("right")}
          className="hidden sm:flex absolute right-[-10px] top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-md border border-orange-400/30 p-3 rounded-full text-orange-400 hover:bg-orange-500 hover:text-white transition"
        >
          <ChevronRight size={18} />
        </button>

      </div>
    </section>
  );
}