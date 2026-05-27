"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import a from "./assets/img.png";

const stats = [
  { value: "3+ YEARS", label: "EXPERIENCE" },
  { value: "10+", label: "PROJECTS SHIPPED" },
  { value: "100%", label: "CLIENTS SATISFICATION" },
];

const socialIcons = {
  instagram: (
    <svg
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  twitter: (
    <svg
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.7 5.5 4.3 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  ),
  linkedin: (
    <svg
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
};

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-up");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@300;400;500;600;700&display=swap');

        .about-section {
          font-family: 'Barlow', sans-serif;
          background-color: #0a0a0a;
          min-height: 100vh;
          color: #ffffff;
        }

        .fade-up {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .fade-up.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .fade-up:nth-child(1) { transition-delay: 0.05s; }
        .fade-up:nth-child(2) { transition-delay: 0.15s; }
        .fade-up:nth-child(3) { transition-delay: 0.25s; }
        .fade-up:nth-child(4) { transition-delay: 0.35s; }

        .about-heading {
          font-family: 'Barlow', sans-serif;
          font-weight: 700;
          font-size: clamp(2.4rem, 5vw, 3.6rem);
          letter-spacing: -0.02em;
          line-height: 1.05;
          color: #ffffff;
        }

        .about-body {
          font-family: 'Barlow', sans-serif;
          font-weight: 300;
          font-size: clamp(0.9rem, 1.4vw, 1.05rem);
          line-height: 1.75;
          color: #d4d4d4;
        }

        .photo-wrapper {
          position: relative;
          width: 100%;
          background: #1a0a00;
          overflow: hidden;
        }

        .photo-placeholder {
          width: 100%;
          height: 100%;
          min-height: 420px;
          background: linear-gradient(135deg, #c0390a 0%, #e85c1a 30%, #a02a00 60%, #1a0800 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .photo-placeholder::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 60% 30%, rgba(255,100,30,0.45) 0%, transparent 65%),
                      radial-gradient(ellipse at 30% 80%, rgba(180,40,0,0.3) 0%, transparent 60%);
        }

        .photo-silhouette {
          position: relative;
          z-index: 1;
          font-size: 7rem;
          opacity: 0.25;
          user-select: none;
        }

        .status-bar {
          background-color: rgba(15, 15, 15, 0.95);
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .status-label {
          font-family: 'Barlow', sans-serif;
          font-weight: 400;
          font-size: 0.65rem;
          letter-spacing: 0.18em;
          color: #888888;
          text-transform: uppercase;
        }

        .status-value {
          font-family: 'Barlow', sans-serif;
          font-weight: 700;
          font-size: 1.15rem;
          letter-spacing: 0.12em;
          color: #e85c1a;
          text-transform: uppercase;
        }

        .social-icon {
          color: #888;
          transition: color 0.2s ease;
          cursor: pointer;
        }

        .social-icon:hover {
          color: #e85c1a;
        }

        .stat-card {
          border: 1px solid rgba(255,255,255,0.1);
          background: transparent;
          padding: 1.1rem 1.4rem;
          flex: 1;
          min-width: 0;
        }

        .stat-value {
          font-family: 'Barlow', sans-serif;
          font-weight: 700;
          font-size: clamp(1.1rem, 2.2vw, 1.45rem);
          color: #ffffff;
          letter-spacing: -0.01em;
          line-height: 1.1;
        }

        .stat-label {
          font-family: 'Barlow', sans-serif;
          font-weight: 400;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          color: #777777;
          text-transform: uppercase;
          margin-top: 0.25rem;
        }

        @media (max-width: 768px) {
          .about-layout {
            flex-direction: column-reverse;
          }
          .photo-wrapper {
            height: 55vw;
            min-height: 260px;
            max-height: 380px;
          }
          .photo-placeholder {
            min-height: unset;
            height: 100%;
          }
          .content-side {
            padding: 2rem 1.25rem 1.5rem;
          }
          .stats-row {
            flex-direction: row;
          }
        }

        @media (min-width: 769px) {
          .about-layout {
            flex-direction: row;
            min-height: 100vh;
          }
          .content-side {
            width: 52%;
            padding: 5vw 4vw 3vw 5vw;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .photo-side {
            width: 48%;
            position: relative;
          }
          .photo-wrapper {
            height: 100%;
          }
          .photo-placeholder {
            min-height: 100%;
          }
        }
      `}</style>

      <section className="about-section" ref={sectionRef} id="about">
        <div className="about-layout md:px-28" style={{ display: "flex" }}>
          {/* LEFT: Content */}
          <div
            className="content-side"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h1
                className="about-heading fade-up"
                style={{ marginBottom: "1.6rem" }}
              >
                Hey, I&apos;m Abhishek.
              </h1>

              <p
                className="about-body fade-up"
                style={{ marginBottom: "1.4rem" }}
              >
                A frontend and full-stack web developer passionate about
                building modern, scalable, and user-focused digital experiences.
                I develop responsive websites and web applications using
                technologies like Next.js, PHP, MongoDB, MySQL, Shopify, and
                WordPress combining clean design with high performance
                functionality.
              </p>

              <p className="about-body fade-up">
                From business websites and eCommerce stores to full-stack
                platforms and custom web solutions, I focus on creating seamless
                user experiences, optimized performance, and visually refined
                interfaces that deliver real impact.
              </p>
            </div>

            {/* Stats */}
            <div
              className="stats-row fade-up"
              style={{
                display: "flex",
                gap: "0",
                marginTop: "3rem",
              }}
            >
              {stats.map((stat, i) => (
                <div key={i} className="stat-card">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Photo */}
          <div className="photo-side" style={{ position: "relative" }}>
            <div className="photo-wrapper">
              <Image
                src= {a}
                alt="Abhishek"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Status bar overlay */}
            <div
              className="status-bar"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "0.85rem 1.25rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div className="status-label">Status</div>
                <div className="status-value">Freelancer</div>
              </div>

              <div
                style={{ display: "flex", gap: "1rem", alignItems: "center" }}
              >
                <Link href="https://www.instagram.com/_abhishek_2304_/">
                  {" "}
                  <span className="social-icon">{socialIcons.instagram}</span>
                </Link>
                <Link href="https://x.com/_abhishek_2304_">
                  <span className="social-icon">{socialIcons.twitter}</span>
                </Link>
                <Link href="https://www.linkedin.com/in/abhishek-bamane-7a629a295/">
                  <span className="social-icon">{socialIcons.linkedin}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
