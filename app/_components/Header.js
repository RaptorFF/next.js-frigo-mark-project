"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full text-white z-50 transition-all duration-500
        ${
          isTop
            ? mobileMenuOpen
              ? "bg-linear-to-r from-blue-600 to-blue-800 header-solid border-b border-blue-700"
              : "bg-transparent header-transparent border-b border-transparent"
            : "bg-linear-to-r from-blue-600 to-blue-800 header-solid border-b border-blue-700 fade-in-up header-blur-shadow"
        }`}
    >
      <div className="mx-auto">
        <div className="flex justify-between items-center h-20 px-4 md:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 text-2xl font-bold hover:text-blue-100 transition tracking-tight"
          >
            <span className="text-3xl p-1">❄️</span>
            <span>FrigoMark</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 text-lg font-medium">
            {/* Usluge with Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button className="hover:text-blue-100 transition px-4 py-2 flex items-center gap-2">
                Usluge
                <sub className="text-xs">▼</sub>
              </button>

              {/* Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute left-0 mt-0 w-56 bg-white text-blue-900 rounded-lg shadow-2xl py-2 z-50 animate-in fade-in duration-200">
                  <Link
                    href="/#services"
                    className="block px-6 py-3 hover:bg-blue-50 transition border-b border-blue-100"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    Instalacija klima uređaja
                  </Link>
                  <Link
                    href="/#services"
                    className="block px-6 py-3 hover:bg-blue-50 transition border-b border-blue-100"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    Održavanje i servis
                  </Link>
                  <Link
                    href="/#services"
                    className="block px-6 py-3 hover:bg-blue-50 transition border-b border-blue-100"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    Čišćenje klima uređaja
                  </Link>
                  <Link
                    href="/#services"
                    className="block px-6 py-3 hover:bg-blue-50 transition"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    Hitne popravke
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/#pricing"
              className="hover:text-blue-100 transition px-4 py-2"
            >
              Cenovnik
            </Link>
            <Link
              href="/#testimonials"
              className="hover:text-blue-100 transition px-4 py-2"
            >
              Mišljenja klijenata
            </Link>
            <Link
              href="/contact"
              className="hover:text-blue-100 transition px-4 py-2"
            >
              Kontakt
            </Link>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition shadow-md hover:shadow-lg">
              Zakažite termin
            </button>
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
              href="/#services"
              className="block px-4 py-2 hover:text-blue-100 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Usluge
            </Link>
            <Link
              href="/#pricing"
              className="block px-4 py-2 hover:text-blue-100 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cenovnik
            </Link>
            <Link
              href="/#testimonials"
              className="block px-4 py-2 hover:text-blue-100 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Mišljenja Klijenata
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 hover:text-blue-100 transition"
            >
              Kontakt
            </Link>
            <button className="w-full bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition">
              Zakažite termin
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
