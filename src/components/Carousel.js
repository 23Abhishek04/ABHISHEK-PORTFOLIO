"use client"

export default function Carausol() {
  const texts = [
    "Human-Centered Design",
    "Logic Meets Creativity",
    "Pixel Perfect Interfaces",
    "Modern Digital Craft",
  ];

  return (
    <section className="w-full overflow-hidden bg-[#ff5c00] py-5 md:py-3">
      
      {/* Marquee */}
      <div className="marquee">
        <div className="marquee-content">
          {[...texts, ...texts].map((text, index) => (
            <div
              key={index}
              className="flex items-center  shrink-0"
            >

              {/* Text */}
              <h2
                className="text-black text-[32px] sm:text-[42px] md:text-[45px] font-semibold whitespace-nowrap tracking-[-2px]"
                style={{
                  fontFamily: "'IBM Plex Sans', sans-serif",
                }}
              >
                {text}
              </h2>
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        .marquee {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .marquee-content {
          display: flex;
          align-items: center;
          gap: 5rem;
          width: max-content;
          animation: scroll 40s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .marquee-content {
            gap: 3rem;
            animation-duration: 16s;
          }
        }
      `}</style>
    </section>
  );
}