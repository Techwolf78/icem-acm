import React from "react";
import Link from "next/link";
import { Shield, CheckCircle2, ExternalLink, ArrowRight, UserPlus, Globe } from "lucide-react";

export const metadata = {
  title: "Membership | ICEM ACM Student Chapter",
  description: "Join the ICEM ACM Student Chapter for free. Open to all students in the Department of AI & Data Science.",
};

export default function MembershipPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-[#003c84] border border-blue-100 px-3 py-1 rounded-full">
          Student Chapter Admission
        </span>
        <h1 className="text-2xl sm:text-3xl font-black text-[#003c84]">ACM Student Membership</h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          100% Free Chapter Membership for all AI &amp; Data Science students at Indira College of Engineering &amp; Management (ICEM).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Tier 1: Free Local ICEM Chapter Membership */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-[#003c84] shadow-sm flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-[#003c84] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
            Most Popular
          </div>

          <div>
            <span className="text-[10.5px] font-bold uppercase bg-blue-50 text-[#003c84] border border-blue-100 px-2.5 py-0.5 rounded">
              Universal Tier • 100% Free
            </span>
            <h2 className="text-xl font-bold text-slate-900 mt-2.5 mb-1">ICEM ACM Chapter Membership</h2>
            <p className="text-xs text-slate-600 leading-relaxed mb-5">
              Complimentary for all enrolled AI &amp; DS students. Access workshops, hackathon team formation, peer code reviews, and mentorship.
            </p>
            
            <ul className="space-y-2.5 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Priority workshop entry &amp; lab workstation seats</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Participation in annual 36-hour hackathons</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>1-on-1 senior capstone &amp; research guidance</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Verifiable digital certificates with cryptographic hashes</span>
              </li>
            </ul>
          </div>

          <div className="pt-6 space-y-2">
            <Link
              href="/login?tab=register"
              className="w-full text-center py-3 px-4 rounded-xl bg-[#003c84] hover:bg-[#002d66] text-white font-black text-xs transition flex items-center justify-center gap-1.5 shadow-sm"
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>Register for Free Membership Online →</span>
            </Link>
            <p className="text-center text-[11px] text-slate-500">
              Takes less than 1 minute • Immediate access to member vault
            </p>
          </div>
        </div>

        {/* Tier 2: International ACM.org Tier */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-[10.5px] font-bold uppercase bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded">
              International Tier (Optional)
            </span>
            <h2 className="text-xl font-bold text-slate-900 mt-2.5 mb-1">ACM Global Student Membership</h2>
            <p className="text-xs text-slate-600 leading-relaxed mb-5">
              Individual international membership directly through acm.org with complete worldwide Digital Library access.
            </p>

            <ul className="space-y-2.5 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>Full ACM Digital Library research access (dl.acm.org)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>ACM Special Interest Group (SIG) global affiliations</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>Global Student Research Competition eligibility</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>ACM international career center &amp; @acm.org email alias</span>
              </li>
            </ul>
          </div>

          <div className="pt-6">
            <a
              href="https://www.acm.org/membership/student"
              target="_blank"
              rel="noreferrer"
              className="block text-center py-3 px-4 rounded-xl bg-slate-800 text-white font-bold text-xs hover:bg-slate-900 transition flex items-center justify-center gap-1.5"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Visit ACM Global Portal (acm.org)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
