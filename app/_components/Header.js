"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
  const desktopNavItemClass = `hover:text-blue-100 transition ${
    isCompact ? "px-3 py-1.5" : "px-4 py-2"
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
          className={`flex justify-between items-center px-4 md:px-8 transition-all duration-500 ${
            isCompact ? "h-14 md:h-15" : "h-20"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className={`flex items-center space-x-3 font-bold hover:text-blue-100 transition-all duration-500 tracking-tight ${
              isCompact ? "text-lg md:text-xl" : "text-2xl"
            }`}
          >
            <span
              className={`p-1 transition-all duration-500 ${
                isCompact ? "text-xl md:text-2xl" : "text-3xl"
              }`}
            >
              ❄️
            </span>
            <span>Frigomark</span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className={`hidden md:flex items-center space-x-1 font-medium transition-all duration-500 ${
              isCompact ? "text-base" : "text-lg"
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
                    Popravka rashladnih uređaja(frižideri, zamrzivači...)
                  </Link>
                  <Link
                    href="/servicing"
                    className="block px-6 py-3 hover:bg-blue-50 transition border-b border-blue-100"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    Popravka električnih uređaja(veš mašine, šporeti...)
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
                isCompact ? "px-6 py-2" : "px-8 py-3"
              }`}
            >
              Zakažite termin
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
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
          <nav className="md:hidden pb-6 space-y-4 border-t border-blue-700 pt-4 text-lg font-medium bg-linear-to-r from-blue-600 to-blue-800">
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
                <div className="pl-6 mt-1 space-y-1 border-l border-blue-400 ml-4">
                  <Link
                    href="/installation"
                    className="block px-4 py-2 hover:text-blue-100 transition text-base"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                  >
                    Instalacija klima uređaja
                  </Link>
                  <Link
                    href="/maintenance"
                    className="block px-4 py-2 hover:text-blue-100 transition text-base"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                  >
                    Održavanje i servis
                  </Link>
                  <Link
                    href="/servicing"
                    className="block px-4 py-2 hover:text-blue-100 transition text-base"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                  >
                    Popravka rashladnih uređaja (frižideri, zamrzivači)
                  </Link>
                  <Link
                    href="/servicing"
                    className="block px-4 py-2 hover:text-blue-100 transition text-base"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                  >
                    Popravka električnih uređaja (veš mašine, šporeti)
                  </Link>
                  <Link
                    href="/heatingPump"
                    className="block px-4 py-2 hover:text-blue-100 transition text-base"
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
