import React from "react";
import { Mail, Phone, MapPin, Clock, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Contact | ICEM ACM Student Chapter",
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h1 className="text-2xl font-bold text-[#003c84] mb-2">Get in Touch</h1>
        <p className="text-xs sm:text-sm text-slate-600">
          Questions regarding student membership, event collaborations, or symposium publications? Reach out below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-[#003c84]">Chapter Secretariat Desk</h2>
          <div className="space-y-3 text-xs sm:text-sm text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <p>
              <strong className="text-slate-900 block">Office Location:</strong>
              Dept. of Artificial Intelligence &amp; Data Science, 3rd Floor, ICEM, Parandwadi, Pune – 410506.
            </p>
            <p>
              <strong className="text-slate-900 block">Email Address:</strong>
              <a href="mailto:acm.chapter@icem.ac.in" className="text-[#003c84] font-semibold hover:underline">
                acm.chapter@icem.ac.in
              </a>
            </p>
            <p>
              <strong className="text-slate-900 block">Helpdesk Contact:</strong>
              +91 98765 43210
            </p>
            <p>
              <strong className="text-slate-900 block">Office Hours:</strong>
              Monday to Friday, 2:00 PM – 5:00 PM
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <h2 className="text-lg font-bold text-[#003c84]">Official ACM Global Portals</h2>
          {[
            { name: "ACM.org Global Home", desc: "Global Association for Computing Machinery portal.", url: "https://www.acm.org" },
            { name: "ACM Digital Library", desc: "Full-text database of computing research literature.", url: "https://dl.acm.org" },
            { name: "ACM Student Membership", desc: "Individual global student membership sign-up.", url: "https://www.acm.org/membership/student" },
            { name: "ACM Special Interest Groups", desc: "Technical communities (SIGAI, SIGGRAPH, SIGKDD).", url: "https://www.acm.org/special-interest-groups" },
          ].map((res, i) => (
            <a
              key={i}
              href={res.url}
              target="_blank"
              rel="noreferrer"
              className="block p-3 rounded-xl border border-slate-200 hover:border-[#003c84] hover:bg-slate-50 transition"
            >
              <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-900">
                <span>{res.name}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </div>
              <p className="text-xs text-slate-500 mt-0.5">{res.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
