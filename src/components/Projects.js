import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import a from "./assets/1.jpg";
import b from "./assets/2.png";
import c from "./assets/3.webp";
import d from "./assets/4.png";
import e from "./assets/5.png";
import f from "./assets/6.png";
import g from "./assets/7.png";
import h from "./assets/8.png";


export default function Project() {
  const projects = [
    {
      title: "YADAV ENTERPRISES",
      description:
        '"Crafting timeless digital experiences with clarity, elegance, and purpose."',
      tech: "NEXT.JS",
      image: a,
      link: "https://yadav-enterprises.vercel.app/",
    },
    {
      title: "DRAPES CORNER",
      description:
        '"A responsive and visually refined business website built to deliver a seamless user experience and showcase products with modern web design."',
      tech: "SHOPIFY",
      image: d,
      link: "https://drapescorner.com/",
    },
    {
      title: "EMBASSY CITADEL",
      description:
        '"A premium real estate website crafted with modern visuals, smooth navigation, and a luxury-focused digital experience"',
      tech: "WORDPRESS",
      image: f,
      link: "https://embassyworlicitadel.in/",
    },
    {
      title: "VINODHA",
      description:
        '“Designing meaningful digital experiences that feel effortless and elegant.”',
      tech: "FRAMER",
      image: h,
      link: "https://vinodha.framer.website/ ",
    },
  ];

  return (
    <section
      className="relative w-full bg-black overflow-hidden md:px-28"
      id="projects"
    >
      
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 px-5 md:px-8 lg:px-10 py-16 md:py-20">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 mb-14">
          
          <div>
            <h1
              className="text-white uppercase text-[45px] md:text-[78px] leading-none tracking-[-3px] font-semibold"
              style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
              }}
            >
              PROJECTS
            </h1>

            <p
              className="mt-8 text-[#d9d9d9] text-[17px] md:text-[22px] leading-[1.6] max-w-[700px]"
              style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
              }}
            >
              <span className="text-[#ff5c00]">{'// '} </span>
              A collection of modern web applications, full-
              <br className="hidden md:block" />
              stack projects, and responsive digital experiences.
            </p>
          </div>

          {/* Button */}
          <Link
            href="/work"
            className="border border-[#1a1a1a] hover:border-[#ff5c00] transition-all duration-300 text-white uppercase h-[72px] text-[13px] px-10 md:text-[20px] tracking-wide w-fit flex items-center justify-center"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
            }}
          >
            VIEW ALL WORK
          </Link>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group bg-black border border-[#151515] overflow-hidden transition-all duration-500 hover:border-[#ff5c00] hover:shadow-[0_0_30px_rgba(255,92,0,0.12)]"
            >
              
              {/* Animated Border */}
              <span className="absolute inset-0 border border-[#ff5c00] opacity-0 scale-[0.98] group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 pointer-events-none" />

              {/* Browser Top */}
              <div className="h-[46px] border-b border-[#151515] flex items-center px-5 gap-2 bg-black">
                <span className="w-3 h-3 rounded-full bg-[#1f1f1f]" />
                <span className="w-3 h-3 rounded-full bg-[#1f1f1f]" />
                <span className="w-3 h-3 rounded-full bg-[#1f1f1f]" />
              </div>

              {/* Image */}
              <div className="overflow-hidden">
                
                {typeof project.image === "string" ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[240px] sm:h-[320px] md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={800}
                    className="w-full h-[240px] sm:h-[320px] md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                )}
              </div>

              {/* Content */}
              <div className="px-8 md:px-12 py-10 md:py-12">
                <h2
                  className="text-white uppercase text-[28px] md:text-[34px] font-semibold"
                  style={{
                    fontFamily: "'IBM Plex Sans', sans-serif",
                  }}
                >
                  {project.title}
                </h2>

                <p
                  className="mt-6 text-[#bdbdbd] text-[18px] md:text-[20px] leading-[1.8] max-w-[520px]"
                  style={{
                    fontFamily: "'IBM Plex Sans', sans-serif",
                  }}
                >
                  {project.description}
                </p>
              </div>

              {/* Bottom */}
              <div className="border-t border-[#151515] px-8 md:px-12 h-[90px] flex items-center justify-between">
                
                {/* Tech */}
                <div
                  className="flex items-center gap-2 text-[#ff5c00] uppercase text-[18px]"
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                  }}
                >
                  <span className="w-3 h-3 bg-[#ff5c00]" />
                  {project.tech}
                </div>

                {/* Clickable Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#cfcfcf] uppercase md:text-[20px] text-[15px] hover:text-white transition-all duration-300"
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                  }}
                >
                  VIEW PROJECT

                  <ArrowRight
                    size={22}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}