"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Modern, fast, and visually engaging user interfaces built for seamless user experiences.",
    features: [
      "Responsive website development",
      "Next.js & Tailwind CSS expertise",
      "Smooth animations & interactions",
    ],
  },
  {
    number: "02",
    title: "Full Stack Web Development",
    description:
      "Scalable web applications with powerful frontend experiences and reliable backend systems.",
    features: [
      "PHP & Next.js development",
      "MongoDB & MySQL integration",
      "Authentication & admin dashboards",
      "API & database management",
    ],
  },
  {
    number: "03",
    title: "E Commerce & CMS Solutions",
    description:
      "Custom online stores and content driven websites designed for growth and conversions.",
    features: [
      "Shopify store development",
      "WordPress website customization",
      "Product & content management",
      "Conversion focused design structure",
    ],
  },
];

function useInView(ref, threshold = 0.15) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold]);
  return inView;
}

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, 0.1);

  return (
    <div
      ref={ref}
      style={{
        border: "1px solid #c0390a",
        backgroundColor: "#0a0a0a",
        padding: "2.4rem 2rem",
        marginBottom: "0",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0px)" : "translateY(48px)",
        transition: `opacity 0.65s ease ${index * 0.12}s, transform 0.65s ease ${index * 0.12}s`,
      }}
    >
      {/* Number */}
      <div
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 700,
          fontSize: "1rem",
          color: "#e85c1a",
          letterSpacing: "0.08em",
          marginBottom: "1.1rem",
        }}
      >
        {service.number}&nbsp;/
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 700,
          fontSize: "clamp(1.35rem, 2.4vw, 1.75rem)",
          color: "#ffffff",
          letterSpacing: "-0.01em",
          lineHeight: 1.1,
          marginBottom: "1rem",
        }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 300,
          fontSize: "clamp(0.88rem, 1.3vw, 1rem)",
          color: "#d4d4d4",
          lineHeight: 1.7,
          marginBottom: "1.4rem",
        }}
      >
        {service.description}
      </p>

      {/* Divider */}
      <div
        style={{
          height: "1px",
          backgroundColor: "rgba(255,255,255,0.08)",
          marginBottom: "1.2rem",
        }}
      />

      {/* Feature list */}
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {service.features.map((feat, i) => (
          <li
            key={i}
            style={{
              fontFamily: "'Courier New', 'Courier', monospace",
              fontSize: "clamp(0.72rem, 1.1vw, 0.82rem)",
              color: "#999999",
              lineHeight: 1.9,
              display: "flex",
              alignItems: "baseline",
              gap: "0.6rem",
            }}
          >
            <span style={{ color: "#777", flexShrink: 0 }}>-</span>
            {feat}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Services() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, 0.2);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&display=swap');

        /* Sticky layout for desktop */
        @media (min-width: 768px) {
          .services-layout {
          
            display: grid;
            grid-template-columns: 46% 54%;
            align-items: start;
            min-height: 100vh;
           
          }
          .services-left {
            position: sticky;
            top: 0;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 5vw 4vw 5vw 5vw;
          }
          .services-right {
            padding: 5vw 4vw 5vw 0;
            display: flex;
            flex-direction: column;
            gap: 0;
          }
        }

        /* Mobile stacked layout */
        @media (max-width: 767px) {
          .services-layout {
            display: flex;
            flex-direction: column;
          }
          .services-left {
            padding: 3rem 1.25rem 2rem;
          }
          .services-right {
            padding: 0 1.25rem 3rem;
            display: flex;
            flex-direction: column;
            gap: 0;
          }
        }
      `}</style>

      <section
        id="services"
        ref={sectionRef}
        style={{
          backgroundColor: "#0a0a0a",
          fontFamily: "'Barlow', sans-serif",
          overflowX: "hidden",
          
        }}
      >
        <div className="services-layout md:px-24">

          {/* LEFT — sticky heading */}
          <div className="services-left px-" ref={leftRef}>
            <div ref={headingRef}>
              <h2
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                  color: "#ffffff",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  marginBottom: "1.5rem",
                  opacity: headingInView ? 1 : 0,
                  transform: headingInView ? "translateY(0)" : "translateY(36px)",
                  transition: "opacity 0.7s ease 0s, transform 0.7s ease 0s",
                }}
              >
                Creating Websites<br />
                That Perform &amp; Convert
              </h2>

              <p
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 300,
                  fontSize: "clamp(0.88rem, 1.3vw, 1rem)",
                  color: "#d4d4d4",
                  lineHeight: 1.75,
                  maxWidth: "38ch",
                  opacity: headingInView ? 1 : 0,
                  transform: headingInView ? "translateY(0)" : "translateY(28px)",
                  transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
                }}
              >
                Not just visually appealing websites but strategic web experiences
                built with performance, usability, and real business impact in mind.
              </p>
            </div>
          </div>

          {/* RIGHT — scrollable service cards */}
          <div className="services-right">
            {services.map((service, i) => (
              <ServiceCard key={i} service={service} index={i} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}