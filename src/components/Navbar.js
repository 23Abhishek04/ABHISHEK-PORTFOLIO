"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      name: "Projects",
      id: "projects",
    },
    {
      name: "About",
      id: "about",
    },
    {
      name: "Services",
      id: "services",
    },
    {
      name: "Tech",
      id: "tech",
    },
  ];

  // Smooth Scroll Function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    setIsOpen(false);
  };

  return (
    <nav className="w-full bg-black border-b border-[#111] sticky top-0 z-50">
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-24 h-[88px] flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/">
        <div className="flex items-center gap-3">
          <span className="text-[#ff5c00] text-[28px] font-light tracking-wide">
            {'// '}
          </span>

          <h1
            className="text-[#ff5c00] uppercase tracking-[2px] text-[22px] md:text-[24px] font-light"
            style={{
              fontFamily:
                "'IBM Plex Mono', 'Courier New', monospace",
            }}
          >
            Portfolio
          </h1>
        </div></Link>

        {/* Desktop Menu */}
        <ul
          className="hidden md:flex items-center gap-16 text-white text-[18px] font-light"
          style={{
            fontFamily:
              "'IBM Plex Mono', 'Courier New', monospace",
          }}
        >
          {navLinks.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="cursor-pointer transition-all duration-300 hover:text-[#ff5c00]"
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black border-t border-[#111] overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <ul
          className="flex flex-col px-6 py-4 gap-6 text-white text-[18px] font-light"
          style={{
            fontFamily:
              "'IBM Plex Mono', 'Courier New', monospace",
          }}
        >
          {navLinks.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="cursor-pointer hover:text-[#ff5c00] transition-all duration-300"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}