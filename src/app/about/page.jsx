import React from "react";
import Image from "next/image";
import { Globe, Sparkles, Terminal, CheckCircle2, Shield } from "lucide-react";

export const metadata = {
  title: "About | ICEM ACM Student Chapter",
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
        <div className="max-w-3xl space-y-3">
          <div className="inline-block text-xs font-bold uppercase text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded border border-teal-100">
            About the Chapter
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#003c84]">
            ICEM ACM Student Chapter
          </h1>
          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
            The ICEM Student Chapter of the Association for Computing Machinery (ACM) is the official student body of the Department of Artificial Intelligence &amp; Data Science at Indira College of Engineering and Management (ICEM), Pune.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-teal-600" />
            <h2 className="text-lg font-bold text-[#003c84]">Our Vision</h2>
          </div>
          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
            <strong>Building the next generation of computing practitioners:</strong> To cultivate a thriving student community where curiosity is met with mentorship, toolsets, and platforms to turn ideas into working systems.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-teal-100 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Terminal className="w-5 h-5 text-teal-700" />
            <h2 className="text-lg font-bold text-teal-800">Our Mission</h2>
          </div>
          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
            <strong>Learn by building, teach by mentoring:</strong> To provide consistent, high-standard technical bootcamps, hackathons, and research circles while fostering peer mentorship and global ACM engagement.
          </p>
        </div>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-[#003c84] mb-4">Six Core Chapter Objectives</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { num: "01", title: "Applied Skill Building", desc: "Hands-on bootcamps across ML, Full-Stack, Cloud (AWS), and DSA." },
            { num: "02", title: "Competitive Exposure", desc: "Organizing 24-hr/36-hr hackathons, coding contests, and symposiums." },
            { num: "03", title: "Research Culture", desc: "Student paper-reading circle and publishing at research symposiums." },
            { num: "04", title: "Peer Mentorship", desc: "Pairing seniors with juniors for project builds and placement prep." },
            { num: "05", title: "Industry & Alumni Ties", desc: "Guest sessions with practitioners, mock interviews, and referrals." },
            { num: "06", title: "Global ACM Engagement", desc: "ACM Student Membership, Digital Library, and SIG participation." },
          ].map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-slate-100 bg-slate-50/70 flex items-start gap-3">
              <span className="w-7 h-7 rounded bg-[#003c84] text-white flex items-center justify-center font-bold text-xs font-mono flex-shrink-0">
                {item.num}
              </span>
              <div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm">{item.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
