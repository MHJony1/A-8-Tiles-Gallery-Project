'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, LogOut } from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';
import Image from 'next/image';
import { Button } from '@heroui/react';

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
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push('/login');
          setOpen(false);
        },
      },
    });
  };

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');`}</style>

      <nav
        className={`sticky top-0 inset-x-0 z-50 bg-[#fafaf8] border-b shadow-sm transition-all duration-500 ${scrolled ? 'shadow-md border-[#e0d8cc]' : 'border-[#ede8e0]'}`}
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <div className="h-px w-full bg-[#c8b89a] opacity-30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-16">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <span className="group-hover:opacity-50 transition-opacity duration-300">
              <TilesLogo />
            </span>
            <span className="flex flex-col leading-none">
              <span
                className="text-[#1a1a1a] tracking-wide text-lg sm:text-xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Tilecraft
              </span>
              <span className="text-[#a89880] font-medium uppercase tracking-[0.25em] text-[9px] sm:text-[10px]">
                Gallery
              </span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 list-none">
            {navLinks.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`relative pb-1 uppercase font-medium tracking-widest text-xs lg:text-sm transition-colors duration-200 group ${active ? 'text-[#d38b2e]' : 'text-[#7a6f65]'}`}
                  >
                    {label}
                    <span
                      className={`absolute bottom-0 left-0 h-px bg-[#b97825] transition-all duration-300 ${active ? 'w-full' : 'w-0'} group-hover:w-full`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Auth Section */}
          <div className="flex items-center gap-3 sm:gap-6">
            {!isPending &&
              (user ? (
                <div className="flex items-center gap-2 sm:gap-3">
                  {/* Avatar */}
                  <div className="relative w-8 h-8 sm:w-9 sm:h-9 border-2 border-[#b07d3a] rounded-full overflow-hidden p-0.5 bg-white shrink-0">
                    <Image
                      src={
                        user.image ||
                        `https://ui-avatars.com/api/?name=${user.name}`
                      }
                      alt="profile"
                      fill
                      className="rounded-full object-cover"
                      unoptimized
                    />
                  </div>

                  {/* Logout Button - Desktop */}
                  <div className="hidden sm:block">
                    <Button onClick={handleLogout} variant="danger">
                      LogOut <LogOut size={16} />
                    </Button>
                  </div>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="hidden sm:flex items-center gap-2 uppercase font-medium text-[#fafaf8] bg-[#1a1a1a] px-4 py-2 sm:px-5 sm:py-2.5 text-[10px] sm:text-[11px] tracking-[0.2em] rounded-xl hover:bg-[#b07d3a] transition-colors shrink-0"
                >
                  Login <ArrowRight size={13} />
                </Link>
              ))}

            {/* Mobile Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.25 p-1 shrink-0"
              onClick={() => setOpen((v) => !v)}
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
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full inset-x-0 bg-[#fafaf8] border-b border-[#ede8e0] shadow-lg md:hidden overflow-hidden"
            >
              <div className="flex flex-col px-6 py-6 gap-2">
                {navLinks.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`py-3 text-lg border-b border-[#f0ece4] last:border-0 ${pathname === href ? 'text-[#b07d3a]' : 'text-[#1a1a1a]'}`}
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {label}
                  </Link>
                ))}

                <div className="mt-4 pt-4 border-t border-[#ede8e0]">
                  {user ? (
                    <Button onClick={handleLogout} variant="danger" fullWidth>
                      LogOut <LogOut size={18} />
                    </Button>
                  ) : (
                    <Link
                      href="/login"
                      onClick={() => setOpen(false)}
                      className="block w-full bg-[#1a1a1a] text-[#fafaf8] text-center py-3 uppercase tracking-[0.2em] text-[11px] font-medium rounded-lg"
                    >
                      Login
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
