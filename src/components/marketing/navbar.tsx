"use client";

import { cn } from "@/functions";
import Link from "next/link";
import { useEffect, useState } from "react";
import MobileMenu from "./mobile-menu";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="relative h-full">
      {/* Background strip */}
      <div className="z-[99] fixed pointer-events-none inset-x-0 h-[88px] bg-[rgba(10,10,10,0.8)] backdrop-blur-sm [mask:linear-gradient(to_bottom,#000_20%,transparent_calc(100%-20%))]" />

      <header className="fixed top-4 inset-x-0 z-[100]">
        {/* Full width with horizontal padding */}
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="backdrop-blur-lg rounded-xl p-3 border border-[rgba(124,124,124,0.2)] flex items-center justify-between gap-8 max-w-[1280px] mx-auto">
            {/* Logo */}
            <Link href="/" className="text-lg font-semibold text-gray-200">
              DEV AI
            </Link>

            {/* Desktop Links */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
              <a href="/" className="hover:text-white transition px-3 py-2 rounded-md">
                Home
              </a>
              <a href="#benefits" className="hover:text-white transition px-3 py-2 rounded-md">
                Services
              </a>
              <a href="#cta" className="hover:text-white transition px-3 py-2 rounded-md">
                Contact
              </a>
            </nav>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-200 p-2 rounded-md hover:bg-gray-700 transition"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Navbar;
