import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, Search } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <main className="h-screen w-full bg-white flex items-center justify-center px-6 antialiased">
      <div className="max-w-2xl w-full text-center space-y-12">
        <div className="relative inline-block">
          <h1 className="text-[120px] md:text-[180px] font-light leading-none tracking-tighter text-stone-100 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-xl md:text-2xl font-serif italic text-amber-600 tracking-wide mt-4 md:mt-8">
              Page Not Found
            </p>
          </div>
        </div>

        <div className="space-y-4 max-w-md mx-auto">
          <div className="flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-amber-500" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-amber-600 font-bold">
              Lost in Luxury
            </span>
            <span className="w-8 h-px bg-amber-500" />
          </div>
          <p className="text-stone-500 font-light leading-relaxed">
            The specific design or collection you are looking for has been moved
            or is no longer part of our current gallery.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
          <Link
            href="/"
            className="group flex items-center gap-3 bg-[#1A1A1A] text-white px-10 py-5 hover:bg-amber-600 transition-all duration-500 shadow-xl"
          >
            <Home size={18} />
            <span className="text-xs uppercase tracking-[0.3em] font-bold">
              Back to Home
            </span>
          </Link>

          <Link
            href="/all-tiles"
            className="group flex items-center gap-3 border border-stone-200 text-stone-800 px-10 py-5 hover:border-amber-500 transition-all duration-500"
          >
            <Search size={18} className="group-hover:text-amber-600" />
            <span className="text-xs uppercase tracking-[0.3em] font-bold">
              Explore Collection
            </span>
          </Link>
        </div>

        <div className="pt-16">
          <p className="text-[9px] uppercase tracking-[1em] text-stone-300 font-medium">
            Tilecraft Gallery — Excellence
          </p>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
