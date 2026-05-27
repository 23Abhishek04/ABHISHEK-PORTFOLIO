
"use client"
import { useRef, useState, useEffect } from "react";

const techs = [
  {
    name: "Next.Js",
    description:
      "Building fast, scalable, and modern web applications with seamless user experiences.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="180" height="180" rx="90" fill="#000"/>
        <path d="M149.508 157.52L69.142 54H54V125.97H66.1V69.309L139.899 164.548C143.26 162.238 146.461 159.72 149.508 157.52Z" fill="url(#nextgrad1)"/>
        <rect x="115" y="54" width="12" height="72" fill="url(#nextgrad2)"/>
        <defs>
          <linearGradient id="nextgrad1" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="nextgrad2" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "MongoDB",
    description:
      "Managing flexible and efficient databases for dynamic web applications.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="30" fill="#13AA52"/>
        <path d="M171.173 98.412c-9.942-43.944-33.447-55.431-36.21-61.048-.136-.288-2.766-6.872-4.69-17.364H128.6c-.198 14.232-4.436 21.934-9.606 28.562-13.65 17.51-33.74 28.14-35.728 60.876-1.62 26.71 9.85 46.19 24.784 58.146l.54.39.298.216c.11.756.582 3.906.952 9.282.002.08-.002.16-.002.24l.002.024v.004c.01.356.01.738.01 1.128l.006.4c0 .07.004.14.004.21l-.004.256v.21c0 13.384 0 32.548.404 36.076h18.61c.32-2.978.39-18.154.404-33.136v-.226l-.002-.258v-.414c0-1.4.004-2.744.004-4.022l.006-.476c.006-.536.006-1.07.008-1.59.318-4.732.752-7.686.862-8.43l.3-.214.53-.39c9.218-7.28 17.586-17.946 22.176-32.35 5.484-17.11 4.37-33.112-.766-36.882z" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: "PHP",
    description:
      "Developing powerful backend systems and custom web functionalities.",
    icon: (
      <svg width="52" height="28" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="50" cy="25" rx="50" ry="25" fill="#8892BF"/>
        <text x="50" y="33" textAnchor="middle" fontFamily="DejaVu Sans,sans-serif" fontWeight="bold" fontSize="24" fill="white" letterSpacing="1">php</text>
      </svg>
    ),
  },
  {
    name: "My SQL",
    description:
      "Structuring reliable and optimized databases for scalable applications.",
    icon: (
      <svg width="52" height="36" viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="55" fontFamily="Arial Black,sans-serif" fontWeight="900" fontSize="28" fill="#F29111">My</text>
        <text x="58" y="55" fontFamily="Arial Black,sans-serif" fontWeight="900" fontSize="28" fill="#00758F">SQL</text>
        <path d="M134 10 Q148 28 134 45" stroke="#00758F" strokeWidth="5" fill="none" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Shopify",
    description:
      "Creating high-converting and visually engaging eCommerce experiences.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="30" fill="#96BF48"/>
        <path d="M183.968 61.5c-.164-1.235-1.235-1.894-2.12-1.976-.884-.082-19.615-1.4-19.615-1.4s-13.035-12.87-14.435-14.27c-1.4-1.4-4.118-1.4-5.188-1.07-.082 0-2.8.863-7.165 2.226-.84-2.636-2.144-5.848-3.957-9.06-5.85-10.788-14.434-16.473-24.716-16.473-.7 0-1.4.082-2.144.164-.328-.41-.656-.82-.985-1.23-4.2-4.612-9.634-6.836-16.142-6.59-12.623.41-25.164 9.552-35.364 25.862-7.165 11.36-12.623 25.614-14.188 36.648l-24.304 7.494c-7.165 2.226-7.39 2.47-8.296 9.306L19 197.5l129.682 24.305 70.073-15.178S183.968 62.735 183.968 61.5zM122.17 48.465c-3.445 1.07-7.33 2.27-11.46 3.54-.082-5.353-.74-12.87-3.28-19.28 8.214 1.565 12.25 10.87 14.74 15.74zm-19.532 6.07c-7.74 2.39-16.23 5.03-24.716 7.66 2.39-9.224 6.918-18.37 12.46-24.47 2.062-2.225 4.942-4.7 8.296-5.93 3.28 6.18 3.96 15.33 3.96 22.74zM89.35 22.93c2.718 0 4.942.656 6.836 2.062-3.2 1.647-6.26 4.2-9.06 7.33-7.41 8.05-13.1 20.51-15.41 32.52-7.08 2.2-14.02 4.34-20.43 6.33C54.6 54.25 70.38 23.26 89.35 22.93z" fill="white"/>
        <path d="M181.848 59.524c-.884-.082-19.615-1.4-19.615-1.4s-13.035-12.87-14.435-14.27c-.492-.492-1.152-.738-1.892-.82l-9.634 196.47 70.073-15.178S183.968 62.735 183.968 61.5c-.164-1.235-1.235-1.894-2.12-1.976z" fill="#5E8E3E"/>
        <path d="M127.8 91.2l-8.624 25.614s-7.576-4.036-16.88-4.036c-13.612 0-14.27 8.542-14.27 10.706 0 11.772 30.68 16.308 30.68 43.946 0 21.74-13.776 35.76-32.35 35.76-22.28 0-33.6-13.86-33.6-13.86l5.93-19.7s11.69 10.05 21.57 10.05c6.426 0 9.06-5.03 9.06-8.706 0-15.26-25.204-15.918-25.204-41.204 0-21.24 15.26-41.86 46.1-41.86 11.77 0 17.59 3.29 17.59 3.29z" fill="white"/>
      </svg>
    ),
  },
  {
    name: "Wordpress",
    description:
      "Building customizable, responsive, and easy-to-manage websites.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="30" fill="#21759B"/>
        <circle cx="128" cy="128" r="100" fill="none" stroke="white" strokeWidth="12"/>
        <path d="M36 128c0 41.4 24.1 77.4 59 94.4L46.2 102.4C40.3 110 36 118.6 36 128zm146.4-4.4c0-12.9-4.6-21.8-8.6-28.8-5.3-8.6-10.2-15.9-10.2-24.5 0-9.6 7.3-18.5 17.6-18.5.5 0 .9 0 1.4.1-18.7-17.1-43.5-27.5-70.6-27.5-36.5 0-68.6 18.7-87.3 47.1 2.5.1 4.8.1 6.8.1 11 0 28.1-1.3 28.1-1.3 5.7-.3 6.3 8 .7 8.7 0 0-5.7.7-12.1 1l38.5 114.5 23.1-69.4-16.5-45.1c-5.7-.3-11.1-1-11.1-1-5.7-.3-5-9 .7-8.7 0 0 17.4 1.3 27.8 1.3 11 0 28.1-1.3 28.1-1.3 5.7-.3 6.4 8 .7 8.7 0 0-5.7.7-12.1 1l38.2 113.7 10.5-35.2c4.6-14.6 8-25.1 8-34.2zM129.4 137l-31.7 92.1c9.5 2.8 19.5 4.3 29.9 4.3 12.3 0 24.1-2.1 35.1-6-1.4-2.2-2.7-4.6-3.7-7.2L129.4 137zm87.2-57.5c.5 3.4.7 7.1.7 11.1 0 11-2 23.4-8 38.9l-32.2 93.1c31.3-18.2 52.4-52 52.4-90.6 0-19.5-5-37.8-12.9-52.5z" fill="white"/>
      </svg>
    ),
  },
];

function useInView(ref, threshold = 0.15) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return inView;
}

function TechCard({ tech, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, 0.1);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? "#111111" : "#0d0d0d",
        border: `1px solid ${hovered ? "rgba(232,92,26,0.35)" : "rgba(255,255,255,0.07)"}`,
        padding: "2.2rem 1.8rem 2rem",
        display: "flex",
        flexDirection: "column",
        gap: "0",
        cursor: "default",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0px)" : "translateY(40px)",
        transition: `opacity 0.6s ease ${index * 0.08}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 0.08}s, background 0.3s ease, border-color 0.3s ease`,
      }}
    >
      {/* Icon */}
      <div style={{ marginBottom: "1.6rem", lineHeight: 0 }}>
        {tech.icon}
      </div>

      {/* Name */}
      <h3
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 700,
          fontSize: "clamp(1.15rem, 2vw, 1.45rem)",
          color: "#ffffff",
          letterSpacing: "-0.01em",
          lineHeight: 1.1,
          marginBottom: "0.85rem",
        }}
      >
        {tech.name}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 300,
          fontSize: "clamp(0.85rem, 1.2vw, 0.95rem)",
          color: "#a0a0a0",
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        {tech.description}
      </p>
    </div>
  );
}

export default function Tech() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, 0.2);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;600;700&display=swap');

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
        }

        @media (max-width: 900px) {
          .tech-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 540px) {
          .tech-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section
      id="tech"
        style={{
          backgroundColor: "#0a0a0a",
          fontFamily: "'Barlow', sans-serif",
          padding: "5rem 0 0",
        }}
      >
        {/* Header */}
        <div
          ref={headerRef}
          style={{
            textAlign: "center",
            padding: "0 1.5rem 3.5rem",
            maxWidth: "720px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              color: "#ffffff",
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
              marginBottom: "1.25rem",
              opacity: headerInView ? 1 : 0,
              transform: headerInView ? "translateY(0)" : "translateY(28px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            My Tech Stack
          </h2>
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 300,
              fontSize: "clamp(0.88rem, 1.4vw, 1.02rem)",
              color: "#d4d4d4",
              lineHeight: 1.75,
              margin: 0,
              opacity: headerInView ? 1 : 0,
              transform: headerInView ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
            }}
          >
            I build modern digital experiences using Next.js, PHP, MongoDB, MySQL, Shopify, and
            WordPress combining performance, scalability, and clean design. Every technology I
            use helps create fast, functional, and user-focused websites that deliver real impact.
          </p>
        </div>

        {/* Grid */}
        <div className="tech-grid md:px-28 px-4">
          {techs.map((tech, i) => (
            <TechCard key={i} tech={tech} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}