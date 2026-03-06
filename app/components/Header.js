"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-linear-to-r from-blue-600 to-blue-800 text-white shadow-lg z-50 border-b border-blue-700">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 text-2xl font-bold hover:text-blue-100 transition tracking-tight"
          >
            <span className="text-3xl">❄️</span>
            <span>FrigoMark</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10 text-lg font-medium">
            <Link href="#services" className="hover:text-blue-100 transition">
              Services
            </Link>
            <Link href="#pricing" className="hover:text-blue-100 transition">
              Pricing
            </Link>
            <Link
              href="#testimonials"
              className="hover:text-blue-100 transition"
            >
              Testimonials
            </Link>
            <Link href="#contact" className="hover:text-blue-100 transition">
              Contact
            </Link>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition shadow-md hover:shadow-lg">
              Book Service
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
          <nav className="md:hidden pb-6 space-y-4 border-t border-blue-700 pt-4 text-lg font-medium">
            <a
              href="#services"
              className="block py-2 hover:text-blue-100 transition"
            >
              Services
            </a>
            <a
              href="#pricing"
              className="block py-2 hover:text-blue-100 transition"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="block py-2 hover:text-blue-100 transition"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="block py-2 hover:text-blue-100 transition"
            >
              Contact
            </a>
            <button className="w-full bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition">
              Book Service
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
