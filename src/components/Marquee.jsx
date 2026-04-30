import React from 'react';
import Marquee from "react-fast-marquee";

const  NewsMarquee = () => {
  return (
    <section className="bg-[#fafaf8] border-y border-[#ede8e0] py-6 mb-4">
      <Marquee 
        gradient={true} 
        gradientColor="#fafaf8" 
        gradientWidth={100} 
        speed={50} 
        pauseOnHover={true}
      >
        <div className="flex items-center gap-12 md:gap-20 overflow-hidden">
          
          {/* New Arrivals  */}
          <div className="flex items-center gap-4">
            <span className="h-2 w-2 rounded-full bg-[#c8b89a]"></span>
            <p className="text-stone-800 text-[11px] md:text-xs font-bold uppercase tracking-[0.2em]">
              New Arrivals: <span className="font-light italic text-stone-500 ml-1">Calacatta Gold Luxe</span>
            </p>
          </div>

          {/* Weekly Feature  */}
          <div className="flex items-center gap-4">
            <span className="h-2 w-2 rounded-full bg-[#c8b89a]"></span>
            <p className="text-stone-800 text-[11px] md:text-xs font-bold uppercase tracking-[0.2em]">
              Weekly Feature: <span className="font-light italic text-stone-500 ml-1">Modern Geometric Patterns</span>
            </p>
          </div>

          {/* Community  */}
          <div className="flex items-center gap-4">
            <span className="h-2 w-2 rounded-full bg-[#c8b89a]"></span>
            <p className="text-stone-800 text-[11px] md:text-xs font-bold uppercase tracking-[0.2em]">
              Join the Community: <span className="font-light italic text-stone-500 ml-1">@Tilecraft_Gallery</span>
            </p>
          </div>

          {/* Duplicate for seamless loop if content is short */}
          <div className="flex items-center gap-4">
            <span className="h-2 w-2 rounded-full bg-[#c8b89a]"></span>
            <p className="text-stone-800 text-[11px] md:text-xs font-bold uppercase tracking-[0.2em]">
              Limited Edition: <span className="font-light italic text-stone-500 ml-1">Antique Terracotta</span>
            </p>
          </div>

        </div>
      </Marquee>
    </section>
  );
};

export default NewsMarquee;