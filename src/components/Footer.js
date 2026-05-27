"use client"

import { useRef, useState, useEffect } from "react";

function useInView(ref, threshold = 0.2) {
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

const socials = [
  { label: "Twitter/X", href: "https://x.com/_abhishek_2304_" },
  { label: "Instagram", href: "https://www.instagram.com/_abhishek_2304_/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abhishek-bamane-7a629a295/" },
  { label: "WhatsApp", href: "https://api.whatsapp.com/send/?phone=919096405319&text&type=phone_number&app_absent=0" },
];

function SocialLink({ label, href }) {
  const [over, setOver] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setOver(true)}
      onMouseLeave={() => setOver(false)}
      style={{
        fontFamily: "'Barlow', sans-serif",
        fontWeight: 400,
        fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
        color: over ? "#e85c1a" : "#ffffff",
        textDecoration: "none",
        letterSpacing: "0.01em",
        transition: "color 0.2s ease",
      }}
    >
      {label}
    </a>
  );
}

export default function Footer() {
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, 0.15);
  const [btnOver, setBtnOver] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,300;0,400;0,600;0,700;0,900;1,300&display=swap');

        @media (max-width: 540px) {
          .footer-socials {
            gap: 1.5rem !important;
            flex-wrap: wrap;
            justify-content: center;
          }
          .footer-cta-title {
            font-size: clamp(2rem, 10vw, 3rem) !important;
          }
        }
      `}</style>

      <footer
        style={{
          backgroundColor: "#0a0a0a",
          fontFamily: "'Barlow', sans-serif",
        }}
      >
        {/* ── CTA Block ── */}
        <div
          ref={ctaRef}
          style={{
            textAlign: "center",
            padding: "6rem 1.5rem 5.5rem",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {/* Heading */}
          <h2
            className="footer-cta-title"
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.4rem, 6.5vw, 5rem)",
              color: "#ffffff",
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
              marginBottom: "1.2rem",
              opacity: ctaInView ? 1 : 0,
              transform: ctaInView ? "translateY(0)" : "translateY(36px)",
              transition: "opacity 0.75s ease 0s, transform 0.75s cubic-bezier(0.16,1,0.3,1) 0s",
            }}
          >
            Have a project in mind?
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 300,
              fontSize: "clamp(0.88rem, 1.4vw, 1.05rem)",
              color: "#a0a0a0",
              lineHeight: 1.7,
              maxWidth: "44ch",
              margin: "0 auto 2.8rem",
              opacity: ctaInView ? 1 : 0,
              transform: ctaInView ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
            }}
          >
            Building scalable web solutions with modern interfaces designed for real-world performance.
          </p>

          {/* BOOK A CALL button */}
          <div
            style={{
              opacity: ctaInView ? 1 : 0,
              transform: ctaInView ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.65s ease 0.28s, transform 0.65s ease 0.28s",
              display: "inline-block",
            }}
          >
            <a
              href="/contact"
              onMouseEnter={() => setBtnOver(true)}
              onMouseLeave={() => setBtnOver(false)}
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 700,
                fontSize: "0.75rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: btnOver ? "#ffffff" : "#0a0a0a",
                backgroundColor: btnOver ? "#c0390a" : "#e85c1a",
                textDecoration: "none",
                display: "inline-block",
                padding: "1rem 2.8rem",
                transition: "background-color 0.25s ease, color 0.25s ease, transform 0.2s ease",
                transform: btnOver ? "scale(0.97)" : "scale(1)",
              }}
            >
              Book a Call
            </a>
          </div>
        </div>

        {/* ── Social Links Row ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "3rem",
            padding: "2rem 1.5rem",
          }}
          className="footer-socials"
        >
          {socials.map((s, i) => (
            <SocialLink key={i} label={s.label} href={s.href} />
          ))}
        </div>
      </footer>
    </>
  );
}