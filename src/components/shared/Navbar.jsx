'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'All Tiles', href: '/all-tiles' },
  { label: 'My Profile', href: '/myProfile' },
];

const TilesLogo = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="0" y="0" width="12" height="12" fill="#1a1a1a" opacity="1" />
    <rect x="16" y="0" width="12" height="12" fill="#1a1a1a" opacity="0.2" />
    <rect x="0" y="16" width="12" height="12" fill="#1a1a1a" opacity="0.2" />
    <rect x="16" y="16" width="12" height="12" fill="#1a1a1a" opacity="0.5" />
  </svg>
);

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');`}</style>

      <nav
        className={`sticky top-0 inset-x-0 z-50 bg-[#fafaf8] border-b shadow-sm transition-all duration-500 ${
          scrolled ? 'shadow-md border-[#e0d8cc]' : 'border-[#ede8e0]'
        }`}
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <div className="h-px w-full bg-[#c8b89a] opacity-30" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="group-hover:opacity-50 transition-opacity duration-300">
              <TilesLogo />
            </span>
            <span className="flex flex-col leading-none">
              <span
                className="text-[#1a1a1a] tracking-wide text-xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Tilecraft
              </span>
              <span className="text-[#a89880] font-medium uppercase tracking-[0.25em] text-[10px]">
                Gallery
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {navLinks.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`relative pb-1 uppercase font-medium tracking-widest text-sm transition-colors duration-200 group ${
                      active ? 'text-[#a26f2b]' : 'text-[#7a6f65]'
                    }`}
                  >
                    {label}
                    {/* Active underline */}
                    <span
                      className={`absolute bottom-0 left-0 h-px bg-[#b07d3a] transition-all duration-300 ${
                        active ? 'w-full' : 'w-0'
                      }`}
                    />
                    {/* Hover underline */}
                    {!active && (
                      <span className="absolute bottom-0 left-1/2 right-1/2 h-px bg-[#7a6f65] transition-all duration-300 group-hover:left-0 group-hover:right-0" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Login Button */}
          <Link
            href="/login"
            className="hidden md:flex items-center gap-2 uppercase font-medium text-[#fafaf8] bg-[#1a1a1a] px-5 py-2.5 text-[11px] tracking-[0.2em] hover:bg-[#b07d3a] transition-colors duration-300 group rounded-xl"
          >
            Login
            <ArrowRight
              size={13}
              strokeWidth={2}
              className="group-hover:translate-x-0.5 transition-transform duration-300"
            />
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.25 p-1"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            <span
              className={`block h-px bg-[#1a1a1a] transition-all duration-300 ${open ? 'w-5 rotate-45 translate-y-1.5' : 'w-5'}`}
            />
            <span
              className={`block w-5 h-px bg-[#1a1a1a] transition-opacity duration-200 ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-px bg-[#1a1a1a] transition-all duration-300 ${open ? 'w-5 -rotate-45 -translate-y-1.5' : 'w-3'}`}
            />
          </button>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="absolute top-full inset-x-0 bg-[#fafaf8] border-b border-[#ede8e0] shadow-lg md:hidden"
            >
              <div className="flex flex-col px-8 py-5">
                {navLinks.map(({ label, href }, i) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`border-b border-[#f0ece4] py-4 font-normal tracking-wide hover:pl-2 transition-all duration-300 text-xl ${
                      pathname === href ? 'text-[#b07d3a]' : 'text-[#1a1a1a]'
                    }`}
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      transitionDelay: `${i * 30}ms`,
                    }}
                  >
                    {label}
                  </Link>
                ))}
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="mt-5 bg-[#1a1a1a] text-[#fafaf8] text-center py-3 uppercase tracking-[0.2em] text-[11px] font-medium hover:bg-[#b07d3a] transition-colors duration-300"
                >
                  Login
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
