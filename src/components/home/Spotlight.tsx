import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const items = [
  {
    title: "Sports",
    tag: "Athletics",
    description:
      "Extensive sports facilities cater to a variety of athletic interests, promoting a well-rounded and healthy lifestyle for every student.",
    image:
      "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=800",
    link: "#",
    accent: "#0f766e",
  },
  {
    title: "Infrastructure",
    tag: "Campus",
    description:
      "Modern infrastructure equipped with the latest technology, fostering an environment conducive to world-class academic achievement.",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800",
    link: "#",
    accent: "#1e40af",
  },
  {
    title: "Cafeteria",
    tag: "Dining",
    description:
      "A vibrant dining space offering nutritious, freshly prepared meals from diverse cuisines — fueling minds and bodies every day.",
    image:
      "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800",
    link: "#",
    accent: "#b45309",
  },
  {
    title: "Lab & Research",
    tag: "Innovation",
    description:
      "State-of-the-art laboratories empowering students to experiment, innovate, and push the boundaries of science and technology.",
    image:
      "https://images.unsplash.com/photo-1532094349884-543559c08671?w=800",
    link: "#",
    accent: "#6d28d9",
  },
];

const CARDS_PER_PAGE = 2;

const Spotlight: React.FC = () => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(items.length / CARDS_PER_PAGE);

  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const next = () => setPage((p) => (p + 1) % totalPages);

  const visible = items.slice(
    page * CARDS_PER_PAGE,
    page * CARDS_PER_PAGE + CARDS_PER_PAGE
  );

  return (
    <section
      style={{
        background: "linear-gradient(160deg, #f5f0e8 0%, #e8ddd0 100%)",
        padding: "40px 0",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: "#1a1a1a",
              letterSpacing: "0.06em",
              margin: 0,
              textTransform: "uppercase",
            }}
          >
            Spotlight
          </h2>
          <div
            style={{
              width: 48,
              height: 3,
              background: "#0f766e",
              borderRadius: 2,
              margin: "14px auto 0",
            }}
          />
        </div>

        {/* Cards + Nav */}
        <div style={{ position: "relative" }}>

          {/* Left Arrow */}
          <button
            onClick={prev}
            style={{
              position: "absolute",
              left: -20,
              top: "40%",
              transform: "translateY(-50%)",
              zIndex: 10,
              background: "#0f766e",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              width: 38,
              height: 38,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.background = "#0d5e56")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.background = "#0f766e")
            }
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={next}
            style={{
              position: "absolute",
              right: -20,
              top: "40%",
              transform: "translateY(-50%)",
              zIndex: 10,
              background: "#0f766e",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              width: 38,
              height: 38,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.background = "#0d5e56")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.background = "#0f766e")
            }
          >
            <ChevronRight size={20} />
          </button>

          {/* Card Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 28,
            }}
          >
            {visible.map((item, i) => (
              <div
                key={item.title + i}
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(-6px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 12px 32px rgba(0,0,0,0.14)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 4px 20px rgba(0,0,0,0.08)";
                }}
              >
                {/* Image */}
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    height: 240,
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.5s ease",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLImageElement).style.transform =
                        "scale(1.07)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLImageElement).style.transform =
                        "scale(1)")
                    }
                  />

                  {/* Tag Badge */}
                  <span
                    style={{
                      position: "absolute",
                      top: 14,
                      left: 14,
                      background: item.accent,
                      color: "#fff",
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      padding: "4px 12px",
                      borderRadius: 20,
                      textTransform: "uppercase",
                    }}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Accent Bar */}
                <div
                  style={{ height: 4, background: item.accent, width: "100%" }}
                />

                {/* Content */}
                <div style={{ padding: "24px 28px 28px" }}>
                  <h3
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: "#111",
                      margin: "0 0 10px",
                    }}
                  >
                    {item.title}
                  </h3>
<a
                    href={item.link}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      background: item.accent,
                      color: "#fff",
                      fontSize: 13,
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      padding: "10px 22px",
                      borderRadius: 50,
                      textDecoration: "none",
                      textTransform: "uppercase",
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.85")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")
                    }
                  >
                    Read More <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            marginTop: 36,
          }}
        >
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              style={{
                width: i === page ? 28 : 10,
                height: 10,
                borderRadius: 5,
                background: i === page ? "#0f766e" : "#b0a898",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "width 0.3s, background 0.3s",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Spotlight;