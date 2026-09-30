import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Mail, Phone, MapPin, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f0f7fa] text-slate-600 text-sm pt-14 pb-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Col 1: ICEM Parent Branding & Chapter Info */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-12 w-40 sm:h-14 sm:w-48 flex-shrink-0">
                <Image
                  src="/icem-acm/Logo.png"
                  alt="Indira College of Engineering & Management (ICEM)"
                  fill
                  className="object-contain object-left"
                  unoptimized
                />
              </div>
            </Link>

            <div className="space-y-1.5 pt-1">
              <h4 className="text-[#003c84] font-bold text-sm">
                ICEM ACM Student Chapter
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
                A student-run technical society in the Department of Artificial Intelligence &amp; Data Science at Indira College of Engineering and Management (ICEM), Pune.
              </p>
            </div>
          </div>

          {/* Col 2: Explore */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[#003c84] font-bold text-xs uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/about" className="hover:text-[#278da4] transition">About Us</Link></li>
              <li><Link href="/events" className="hover:text-[#278da4] transition">Upcoming Events</Link></li>
              <li><Link href="/achievements" className="hover:text-[#278da4] transition">Achievements</Link></li>
              <li><Link href="/committee" className="hover:text-[#278da4] transition">Executive Team</Link></li>
              <li><Link href="/dashboard" className="hover:text-[#278da4] transition">Member Vault &amp; MoM</Link></li>
            </ul>
          </div>

          {/* Col 3: Get Involved */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[#003c84] font-bold text-xs uppercase tracking-wider">
              Get Involved
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/membership" className="hover:text-[#278da4] transition">Become a Member</Link></li>
              <li><Link href="/login" className="hover:text-[#278da4] transition">Member Portal Login</Link></li>
              <li>
                <a
                  href="https://indiraicem.ac.in/programs/ai-ds/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#278da4] inline-flex items-center gap-1 transition text-[#003c84] font-semibold"
                >
                  <span>Dept. of AI &amp; DS Portal</span>
                  <ExternalLink className="w-3 h-3 text-[#278da4]" />
                </a>
              </li>
              <li>
                <a
                  href="https://indiraicem.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#278da4] inline-flex items-center gap-1 transition"
                >
                  <span>ICEM Main Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.acm.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#278da4] inline-flex items-center gap-1 transition"
                >
                  <span>ACM.org</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[#003c84] font-bold text-xs uppercase tracking-wider">
              Chapter Contact Desk
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#278da4] flex-shrink-0 mt-0.5" />
                <span>Dept. of AI &amp; Data Science, 3rd Floor, ICEM Pune Campus, Parandwadi, Pune - 410507</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#278da4] flex-shrink-0" />
                <a href="mailto:acm.chapter@icem.ac.in" className="hover:text-[#278da4] transition">
                  acm.chapter@icem.ac.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#278da4] flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-[#278da4] transition">
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-300/70 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>© 2026 ICEM ACM Student Chapter. All rights reserved.</span>
          <span>Indira College of Engineering &amp; Management, Pune.</span>
        </div>
      </div>
    </footer>
  );
}
