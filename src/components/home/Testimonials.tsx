import React, { useState, useRef, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Philomina Ida Lobo",
    role: "Academic Advisor",
    content:
      "With 32 years of heartfelt service, my goal is to nurture every child to be confident, ethical, and inspired to grow. I strive to make our classrooms a true family where excellence and well-being walk hand in hand.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Mahesh J Shetty",
    role: "Secretary",
    content:
      "As the Secretary of the Management Team, it is my privilege to support and contribute to the growth and excellence of our esteemed school. Our management team works diligently to ensure the seamless integration of academic rigor, extracurricular opportunities, and character-building initiatives.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Prahallada J Shetty",
    role: "President",
    content:
      "As President, I am deeply committed to guiding our school towards its vision in education. Our school stands as a beacon of knowledge, character, and innovation, shaping the leaders of tomorrow. It is a privilege to be part of this journey.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "Software Engineer at Google",
    content:
      "The faculty and infrastructure at this institution are outstanding. The placement support helped me achieve my dream job. I owe much of my success to the values and skills instilled here.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Rahul Sharma",
    role: "Business Analyst at Amazon",
    content:
      "Excellent learning environment with great opportunities. The college prepared me well for the corporate world with both technical knowledge and soft skills.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];

/* ─── constants ─────────────────────────────────────────────── */
const CARD_W = 340;
const GAP    = 20;
const STEP   = CARD_W + GAP;

/* ─── colors matched to screenshot ──────────────────────────── */
const BG        = "#0b1f3a";   // dark navy from screenshot
const ACCENT    = "#00c8c8";   // teal/cyan accent visible in screenshot
const CARD_BG   = "#112848";   // slightly lighter navy for cards
const CARD_BOR  = "#1a3a5c";   // card border
const ACT_BOR   = ACCENT;      // active card border = accent teal

/* ─── keyframes + utility classes ───────────────────────────── */
const css = `
  @keyframes tcFadeUp {
    from { opacity:0; transform:translateY(22px); }
    to   { opacity:1; transform:translateY(0);    }
  }
  @keyframes tcShimmer {
    0%   { background-position:-800px 0; }
    100% { background-position: 800px 0; }
  }
  @keyframes tcPulse {
    0%,100% { box-shadow:0 0 0 0    rgba(0,200,200,.4); }
    60%      { box-shadow:0 0 0 12px rgba(0,200,200,0);  }
  }

  .tc-section {
    background:${BG};
    padding:64px 0 60px;
    font-family:sans-serif;
    overflow:hidden;
    user-select:none;
  }

  /* heading */
  .tc-heading { text-align:center; margin-bottom:48px; animation:tcFadeUp .6s ease both; }
  .tc-heading h2 { font-size:36px; font-weight:700; color:#ffffff; margin:0; }
  .tc-bar { width:52px; height:3px; background:${ACCENT}; border-radius:2px; margin:12px auto 0; }

  /* track wrapper */
  .tc-outer {
    position:relative;
    overflow:hidden;
    perspective:1400px;
  }

  /* each positioned slide */
  .tc-slide {
    position:absolute;
    top:0; left:0;
    width:${CARD_W}px;
    transition:transform .55s cubic-bezier(.4,0,.2,1),
               opacity   .55s ease;
    will-change:transform,opacity;
  }

  /* card shell */
  .tc-card {
    background:${CARD_BG};
    border-radius:16px;
    border:1.5px solid ${CARD_BOR};
    padding:28px 24px;
    text-align:center;
    transform-style:preserve-3d;
    transition:border .35s, padding .35s, box-shadow .35s;
    position:relative;
    overflow:hidden;
    cursor:default;
  }
  .tc-card.active {
    border:2px solid ${ACT_BOR};
    padding:36px 32px;
    box-shadow:0 8px 40px rgba(0,200,200,.15);
    animation:tcFadeUp .45s ease both;
  }
  .tc-card.active::after {
    content:'';
    position:absolute; inset:0;
    background:linear-gradient(110deg,transparent 30%,rgba(0,200,200,.06) 50%,transparent 70%);
    background-size:800px 100%;
    animation:tcShimmer 3s ease-in-out infinite;
    pointer-events:none;
    border-radius:16px;
  }

  /* avatar */
  .tc-avatar {
    border-radius:50%;
    overflow:hidden;
    margin:0 auto 16px;
    transition:width .4s,height .4s,border-color .4s;
  }
  .tc-avatar.lg { width:90px;height:90px; border:3px solid ${ACCENT}; animation:tcPulse 2.5s ease-in-out infinite; }
  .tc-avatar.sm { width:70px;height:70px; border:3px solid ${CARD_BOR}; }
  .tc-avatar img { width:100%;height:100%;object-fit:cover;display:block; }

  /* text */
  .tc-name { font-weight:700; color:${ACCENT}; text-transform:uppercase; letter-spacing:.04em; margin:0 0 4px; }
  .tc-role { color:#8ab0cc; margin:0 0 14px; }
  .tc-stars { display:flex;justify-content:center;gap:3px;margin-bottom:14px; }
  .tc-body  { font-size:14px; color:#c8dce8; line-height:1.8; margin:0; text-align:justify;
              animation:tcFadeUp .4s ease .1s both; }

  /* fade masks — match the section bg */
  .tc-mask-l,.tc-mask-r {
    position:absolute;top:0;bottom:0;width:80px;pointer-events:none;z-index:20;
  }
  .tc-mask-l { left:0;  background:linear-gradient(to right,${BG},transparent); }
  .tc-mask-r { right:0; background:linear-gradient(to left, ${BG},transparent); }

  /* nav row */
  .tc-nav { display:flex;align-items:center;justify-content:center;gap:20px;margin-top:36px; }

  .tc-btn {
    width:40px;height:40px;border-radius:50%;
    background:transparent;border:1.5px solid #2a5070;
    display:flex;align-items:center;justify-content:center;
    cursor:pointer;
    transition:background .2s,border-color .2s,color .2s,transform .15s;
    color:#8ab0cc;
  }
  .tc-btn:hover  { background:${ACCENT}; border-color:${ACCENT}; color:${BG}; transform:scale(1.1); }
  .tc-btn:active { transform:scale(.93); }
  .tc-btn:disabled { opacity:.35; cursor:default; transform:none; }

  .tc-dot {
    height:8px;border-radius:4px;border:none;cursor:pointer;padding:0;
    transition:width .3s,background .3s,transform .2s;
  }
  .tc-dot:hover { transform:scaleY(1.5); }
  .tc-dot.on  { width:28px; background:${ACCENT}; }
  .tc-dot.off { width:8px;  background:#2a5070; }

  .tc-outer.dragging     { cursor:grabbing; }
  .tc-outer:not(.dragging) { cursor:grab; }
`;

/* ─── helpers ────────────────────────────────────────────────── */
function signedDist(i: number, current: number, total: number) {
  const raw = ((i - current + total) % total + total) % total;
  return raw > total / 2 ? raw - total : raw;
}

/* ─── component ──────────────────────────────────────────────── */
const TestimonialsPage: React.FC = () => {
  const total = testimonials.length;
  const [current, setCurrent]   = useState(0);
  const [locked, setLocked]     = useState(false);
  const [dragging, setDragging] = useState(false);
  const outerRef                = useRef<HTMLDivElement>(null);
  const [outerW, setOuterW]     = useState(0);
  const dragStartX              = useRef(0);
  const dragDeltaX              = useRef(0);
  const autoRef                 = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setOuterW(el.clientWidth));
    ro.observe(el);
    setOuterW(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    autoRef.current = setInterval(() => { if (!dragging) go(1); }, 4000);
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dragging, current]);

  const go = (dir: number) => {
    if (locked) return;
    setLocked(true);
    setCurrent(c => (c + dir + total) % total);
    setTimeout(() => setLocked(false), 560);
  };

  const jumpTo = (i: number) => {
    if (locked || i === current) return;
    setLocked(true);
    setCurrent(i);
    setTimeout(() => setLocked(false), 560);
  };

  const onDragStart = (clientX: number) => {
    dragStartX.current = clientX;
    dragDeltaX.current = 0;
    setDragging(true);
    if (autoRef.current) clearInterval(autoRef.current);
  };
  const onDragMove = (clientX: number) => {
    if (!dragging) return;
    dragDeltaX.current = clientX - dragStartX.current;
  };
  const onDragEnd = () => {
    if (!dragging) return;
    setDragging(false);
    if (dragDeltaX.current < -50) go(1);
    else if (dragDeltaX.current > 50) go(-1);
  };

  const onTiltMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width  / 2)) / (rect.width  / 2);
    const dy = (e.clientY - (rect.top  + rect.height / 2)) / (rect.height / 2);
    e.currentTarget.style.transform = `rotateY(${dx * 6}deg) rotateX(${-dy * 4}deg) translateZ(8px)`;
  };
  const onTiltLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "rotateY(0deg) rotateX(0deg) translateZ(0px)";
  };

  const spacer = (
    <div style={{ visibility:"hidden", pointerEvents:"none", margin:"0 auto", width: CARD_W }}>
      <div className="tc-card active">
        <div className="tc-avatar lg" />
        <h3 className="tc-name" style={{ fontSize:17 }}>&nbsp;</h3>
        <p  className="tc-role" style={{ fontSize:13 }}>&nbsp;</p>
        <div className="tc-stars" style={{ height:14 }} />
        <p  className="tc-body"  style={{ minHeight:140 }}>&nbsp;</p>
      </div>
    </div>
  );

  return (
    <>
      <style>{css}</style>
      <section className="tc-section">

        <div className="tc-heading">
          <h2>What Our Family Says</h2>
          <div className="tc-bar" />
        </div>

        <div
          ref={outerRef}
          className={`tc-outer${dragging ? " dragging" : ""}`}
          onMouseDown={e  => onDragStart(e.clientX)}
          onMouseMove={e  => onDragMove(e.clientX)}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          onTouchStart={e => onDragStart(e.touches[0].clientX)}
          onTouchMove={e  => onDragMove(e.touches[0].clientX)}
          onTouchEnd={onDragEnd}
        >
          {spacer}
          <div className="tc-mask-l" />
          <div className="tc-mask-r" />

          {testimonials.map((t, i) => {
            const dist    = signedDist(i, current, total);
            const absDist = Math.abs(dist);
            const active  = i === current;
            const tx      = outerW / 2 - CARD_W / 2 - dist * STEP;
            const scale   = active ? 1 : Math.max(0.82, 1 - absDist * 0.06);
            const opacity = active ? 1 : Math.max(0.35, 1 - absDist * 0.28);

            return (
              <div
                key={i}
                className="tc-slide"
                style={{
                  transform      : `translateX(${tx}px) scale(${scale})`,
                  transformOrigin: "center top",
                  opacity,
                  zIndex         : total - absDist,
                  pointerEvents  : active ? "auto" : "none",
                }}
              >
                <div
                  className={`tc-card${active ? " active" : ""}`}
                  onMouseMove ={active ? onTiltMove  : undefined}
                  onMouseLeave={active ? onTiltLeave : undefined}
                >
                  <div className={`tc-avatar ${active ? "lg" : "sm"}`}>
                    <img src={t.image} alt={t.name} />
                  </div>
                  <h3 className="tc-name" style={{ fontSize: active ? 17 : 14 }}>{t.name}</h3>
                  <p  className="tc-role" style={{ fontSize: active ? 13 : 12 }}>{t.role}</p>
                  <div className="tc-stars">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={active ? 14 : 11}
                        style={{ fill:"#facc15", color:"#facc15" }} />
                    ))}
                  </div>
                  {active && <p className="tc-body">{t.content}</p>}
                </div>
              </div>
            );
          })}
        </div>

        <div className="tc-nav">
          <button className="tc-btn" onClick={() => go(-1)} disabled={locked}>
            <ChevronLeft size={18} />
          </button>
          <div style={{ display:"flex", gap:8, alignItems:"center" }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`tc-dot ${i === current ? "on" : "off"}`}
                onClick={() => jumpTo(i)}
              />
            ))}
          </div>
          <button className="tc-btn" onClick={() => go(1)} disabled={locked}>
            <ChevronRight size={18} />
          </button>
        </div>

      </section>
    </>
  );
};

export default TestimonialsPage;