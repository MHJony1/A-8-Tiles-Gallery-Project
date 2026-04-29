import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaArrowRight,
} from 'react-icons/fa';

const TilesLogo = () => (
  <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
    <rect x="0" y="0" width="12" height="12" fill="#1a1a1a" opacity="1" />
    <rect x="16" y="0" width="12" height="12" fill="#1a1a1a" opacity="0.2" />
    <rect x="0" y="16" width="12" height="12" fill="#1a1a1a" opacity="0.2" />
    <rect x="16" y="16" width="12" height="12" fill="#1a1a1a" opacity="0.5" />
  </svg>
);

const Footer = () => {
  return (
    <footer
      className="bg-[#fafaf8] pb-8"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Top gold accent line */}
      <div className="h-px w-full bg-[#c8b89a] opacity-30 mb-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-14">
          <div className="flex flex-col space-y-5">
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

            <p className="text-[#7a6f65] text-sm leading-relaxed max-w-xs">
              Curating the finest textures and premium tile designs for modern
              architectural spaces.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 pt-1">
              {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-8 h-8 border rounded-full border-[#e0d8cc] flex items-center justify-center text-[#a89880] hover:text-[#b07d3a] hover:border-[#b07d3a] transition-all duration-300 active:scale-90"
                >
                  <Icon size={13} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="sm:pl-4">
            <h3 className="text-[14px] uppercase tracking-widest font-medium text-[#1a1a1a] mb-6">
              Quick Explore
            </h3>
            <ul className="flex flex-col gap-4">
              {[
                { label: 'Home', href: '/' },
                { label: 'All Tiles', href: '/all-tiles' },
                { label: 'My Profile', href: '/myProfile' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-[#7a6f65] hover:text-[#b07d3a] text-sm tracking-wide transition-colors duration-200 group flex items-center gap-1"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#b07d3a] transition-all duration-300 inline-block" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 space-y-6">
            <h3 className="text-[14px] uppercase tracking-widest font-medium text-[#1a1a1a]">
              Contact Us
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Contact Details */}
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={15}
                    className="text-[#b07d3a] shrink-0 mt-0.5"
                  />
                  <p className="text-sm text-[#7a6f65] leading-snug">
                    Zigatola, Dhanmondi,
                    <br /> Dhaka, Bangladesh
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={15} className="text-[#b07d3a] shrink-0" />
                  <p className="text-sm text-[#7a6f65]">tilecraft@gmail.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={15} className="text-[#b07d3a] shrink-0" />
                  <p className="text-sm text-[#7a6f65]">+880 1234-567890</p>
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-[#f3ede4] rounded-lg border border-[#e0d8cc] p-5 flex flex-col justify-center gap-3">
                <p className="text-[10px] text-[#a89880] uppercase tracking-[0.2em] ">
                  Get Updates
                </p>
                <div className="flex items-center border-b border-[#d4c9bb] py-1 focus-within:border-[#b07d3a] transition-colors duration-300">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full bg-transparent text-sm text-[#1a1a1a] focus:outline-none placeholder:text-[#c4b8aa]"
                  />
                  <button className="text-[#b07d3a] p-1 hover:translate-x-1 transition-transform duration-300">
                    <FaArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#ede8e0] flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-[10px] text-[#a89880] uppercase tracking-widest">
            © 2026 Tilecraft Gallery. Crafted by Mahmudul Hasan Jony.
          </p>
          <div className="flex gap-6 text-[10px] text-[#a89880] uppercase tracking-widest">
            <Link
              href="#"
              className="hover:text-[#b07d3a] transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="hover:text-[#b07d3a] transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
