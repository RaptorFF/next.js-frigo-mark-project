"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isScrolled = !isTop;
  const isCompact = (!isHomePage || isScrolled) && !mobileMenuOpen;
  const shouldUseSolidHeader = !isHomePage || isScrolled || mobileMenuOpen;
  const frigoClass = shouldUseSolidHeader
    ? "bg-linear-to-b from-cyan-100 via-sky-200 to-blue-100 bg-clip-text text-transparent"
    : "bg-linear-to-b from-blue-300 via-blue-500 to-blue-700 bg-clip-text text-transparent";
  const markClass = shouldUseSolidHeader
    ? "bg-linear-to-b from-white via-slate-100 to-slate-300 bg-clip-text text-transparent"
    : "bg-linear-to-b from-slate-100 via-slate-300 to-slate-500 bg-clip-text text-transparent";
  const desktopNavItemClass = `hover:text-blue-100 transition ${
    isCompact ? "px-2.5 py-1.5 xl:px-3" : "px-3 py-2 xl:px-4"
  }`;

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY <= 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full text-white z-50 transition-all duration-500
        ${
          shouldUseSolidHeader
            ? "bg-linear-to-r from-blue-600/90 to-blue-800/90 backdrop-blur-md border-b border-blue-200/20 shadow-lg"
            : "bg-transparent border-b border-transparent"
        }`}
    >
      <div className="mx-auto">
        <div
          className={`flex justify-between items-center px-3 min-[390px]:px-4 min-[924px]:px-8 transition-all duration-500 ${
            isCompact ? "h-14 min-[924px]:h-15" : "h-20"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-1 min-[390px]:gap-2 min-[924px]:gap-3 hover:opacity-90 transition-all duration-500"
          >
            <Image
              src="/images/logo1.png"
              alt="Frigomark icon"
              width={36}
              height={36}
              className={`w-auto object-contain shrink-0 transition-all duration-500 ${
                isCompact
                  ? "h-7 min-[390px]:h-8 min-[924px]:h-9 scale-115 min-[390px]:scale-120 min-[924px]:scale-125"
                  : "h-8 min-[390px]:h-10 scale-120 min-[390px]:scale-125"
              }`}
              priority
            />
            <span
              className={`font-extrabold tracking-tight leading-none drop-shadow-[0_1px_0_rgba(255,255,255,0.35)] transition-all duration-500 ${
                isCompact
                  ? "text-base min-[390px]:text-lg min-[924px]:text-xl"
                  : "text-lg min-[390px]:text-xl min-[924px]:text-2xl"
              }`}
            >
              <span className={frigoClass}>Frigo</span>
              <span className={markClass}>mark</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className={`hidden min-[924px]:flex items-center space-x-0.5 xl:space-x-1 font-medium transition-all duration-500 ${
              isCompact ? "text-sm xl:text-base" : "text-base xl:text-lg"
            }`}
          >
            <Link href="/about" className={desktopNavItemClass}>
              O nama
            </Link>
            {/* Usluge with Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className={`${desktopNavItemClass} flex items-center gap-2`}
              >
                Usluge
                <sub className="text-xs">▼</sub>
              </button>

              {/* Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute left-0 mt-0 w-56 bg-white text-blue-900 rounded-lg shadow-2xl py-2 z-50 animate-in fade-in duration-200">
                  <Link
                    href="/installation"
                    className="block px-6 py-3 hover:bg-blue-50 transition border-b border-blue-100"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    Instalacija klima uređaja
                  </Link>
                  <Link
                    href="/maintenance"
                    className="block px-6 py-3 hover:bg-blue-50 transition border-b border-blue-100"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    Održavanje i servis
                  </Link>
                  <Link
                    href="/servicing"
                    className="block px-6 py-3 hover:bg-blue-50 transition border-b border-blue-100"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    Popravka i servis kućnih aparata
                  </Link>

                  <Link
                    href="/heatingPump"
                    className="block px-6 py-3 hover:bg-blue-50 transition border-b border-blue-100"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    Servisiranje toplotnih pumpi
                  </Link>
                </div>
              )}
            </div>
            <Link href="/pricing" className={desktopNavItemClass}>
              Cenovnik
            </Link>

            <Link href="/contact" className={desktopNavItemClass}>
              Kontakt
            </Link>
            <Link
              href="/serviceBooking"
              className={`bg-white text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-all duration-500 shadow-md hover:shadow-lg ${
                isCompact ? "px-4 py-2 xl:px-6" : "px-5 py-2.5 xl:px-8 xl:py-3"
              }`}
            >
              Zakažite termin
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="min-[924px]:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-5 h-5 min-[390px]:w-6 min-[390px]:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="min-[924px]:hidden pb-6 space-y-4 border-t border-blue-700 pt-4 px-3 min-[390px]:px-4 text-lg font-medium bg-linear-to-r from-blue-600 to-blue-800">
            <Link
              href="/about"
              className="block px-4 py-2 hover:text-blue-100 transition"
              onClick={() => {
                setMobileMenuOpen(false);
              }}
            >
              O nama
            </Link>
            {/* Usluge with dropdown */}
            <div>
              <button
                className="flex items-center gap-2 w-full px-4 py-2 hover:text-blue-100 transition"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                Usluge
                <sub className="text-xs">{mobileServicesOpen ? "▲" : "▼"}</sub>
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 min-[390px]:pl-6 mt-1 space-y-1 border-l border-blue-400 ml-2 min-[390px]:ml-4 max-w-88">
                  <Link
                    href="/installation"
                    className="block px-3 min-[390px]:px-4 py-2 hover:text-blue-100 transition text-base leading-snug wrap-break-word"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                  >
                    Instalacija klima uređaja
                  </Link>
                  <Link
                    href="/maintenance"
                    className="block px-3 min-[390px]:px-4 py-2 hover:text-blue-100 transition text-base leading-snug wrap-break-word"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                  >
                    Održavanje i servis
                  </Link>
                  <Link
                    href="/servicing"
                    className="block px-3 min-[390px]:px-4 py-2 hover:text-blue-100 transition text-base leading-snug wrap-break-word"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                  >
                    Popravka rashladnih uređaja (frižideri, zamrzivači)
                  </Link>
                  <Link
                    href="/servicing"
                    className="block px-3 min-[390px]:px-4 py-2 hover:text-blue-100 transition text-base leading-snug wrap-break-word"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                  >
                    Popravka električnih uređaja (veš mašine, šporeti)
                  </Link>
                  <Link
                    href="/heatingPump"
                    className="block px-3 min-[390px]:px-4 py-2 hover:text-blue-100 transition text-base leading-snug wrap-break-word"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                  >
                    Servisiranje toplotnih pumpi
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/pricing"
              className="block px-4 py-2 hover:text-blue-100 transition"
              onClick={() => {
                setMobileMenuOpen(false);
              }}
            >
              Cenovnik
            </Link>

            <Link
              href="/contact"
              className="block px-4 py-2 hover:text-blue-100 transition"
              onClick={() => {
                setMobileMenuOpen(false);
              }}
            >
              Kontakt
            </Link>
            <Link
              href="/serviceBooking"
              className="w-full bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition"
              onClick={() => {
                setMobileMenuOpen(false);
              }}
            >
              Zakažite termin
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
