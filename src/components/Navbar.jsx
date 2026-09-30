"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Shield, Menu, X, LogIn, ChevronRight, ExternalLink } from "lucide-react";
import logoPic from "../../public/Logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Committee", href: "/committee" },
    { label: "Events & Hackathons", href: "/events" },
    { label: "Membership", href: "/membership" },
    { label: "Achievements", href: "/achievements" },
    { label: "Member Vault", href: "/dashboard" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200/90 shadow-2xs">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[72px] lg:h-[84px] gap-4">
          
          {/* Left: Official ICEM Logo + Chapter Co-Branding */}
          <Link href="/" className="flex items-center gap-3.5 py-2 flex-shrink-0 group">
            <div className="relative h-12 w-44 sm:h-14 sm:w-56 md:h-16 md:w-64 flex-shrink-0">
              <Image
                src={logoPic}
                alt="Indira College of Engineering & Management"
                fill
                className="object-contain object-left transition-opacity group-hover:opacity-95"
                priority
              />
            </div>

            <div className="h-10 w-[1px] bg-slate-200 hidden md:block"></div>

            <div className="hidden md:flex flex-col justify-center">
              <span className="font-extrabold text-xs sm:text-[13px] text-[#003c84] tracking-tight leading-tight">
                ACM Student Chapter
              </span>
              <span className="text-[10px] text-slate-500 font-semibold tracking-tight mt-0.5">
                Dept. of AI &amp; Data Science
              </span>
            </div>
          </Link>

          {/* Right: 2-Tier Layout Inspired by indiraicem.ac.in */}
          <div className="hidden xl:flex flex-col items-end py-1 flex-1 max-w-4xl">
            
            {/* Tier 1: Micro Utility Row */}
            <div className="flex items-center justify-end gap-2 text-[11.5px] text-slate-600 font-medium pb-1.5 border-b border-slate-100 w-full">
              <a
                href="https://indiraicem.ac.in/programs/ai-ds/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#003c84] hover:text-[#278da4] font-semibold transition flex items-center gap-0.5"
              >
                <span>Dept. of AI &amp; DS</span>
                <ExternalLink className="w-2.5 h-2.5 text-[#278da4]" />
              </a>
              <span className="text-slate-300">|</span>
              <a
                href="https://dl.acm.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#003c84] transition"
              >
                ACM Digital Library
              </a>
              <span className="text-slate-300">|</span>
              <a
                href="https://www.acm.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#003c84] transition"
              >
                ACM.org
              </a>
              <span className="text-slate-300">|</span>
              <a
                href="https://indiraicem.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#003c84] flex items-center gap-0.5 transition"
              >
                <span>ICEM Portal</span>
                <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
              </a>
              <span className="text-slate-300">|</span>
              <Link
                href="/login"
                className="bg-[#003c84] hover:bg-[#002d66] text-white px-2.5 py-0.5 rounded text-[11px] font-semibold transition"
              >
                Sign In
              </Link>
              
              {/* Right-Docked Solid Button (like indiraicem.ac.in "Enquire Now") */}
              <Link
                href="/membership"
                className="bg-[#003c84] hover:bg-[#278da4] text-white px-3.5 py-1 font-bold text-xs tracking-wide uppercase transition-colors rounded-sm ml-1"
              >
                Join Chapter
              </Link>
            </div>

            {/* Tier 2: Main Academic Navigation Row */}
            <nav className="flex items-center gap-5 xl:gap-7 pt-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-[13.5px] font-bold tracking-tight transition-colors duration-150 py-1 relative ${
                      isActive
                        ? "text-[#003c84] border-b-2 border-[#003c84]"
                        : "text-slate-800 hover:text-[#003c84]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Medium Screen (Tablet) Actions */}
          <div className="hidden md:flex xl:hidden items-center gap-2">
            <Link
              href="/login"
              className="px-3 py-1.5 rounded text-xs font-semibold text-slate-700 hover:text-[#003c84] hover:bg-slate-50 transition border border-slate-200"
            >
              Sign In
            </Link>
            <Link
              href="/membership"
              className="bg-[#003c84] hover:bg-[#002d66] text-white px-3.5 py-1.5 rounded text-xs font-bold transition"
            >
              Join Chapter
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition border border-slate-200"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6 text-[#003c84]" /> : <Menu className="w-6 h-6 text-[#003c84]" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-5 py-4 space-y-3 animate-in fade-in-0 duration-200 shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <p className="text-xs font-bold text-[#003c84]">ICEM ACM Student Chapter</p>
              <p className="text-[10px] text-slate-500">Department of AI &amp; Data Science</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-1 pt-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold flex items-center justify-between transition ${
                    isActive
                      ? "bg-[#003c84]/10 text-[#003c84] font-bold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-3 h-3 text-slate-400" />
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 flex gap-2">
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="flex-1 text-center py-2.5 rounded-lg border border-slate-200 text-slate-800 text-xs font-semibold hover:bg-slate-50"
            >
              Sign In
            </Link>
            <Link
              href="/membership"
              onClick={() => setIsOpen(false)}
              className="flex-1 text-center py-2.5 rounded-lg bg-[#003c84] text-white text-xs font-bold shadow-xs"
            >
              Join Chapter (Free)
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
