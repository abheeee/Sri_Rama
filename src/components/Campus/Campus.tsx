import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { MapPin } from "lucide-react";

import CampusBuilding from "./CampusBuilding";
import Classrooms from "./Classrooms";
import Hostel from "./Hostel";
import Labs from "./Labs";
import RecreationalArea from "./RecreationalArea";
import SeminarHalls from "./SeminarHall";
import SportsAndGames from "./SportsandGames";
import Transportation from "./Transportation";
import { useLocation } from "react-router-dom";

// ── Types ─────────────────────────────────────────────────────────────────────

type SectionKey =
  | "campusBuilding"
  | "classrooms"
  | "hostel"
  | "labs"
  | "recreational"
  | "seminar"
  | "sports"
  | "transport";

// ── Mobile styles ─────────────────────────────────────────────────────────────

const mobileStyles = `
  @media (max-width: 640px) {
    .campus-grid {
      display: flex !important;
      flex-direction: row !important;
      overflow-x: auto !important;
      scroll-snap-type: x mandatory !important;
      gap: 1rem !important;
      padding-bottom: 1rem !important;
      -webkit-overflow-scrolling: touch !important;
    }
    .campus-grid > * {
      flex: 0 0 85vw !important;
      max-width: 85vw !important;
      scroll-snap-align: start !important;
    }
    .campus-card-panel {
      height: 70px !important;
    }
    .campus-card-panel.touched {
      height: 120px !important;
    }
      .campus-card-img-wrap {
  aspect-ratio: 4/3 !important;
}
    .campus-card-desc {
      opacity: 0 !important;
    }
    .campus-card-panel.touched .campus-card-desc {
      opacity: 1 !important;
    }
  }
`;

// ── CampusCard ────────────────────────────────────────────────────────────────

interface CampusCardProps {
  image: string;
  label: string;
  description: string;
}

export const CampusCard: React.FC<CampusCardProps> = ({ image, label, description }) => {
  const [hovered, setHovered] = useState(false);
  const [touched, setTouched] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setTouched(prev => !prev)}
      style={{
        position: "relative",
        width: "100%",
        borderRadius: "24px",
        overflow: "hidden",
        cursor: "pointer",
        background: "#e8e8e8",
        boxShadow: hovered
          ? "0 12px 40px rgba(0,0,0,0.18)"
          : "0 4px 16px rgba(0,0,0,0.08)",
        transition: "box-shadow 0.3s ease",
      }}
    >
      {/* Image */}
      <div
        className="campus-card-img-wrap"
        style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}
      >
        <img
          className="campus-card-img"
          src={`${image}?auto=format&fit=crop&w=800&q=80`}
          alt={label}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.7s ease",
            transform: hovered ? "scale(1.06)" : "scale(1)",
          }}
        />
      </div>

      {/* Wave + text panel */}
      <div
        className={`campus-card-panel${touched ? " touched" : ""}`}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: hovered || touched ? "120px" : "70px",
          transition: "height 0.45s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {/* SVG wave */}
        <svg
          viewBox="0 0 400 40"
          preserveAspectRatio="none"
          style={{
            display: "block",
            width: "100%",
            height: "28px",
            marginBottom: "-1px",
          }}
        >
          <path
            d="M0,20 C60,0 120,40 180,20 C240,0 300,40 360,20 C380,12 392,8 400,10 L400,40 L0,40 Z"
            fill="#fff7f3"
          />
        </svg>

        {/* Text panel */}
        <div style={{ background: "#fff7f3", padding: "0 1rem 1rem 1rem" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <h3
              style={{
                margin: 0,
                fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
                fontWeight: 700,
                color: "#1a1a1a",
                lineHeight: 1.3,
              }}
            >
              {label}
            </h3>

            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "#ea580c",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "transform 0.3s ease",
                transform: hovered || touched ? "scale(1.12)" : "scale(1)",
              }}
            >
              <span style={{ color: "#fff", fontSize: "1rem" }}>→</span>
            </div>
          </div>

          <p
            className="campus-card-desc"
            style={{
              margin: "0.5rem 0 0",
              fontSize: "0.8rem",
              color: "#555",
              lineHeight: 1.5,
              opacity: hovered || touched ? 1 : 0,
              transition: "opacity 0.3s ease 0.15s",
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

// ── Section config ─────────────────────────────────────────────────────────────

const SECTIONS: { key: SectionKey; label: string }[] = [
  { key: "campusBuilding", label: "Campus Building" },
  { key: "classrooms",     label: "Classrooms" },
  { key: "hostel",         label: "Hostel" },
  { key: "labs",           label: "Labs" },
  { key: "recreational",   label: "Recreational" },
  { key: "seminar",        label: "Seminar Halls" },
  { key: "sports",         label: "Sports & Games" },
  { key: "transport",      label: "Transportation" },
];

// ── Campus page ───────────────────────────────────────────────────────────────

const Campus: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionKey>("campusBuilding");

  const campusBuildingRef = useRef<HTMLDivElement>(null);
  const classroomsRef     = useRef<HTMLDivElement>(null);
  const hostelRef         = useRef<HTMLDivElement>(null);
  const labsRef           = useRef<HTMLDivElement>(null);
  const recreationalRef   = useRef<HTMLDivElement>(null);
  const seminarRef        = useRef<HTMLDivElement>(null);
  const sportsRef         = useRef<HTMLDivElement>(null);
  const transportRef      = useRef<HTMLDivElement>(null);

  const refs: Record<SectionKey, React.RefObject<HTMLDivElement | null>> = {
    campusBuilding: campusBuildingRef,
    classrooms:     classroomsRef,
    hostel:         hostelRef,
    labs:           labsRef,
    recreational:   recreationalRef,
    seminar:        seminarRef,
    sports:         sportsRef,
    transport:      transportRef,
  };

  const sectionComponents: Record<SectionKey, React.ReactNode> = {
    campusBuilding: <CampusBuilding />,
    classrooms:     <Classrooms />,
    hostel:         <Hostel />,
    labs:           <Labs />,
    recreational:   <RecreationalArea />,
    seminar:        <SeminarHalls />,
    sports:         <SportsAndGames />,
    transport:      <Transportation />,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const key = entry.target.getAttribute("data-section") as SectionKey;
            if (key) setActiveSection(key);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    SECTIONS.forEach(({ key }) => {
      const el = refs[key].current;
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (key: SectionKey) => {
    const el = refs[key].current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 172;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace("#", "") as SectionKey;
    if (!hash) return;
    const tryScroll = (attempts = 0) => {
      const el = refs[hash]?.current;
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 172;
        window.scrollTo({ top, behavior: "smooth" });
      } else if (attempts < 10) {
        setTimeout(() => tryScroll(attempts + 1), 100);
      }
    };
    tryScroll();
  }, [location.hash]);

  return (
    <div className="bg-white min-h-screen">

      {/* Mobile styles */}
      <style>{mobileStyles}</style>

      {/* Hero */}
      <div
        className="relative overflow-hidden"
        style={{ height: "clamp(180px, 30vw, 300px)", background: "#111" }}
      >
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?w=1800&auto=format&fit=crop&q=80"
          alt="Campus"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.38 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)",
          }}
        />
        <div
          className="relative z-10 h-full flex flex-col justify-center"
          style={{ padding: "0 clamp(1.5rem, 5vw, 5rem)" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="text-orange-400" style={{ width: 13, height: 13 }} />
              <span
                className="text-white/60 uppercase tracking-widest font-medium"
                style={{ fontSize: "0.68rem" }}
              >
                Hanuman Nagara, Kalladka
              </span>
            </div>
            <h1
              className="text-white font-bold m-0"
              style={{
                fontSize: "clamp(1.5rem, 5vw, 2.6rem)",
                lineHeight: 1.15,
                fontFamily: "Georgia, serif",
              }}
            >
              Our Campus
            </h1>
            <p
              className="text-white/60 mt-2 max-w-md"
              style={{ fontSize: "clamp(0.78rem, 1.8vw, 0.92rem)" }}
            >
              Explore world-class facilities built to inspire, educate, and nurture holistic growth.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Sticky sub-nav */}
      <div
        className="sticky z-40 bg-white border-b border-gray-200"
        style={{ top: "116px" }}
      >
        <div
          className="max-w-7xl mx-auto flex overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {SECTIONS.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => scrollToSection(key)}
              className="transition-all duration-200"
              style={{
                flexShrink: 0,
                padding: "0.72rem 1.1rem",
                fontSize: "0.76rem",
                fontWeight: activeSection === key ? 600 : 400,
                color: activeSection === key ? "#ea580c" : "#555",
                background: "transparent",
                border: "none",
                borderBottom: activeSection === key
                  ? "2px solid #ea580c"
                  : "2px solid transparent",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {SECTIONS.map(({ key, label }, index) => (
          <React.Fragment key={key}>
            <motion.div
              ref={refs[key]}
              data-section={key}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              style={{ paddingTop: "1.5rem", paddingBottom: "0.5rem" }}
            >


              <h2
                className="font-bold text-gray-900 m-0 mb-3"
                style={{
                  fontSize: "clamp(1.2rem, 3.5vw, 1.75rem)",
                  lineHeight: 1.2,
                  fontFamily: "Georgia, serif",
                }}
              >
                {label}
              </h2>

              <div
                className="mb-6"
                style={{
                  height: 2,
                  background:
                    "linear-gradient(90deg, #ea580c 0%, #fed7aa 60%, transparent 100%)",
                  borderRadius: 1,
                }}
              />

              {sectionComponents[key]}
            </motion.div>

            {index < SECTIONS.length - 1 && (
              <Separator className="mt-6 opacity-40" />
            )}
          </React.Fragment>
        ))}
      </div>

      <div style={{ height: "4rem" }} />
    </div>
  );
};

export default Campus;