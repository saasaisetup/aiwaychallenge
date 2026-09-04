"use client";

import React from "react";

interface HappyFaceMosaicProps {
  onOpenCheckout: () => void;
}

export default function HappyFaceMosaic({ onOpenCheckout }: HappyFaceMosaicProps) {
  const leftFaces = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
  ];

  const rightFaces = [
    "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80",
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#FAF7F2] text-[#1E1410] border-t border-[#EAE2D9] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
          {/* Left Faces Collage */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3 w-full lg:w-1/3 max-w-sm mx-auto">
            {leftFaces.map((img, i) => (
              <div
                key={i}
                className={`relative aspect-square rounded-2xl overflow-hidden border-2 border-white shadow-md bg-stone-300 ${
                  i % 2 === 1 ? "translate-y-2" : "-translate-y-2"
                }`}
              >
                <img
                  src={img}
                  alt={`Alumni ${i + 1}`}
                  className="w-full h-full object-cover object-center grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          {/* Center Text Block matching screenshot */}
          <div className="w-full lg:w-1/3 text-center max-w-md mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#1F1511] tracking-tight leading-tight">
              This is not just a <br />
              <span className="font-serif-italic font-normal">happy face</span>
            </h2>

            <p className="mt-4 text-[#665348] text-sm sm:text-base leading-relaxed">
              All have completed this masterclass and are leading at the top of the
              order. You will also take the place I believe!
            </p>

            <button
              onClick={onOpenCheckout}
              className="mt-8 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-[#231713] hover:bg-[#3B2822] transition-all shadow-lg shadow-[#231713]/20 active:scale-95 cursor-pointer inline-block"
            >
              Book your seat now!
            </button>
          </div>

          {/* Right Faces Collage */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3 w-full lg:w-1/3 max-w-sm mx-auto">
            {rightFaces.map((img, i) => (
              <div
                key={i}
                className={`relative aspect-square rounded-2xl overflow-hidden border-2 border-white shadow-md bg-stone-300 ${
                  i % 2 === 0 ? "translate-y-2" : "-translate-y-2"
                }`}
              >
                <img
                  src={img}
                  alt={`Alumni ${i + 7}`}
                  className="w-full h-full object-cover object-center grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
