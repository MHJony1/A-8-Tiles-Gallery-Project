import React from 'react';
import Link from 'next/link';

const Banner = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 mt-6">
      <div className="relative h-[75vh] md:h-[85vh] w-full overflow-hidden rounded-[2.5rem] shadow-2xl group">
        <div
          className="absolute inset-0 z-0 transition-transform duration-[6s] ease-out group-hover:scale-110"
          style={{
            backgroundImage: `url('https://plus.unsplash.com/premium_photo-1661875124229-5201914a77b7?q=80&w=2000&auto=format&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent"></div>
          <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 h-full flex items-center px-8 md:px-16 lg:px-24">
          <div className="max-w-4xl space-y-6 md:space-y-8">
            <div className="flex items-center gap-3 animate-pulse-slow">
              <span className="w-12 h-px bg-[#c8b89a]"></span>
              <p className="text-[#c8b89a] uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold drop-shadow-md">
                Tilecraft Gallery • Premium Interior
              </p>
            </div>

            <h1 className="text-5xl md:text-8xl font-serif text-white leading-[1.1] tracking-tight drop-shadow-2xl">
              Discover Your <br />
              <span className="italic font-light text-stone-200">
                Perfect Aesthetic
              </span>
            </h1>

            <p className="text-white text-base md:text-xl font-light leading-normal max-w-xl opacity-90 drop-shadow-lg">
              Elevate your space with premium tiles. Explore our curated gallery
              of world-class textures designed for modern architectural spaces.
            </p>

            <div className="flex pt-6">
              <Link
                href="/all-tiles"
                className="group relative px-14 py-5 bg-white text-stone-900 rounded-full font-bold uppercase tracking-[0.2em] text-[11px] overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_25px_50px_-12px_rgba(255,255,255,0.2)] active:scale-95"
              >
                <span className="relative text-md z-10 transition-colors duration-300 group-hover:text-black">
                  Browse Now
                </span>
                <div className="absolute inset-0 bg-[#f8f5f0] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Rare Card: Glassmorphism effect optimized */}
        <div className="absolute bottom-12 right-12 hidden lg:block group-hover:translate-y-2.5 transition-transform duration-700">
          <div className="p-6 backdrop-blur-2xl bg-black/20 border border-white/10 rounded-[2rem] shadow-2xl">
            <p className="text-[#c8b89a] text-[9px] uppercase tracking-[0.4em] font-bold mb-2">
              Featured Texture
            </p>
            <div className="flex items-center gap-4">
              <p className="text-white text-sm font-semibold tracking-wide">
                Calacatta Gold Marble
              </p>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
