import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Maximize2, Layers, Box, ArrowRight, ShieldCheck } from 'lucide-react';


export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const tilesDetails = await getTileData(id);
  return {
    title: tilesDetails.title,
  };
};

const getTileData = async (id) => {
  try {
    const res = await fetch(
      'https://tile-gallery-server2.onrender.com/products',
      {
        next: { revalidate: 3600 },
      },
    );
    if (!res.ok) return null;
    const allTiles = await res.json();
    return allTiles.find((tile) => tile.id === id);
  } catch (error) {
    return null;
  }
};

const TilesDetailsPage = async ({ params }) => {
  const { id } = await params;
  const tile = await getTileData(id);

  if (!tile)
    return (
      <div className="h-screen flex items-center justify-center font-serif text-stone-400 uppercase tracking-widest">
        Collection Not Found
      </div>
    );

  return (
    <main className="min-h-screen bg-white text-[#121212] antialiased">
      <div className="max-w-375mx-auto px-4 sm:px-8 lg:px-16 py-6 md:py-10">
        {/* Mobile Responsive with Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 md:mb-12">
          <nav className="flex flex-wrap items-center gap-2 md:gap-4 text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em] text-stone-400 font-bold">
            <Link
              href="/"
              className="hover:text-amber-600 transition-colors whitespace-nowrap"
            >
              Home
            </Link>
            <span>/</span>
            <Link
              href="/all-tiles"
              className="hover:text-amber-600 transition-colors whitespace-nowrap"
            >
              Collection
            </Link>
            <span>/</span>
            <span className="text-black truncate max-w-37 md:max-w-none">
              {tile.title}
            </span>
          </nav>
          <div className="text-[9px] md:text-[10px] tracking-[0.3em] font-bold text-stone-300 uppercase bg-stone-50 px-3 py-1 md:bg-transparent md:p-0">
            Product ID: <span className="text-amber-600 ml-1">{tile.id}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 xl:gap-24 items-start">
          {/* Image Section */}
          <div className="lg:col-span-7 w-full">
            <div className="relative aspect-4/3 sm:aspect-5/4 bg-[#F9F9F9] overflow-hidden group border border-stone-100">
              <Image
                src={tile.image}
                alt={tile.title}
                fill
                priority
                quality={100}
                unoptimized={true}
                className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                sizes="(max-w-768px) 100vw, 60vw"
              />
              <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 p-3 md:p-4 bg-white/90 backdrop-blur shadow-2xl opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all">
                <Maximize2 size={18} className="text-stone-800" />
              </div>
            </div>
          </div>

          {/* Dynamic Content Section */}
          <div className="lg:col-span-5 space-y-8 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-8 md:w-10 h-[1.5px] bg-amber-500" />
                <span className="text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.5em] uppercase text-amber-600 font-bold">
                  {tile.category || 'Premium Collection'}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.2] text-stone-900">
                {tile.title}
              </h1>

              <div className="flex flex-wrap gap-4 md:gap-8 pt-2 border-b border-stone-50 pb-6">
                <div className="flex items-center gap-2 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-stone-400">
                  <Layers size={14} className="text-amber-500" />
                  {tile.material || 'Vitrified'}
                </div>
                <div className="flex items-center gap-2 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-stone-400">
                  <Box size={14} className="text-amber-500" />
                  {tile.usage || 'Wall & Floor'}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <p className="text-lg md:text-xl text-stone-500 font-light leading-relaxed font-serif italic border-l-2 border-stone-100 pl-4 md:pl-6">
                &quot; {tile.description}&quot;
              </p>
            </div>

            {/* ৪. Price Section */}
            <div className="pt-2 pb-8 border-b border-stone-100">
              <span className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-stone-400 font-bold block mb-2">
                Price / SQFT
              </span>
              <div className="flex items-baseline gap-2 md:gap-3">
                <span className="text-xl md:text-2xl font-bold text-amber-600 font-serif italic">
                  {tile.currency || 'USD'}
                </span>
                <span className="text-4xl sm:text-4xl md:text-5xl font-medium tracking-tighter text-stone-900">
                  {tile.price}
                </span>
              </div>
            </div>

            {/*  Product Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
              <div className="space-y-1">
                <p className="text-[8px] md:text-[9px] tracking-[0.2em] md:tracking-[0.3em] uppercase text-stone-400 font-bold">
                  Standard Size
                </p>
                <p className="text-sm md:text-base font-semibold text-stone-800">
                  {tile.dimensions}
                </p>
              </div>
              <div className="space-y-1 sm:border-l sm:border-stone-100 sm:pl-10">
                <p className="text-[8px] md:text-[9px] tracking-[0.2em] md:tracking-[0.3em] uppercase text-stone-400 font-bold">
                  In-Stock Status
                </p>
                <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs md:text-sm">
                  <ShieldCheck size={14} /> <span>Available Now</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button className="w-full bg-[#1A1A1A] hover:bg-[#0E4686] active:scale-[0.98] text-white py-5 md:py-6 px-8 md:px-10 flex items-center justify-between transition-all duration-300 group shadow-lg">
                <span className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase font-bold">
                  Request Quotation
                </span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TilesDetailsPage;
