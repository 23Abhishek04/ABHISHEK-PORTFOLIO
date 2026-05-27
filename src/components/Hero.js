"use client"
import { useEffect, useRef, useState } from "react";
import video from "./assets/video.mp4";

export default function Hero() {
  const videoRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    // Trigger text animation shortly after mount
    const t1 = setTimeout(() => setLoaded(true), 100);
    const t2 = setTimeout(() => setTextVisible(true), 400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,300;0,400;0,600;0,700;0,900;1,300&display=swap');

        .hero-section {
          font-family: 'Barlow', sans-serif;
          position: relative;
          width: 100%;
          height: 100svh;
          min-height: 560px;
          background-color: #0a0a0a;
          overflow: hidden;
        }

        /* ── Video ── */
        .hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          z-index: 0;
        }

        /* ── Overlays ── */
        .hero-overlay-dark {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.52);
          z-index: 1;
        }

        /* Strong gradient at bottom so text always pops */
        .hero-overlay-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            transparent 35%,
            rgba(10, 10, 10, 0.55) 60%,
            rgba(10, 10, 10, 0.92) 80%,
            #0a0a0a 100%
          );
          z-index: 2;
        }

        /* Subtle vignette on sides */
        .hero-overlay-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.55) 100%);
          z-index: 3;
        }

        /* ── Noise grain texture for depth ── */
        .hero-grain {
          position: absolute;
          inset: 0;
          z-index: 4;
          opacity: 0.04;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 180px 180px;
          pointer-events: none;
        }

        /* ── Orange accent line at very top ── */
        .hero-topline {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: #e85c1a;
          z-index: 10;
          transform-origin: left;
          transform: scaleX(0);
          transition: transform 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s;
        }
        .hero-topline.visible {
          transform: scaleX(1);
        }

        /* ── Bottom content ── */
        .hero-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 1.25rem 3.5rem;
        }

        /* Eyebrow tag */
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Barlow', sans-serif;
          font-weight: 400;
          font-size: 0.65rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #e85c1a;
          margin-bottom: 1.1rem;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s;
        }
        .hero-eyebrow.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .hero-eyebrow-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #e85c1a;
          animation: pulse-dot 2s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }

        /* Main title */
        .hero-title {
          font-family: 'Barlow', sans-serif;
          font-weight: 700;
          font-size: clamp(2.2rem, 6.5vw, 5rem);
          line-height: 1.0;
          letter-spacing: -0.025em;
          color: #ffffff;
          margin-bottom: 1.25rem;
          max-width: 18ch;
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.75s ease 0.5s, transform 0.75s cubic-bezier(0.16,1,0.3,1) 0.5s;
        }
        .hero-title.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .hero-title-accent {
          color: #e85c1a;
          font-style: italic;
          font-weight: 300;
        }

        /* Subtitle */
        .hero-subtitle {
          font-family: 'Barlow', sans-serif;
          font-weight: 300;
          font-size: clamp(0.85rem, 1.6vw, 1.05rem);
          line-height: 1.75;
          color: rgba(212, 212, 212, 0.85);
          max-width: 54ch;
          margin-bottom: 2.2rem;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease 0.7s, transform 0.7s ease 0.7s;
        }
        .hero-subtitle.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Buttons row */
        .hero-buttons {
          display: flex;
          gap: 0.9rem;
          flex-wrap: wrap;
          justify-content: center;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.65s ease 0.9s, transform 0.65s ease 0.9s;
        }
        .hero-buttons.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Primary button */
        .btn-primary {
          font-family: 'Barlow', sans-serif;
          font-weight: 600;
          font-size: 0.78rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #0a0a0a;
          background: #e85c1a;
          border: 1px solid #e85c1a;
          padding: 0.82rem 2rem;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: background 0.3s ease, color 0.3s ease, transform 0.2s ease;
          text-decoration: none;
          display: inline-block;
        }
        .btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #ffffff;
          transform: translateX(-101%);
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1);
        }
        .btn-primary:hover::before {
          transform: translateX(0);
        }
        .btn-primary:hover {
          color: #0a0a0a;
        }
        .btn-primary span {
          position: relative;
          z-index: 1;
        }
        .btn-primary:active {
          transform: scale(0.97);
        }

        /* Ghost button */
        .btn-ghost {
          font-family: 'Barlow', sans-serif;
          font-weight: 600;
          font-size: 0.78rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #ffffff;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.3);
          padding: 0.82rem 2rem;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s ease, transform 0.2s ease;
          text-decoration: none;
          display: inline-block;
        }
        .btn-ghost::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.08);
          transform: translateX(-101%);
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1);
        }
        .btn-ghost:hover::before {
          transform: translateX(0);
        }
        .btn-ghost:hover {
          border-color: rgba(255,255,255,0.7);
        }
        .btn-ghost span {
          position: relative;
          z-index: 1;
        }
        .btn-ghost:active {
          transform: scale(0.97);
        }

        /* ── Scroll indicator ── */
        .hero-scroll {
          position: absolute;
          bottom: 2.2rem;
          right: 2.2rem;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          opacity: 0;
          transition: opacity 0.6s ease 1.2s;
        }
        .hero-scroll.visible {
          opacity: 1;
        }
        .hero-scroll-label {
          font-family: 'Barlow', sans-serif;
          font-weight: 400;
          font-size: 0.58rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          writing-mode: vertical-rl;
        }
        .hero-scroll-line {
          width: 1px;
          height: 48px;
          background: linear-gradient(to bottom, rgba(232,92,26,0.8), transparent);
          animation: scroll-line 1.8s ease-in-out infinite;
        }
        @keyframes scroll-line {
          0% { transform: scaleY(0); transform-origin: top; opacity: 1; }
          50% { transform: scaleY(1); transform-origin: top; opacity: 1; }
          51% { transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; opacity: 0; }
        }

        /* Mobile tweaks */
        @media (max-width: 480px) {
          .hero-content {
            padding: 0 1rem 2.5rem;
          }
          .hero-scroll {
            display: none;
          }
          .btn-primary, .btn-ghost {
            padding: 0.75rem 1.5rem;
            font-size: 0.72rem;
          }
        }
      `}</style>

      <section className="hero-section">

        {/* Background video — replace src with your actual video URL */}
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          playsInline
          poster=""
          src={video}
        />

        {/* Layered overlays */}
        <div className="hero-overlay-dark" />
        <div className="hero-overlay-gradient" />
        <div className="hero-overlay-vignette" />
        <div className="hero-grain" />

        {/* Top orange accent line */}
        <div className={`hero-topline ${loaded ? "visible" : ""}`} />

        {/* Bottom-center content */}
        <div className="hero-content">

          {/* Eyebrow */}
          <div className={`hero-eyebrow ${textVisible ? "visible" : ""}`}>
            <span className="hero-eyebrow-dot" />
            PORTFOLIO
          </div>

          {/* Title */}
          <h1 className={`hero-title ${textVisible ? "visible" : ""}`}>
           Web Developer{" "}
            {/* <span className="hero-title-accent">&amp;</span>{" "}
            Strategist */}
          </h1>

          {/* Subtitle */}
          {/* <p className={`hero-subtitle ${textVisible ? "visible" : ""}`}>
            Transforming complex problems into intuitive, scalable, and human-centered
            digital experiences. Bridging the gap between user needs and business goals.
          </p> */}

          {/* CTA Buttons */}
          <div className={`hero-buttons ${textVisible ? "visible" : ""}`}>
            <a href="/work" className="btn-primary">
              <span>View Work</span>
            </a>
            <a href="/contact" className="btn-ghost">
              <span>Book a Call</span>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`hero-scroll ${textVisible ? "visible" : ""}`}>
          <span className="hero-scroll-label">Scroll</span>
          <div className="hero-scroll-line" />
        </div>

      </section>
    </>
  );
}