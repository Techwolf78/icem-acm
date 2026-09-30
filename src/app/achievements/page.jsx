import React from "react";
import { Award, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Achievements | ICEM ACM Student Chapter",
};

export default function AchievementsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h1 className="text-2xl font-bold text-[#003c84] mb-2">Student Achievements &amp; Publications</h1>
        <p className="text-xs sm:text-sm text-slate-600">
          Recognizing the competitive titles, symposium papers, and open-source contributions of our members.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { tag: "Hackathon Win", title: "1st Place — HackICEM 2026", cohort: "Final Year AI & DS", desc: "Team 'Verdant' won the 24-hr hackathon with an edge AI waste-sorting assistant." },
          { tag: "Publication", title: "Student Paper at Symposium", cohort: "Third Year AI & DS", desc: "Research paper on intrusion detection accepted at an ACM student symposium." },
          { tag: "Competition", title: "Runner-Up — DataViz Challenge", cohort: "Second Year AI & DS", desc: "2-member team placed 2nd among 18 teams for air-quality analytics." },
          { tag: "Internship", title: "Research Internship Placement", cohort: "Alumnus (Batch 2026)", desc: "Member secured summer research internship citing chapter mentorship." },
          { tag: "Open Source", title: "Boilerplate Kit Adopted", cohort: "Third Year AI & DS", desc: "FastAPI/React template adopted as official chapter boilerplate." },
          { tag: "National Rank", title: "Top 10 — Coding Marathon", cohort: "Final Year AI & DS", desc: "Ranked top 10 nationally in competitive programming contest." },
        ].map((item, idx) => (
          <div key={idx} className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-teal-100 text-teal-800">
                  {item.tag}
                </span>
                <span className="text-xs text-slate-400">{item.cohort}</span>
              </div>
              <h2 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h2>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-100 text-xs text-emerald-700 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Verified Milestone
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
