"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  User,
  Zap,
  GraduationCap,
  ArrowLeft,
  Eye,
  EyeOff,
  CheckCircle2,
  Lock,
  Mail,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  AlertCircle,
  HelpCircle,
} from "lucide-react";

function GoogleIcon() {
  return (
    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

function LoginFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Tab: 'student' | 'member' | 'register'
  const [activeTab, setActiveTab] = useState("student");

  // Form fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [academicYear, setAcademicYear] = useState("");
  const [agreedCodeOfEthics, setAgreedCodeOfEthics] = useState(true);
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  // Status & Notification
  const [toastMessage, setToastMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [forgotPasswordNotice, setForgotPasswordNotice] = useState(false);

  // Sync tab from URL ?tab=...
  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam === "register" || tabParam === "membership") {
      setActiveTab("register");
    } else if (tabParam === "member" || tabParam === "leadership") {
      setActiveTab("member");
    } else if (tabParam === "student") {
      setActiveTab("student");
    }
  }, [searchParams]);

  // Handle Tab Switch
  const switchTab = (tab) => {
    setActiveTab(tab);
    setToastMessage("");
    setForgotPasswordNotice(false);
  };

  // 1-Click Fast Logins
  const handleFastLogin = (role) => {
    setIsSubmitting(true);
    if (role === "student") {
      setFullName("Aditya Sharma");
      setEmail("aditya.sharma@indiraicem.ac.in");
      setPassword("demoStudent2026");
      setToastMessage("Signed in successfully as Student User (View Only)");
      try {
        localStorage.setItem(
          "icem_acm_session",
          JSON.stringify({
            name: "Aditya Sharma",
            email: "aditya.sharma@indiraicem.ac.in",
            role: "student",
            year: "Third Year (TE)",
          })
        );
      } catch (e) {}
    } else {
      setFullName("Prof. Sneha Patil (Chapter Sponsor)");
      setEmail("acm.chapter@indiraicem.ac.in");
      setPassword("demoMember2026");
      setToastMessage("Signed in successfully as Chapter Member (Upload Mode)");
      try {
        localStorage.setItem(
          "icem_acm_session",
          JSON.stringify({
            name: "Prof. Sneha Patil",
            email: "acm.chapter@indiraicem.ac.in",
            role: "member",
            title: "Faculty Sponsor & Chapter Lead",
          })
        );
      } catch (e) {}
    }

    setTimeout(() => {
      setIsSubmitting(false);
      router.push("/dashboard");
    }, 900);
  };

  // Handle Regular Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (activeTab === "register") {
      setToastMessage("Registration completed successfully! Welcome to ICEM ACM Chapter.");
      try {
        localStorage.setItem(
          "icem_acm_session",
          JSON.stringify({
            name: fullName || "New Student Member",
            email: email || "member@indiraicem.ac.in",
            role: "student",
            year: academicYear || "First Year (FE)",
          })
        );
      } catch (e) {}
    } else if (activeTab === "member") {
      setToastMessage("Signed in successfully as Chapter Member (Upload Mode)");
      try {
        localStorage.setItem(
          "icem_acm_session",
          JSON.stringify({
            name: fullName || "Chapter Member",
            email: email || "member@indiraicem.ac.in",
            role: "member",
          })
        );
      } catch (e) {}
    } else {
      setToastMessage("Signed in successfully");
      try {
        localStorage.setItem(
          "icem_acm_session",
          JSON.stringify({
            name: fullName || "Student User",
            email: email || "student@indiraicem.ac.in",
            role: "student",
          })
        );
      } catch (e) {}
    }

    setTimeout(() => {
      setIsSubmitting(false);
      router.push("/dashboard");
    }, 900);
  };

  // Google Single Sign-On Simulation
  const handleGoogleAuth = () => {
    setIsSubmitting(true);
    const googleName = activeTab === "member" ? "Sneha Patil (Indira Google)" : "Aditya Sharma (Indira Google)";
    const googleEmail = activeTab === "member" ? "sneha.patil@indiraicem.ac.in" : "aditya.sharma@indiraicem.ac.in";

    setToastMessage(`Signed in successfully with Google (${googleEmail})`);
    try {
      localStorage.setItem(
        "icem_acm_session",
        JSON.stringify({
          name: googleName,
          email: googleEmail,
          role: activeTab === "member" ? "member" : "student",
        })
      );
    } catch (e) {}

    setTimeout(() => {
      setIsSubmitting(false);
      router.push("/dashboard");
    }, 900);
  };

  return (
    <div className="min-h-[85vh] bg-[#f8fafc] py-10 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      <div className="max-w-xl mx-auto w-full space-y-4">
        
        {/* Top Breadcrumb / Back Link */}
        <div className="flex items-center justify-between px-1">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#003c84] hover:text-[#278da4] transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>← Chapter Website</span>
          </Link>
          <span className="text-[11px] font-semibold text-slate-500 hidden sm:inline">
            Dept. of AI &amp; Data Science • ICEM
          </span>
        </div>

        {/* Floating Toast Message */}
        {toastMessage && (
          <div className="p-3.5 rounded-xl bg-emerald-600 text-white shadow-lg flex items-center justify-between animate-fadeIn text-xs font-semibold">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
              <span>{toastMessage}</span>
            </div>
            <span className="text-[10px] bg-emerald-700/60 px-2 py-0.5 rounded">Redirecting...</span>
          </div>
        )}

        {/* Forgot Password Help Toast */}
        {forgotPasswordNotice && (
          <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 shadow-sm flex items-start gap-2.5 text-xs">
            <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-bold">Password Assistance for ICEM Students</p>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                Please contact the chapter desk at{" "}
                <a href="mailto:acm.chapter@icem.ac.in" className="underline font-semibold text-[#003c84]">
                  acm.chapter@icem.ac.in
                </a>{" "}
                or visit the AI &amp; DS Dept. 3rd Floor Secretariat with your College PRN ID.
              </p>
            </div>
          </div>
        )}

        {/* Main Card Container */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
          
          {/* 3-Tab Selector Row */}
          <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50/70 p-1.5 gap-1.5 text-xs font-bold">
            <button
              type="button"
              onClick={() => switchTab("student")}
              className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl transition cursor-pointer ${
                activeTab === "student"
                  ? "bg-white text-[#003c84] shadow-xs border border-slate-200/80"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
              }`}
            >
              <User className="w-3.5 h-3.5 text-[#003c84]" />
              <span className="truncate">Student Login</span>
            </button>

            <button
              type="button"
              onClick={() => switchTab("member")}
              className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl transition cursor-pointer ${
                activeTab === "member"
                  ? "bg-white text-[#003c84] shadow-xs border border-slate-200/80"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span className="truncate">Chapter Member</span>
            </button>

            <button
              type="button"
              onClick={() => switchTab("register")}
              className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl transition cursor-pointer ${
                activeTab === "register"
                  ? "bg-[#003c84] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span className="truncate">Join Chapter</span>
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Header Content per Tab */}
            {activeTab === "student" && (
              <div className="space-y-1.5 text-center sm:text-left">
                <span className="inline-block text-[10.5px] font-bold uppercase tracking-wider bg-blue-50 text-[#003c84] border border-blue-100 px-2.5 py-0.5 rounded-full">
                  Student Portal
                </span>
                <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Student User Sign In
                </h1>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  Sign in to browse department circulars, register for upcoming workshops, and download study resources.
                </p>
              </div>
            )}

            {activeTab === "member" && (
              <div className="space-y-1.5 text-center sm:text-left">
                <span className="inline-block text-[10.5px] font-bold uppercase tracking-wider bg-amber-50 text-amber-900 border border-amber-200 px-2.5 py-0.5 rounded-full">
                  Member Portal
                </span>
                <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Chapter Member &amp; Leadership Login
                </h1>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  Authorized login for Chapter Office Bearers &amp; Committee to upload content, publish circulars, and broadcast events.
                </p>
              </div>
            )}

            {activeTab === "register" && (
              <div className="space-y-1.5 text-center sm:text-left">
                <span className="inline-block text-[10.5px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  Student Membership
                </span>
                <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Join the Chapter
                </h1>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  Membership is 100% free for all AI &amp; Data Science students. No prior experience needed.
                </p>
              </div>
            )}

            {/* Social Google Button */}
            <div>
              <button
                type="button"
                onClick={handleGoogleAuth}
                disabled={isSubmitting}
                className="w-full flex items-center justify-center py-2.5 px-4 rounded-xl border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-xs sm:text-[13px] font-bold text-slate-700 shadow-xs transition cursor-pointer"
              >
                <GoogleIcon />
                <span>
                  {activeTab === "register" ? "Sign up with Campus Google" : "Continue with Google"}
                </span>
              </button>

              <div className="relative my-5">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200"></div>
                </div>
                <div className="relative flex justify-center text-[11px] uppercase tracking-wider">
                  <span className="bg-white px-3 text-slate-400 font-semibold">
                    {activeTab === "register" ? "or register with your details" : "or sign in with credentials"}
                  </span>
                </div>
              </div>
            </div>

            {/* Main Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-[13px]">
              
              {/* Full Name */}
              <div>
                <label className="font-bold text-slate-700 block mb-1.5">
                  Full Name {activeTab !== "register" && <span className="text-slate-400 font-normal">(Optional for demo)</span>}
                </label>
                <input
                  type="text"
                  placeholder={
                    activeTab === "member"
                      ? "e.g. Sneha Patil"
                      : activeTab === "register"
                      ? "e.g. Rohan Kulkarni"
                      : "e.g. Aditya Sharma"
                  }
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#003c84]/20 focus:border-[#003c84] transition"
                  required={activeTab === "register"}
                />
              </div>

              {/* Email */}
              <div>
                <label className="font-bold text-slate-700 block mb-1.5">
                  {activeTab === "register" ? "College Email Address" : "Email address (optional)"}
                </label>
                <input
                  type="email"
                  placeholder={
                    activeTab === "member"
                      ? "acm.chapter@indiraicem.ac.in"
                      : "student@indiraicem.ac.in"
                  }
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#003c84]/20 focus:border-[#003c84] transition"
                  required={activeTab === "register"}
                />
              </div>

              {/* Academic Year (Only for Registration) */}
              {activeTab === "register" && (
                <div>
                  <label className="font-bold text-slate-700 block mb-1.5">
                    Academic Year (AI &amp; Data Science)
                  </label>
                  <select
                    value={academicYear}
                    onChange={(e) => setAcademicYear(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#003c84]/20 focus:border-[#003c84] transition bg-white text-slate-700 font-medium"
                  >
                    <option value="">Select your current year</option>
                    <option value="First Year (FE)">First Year (FE)</option>
                    <option value="Second Year (SE)">Second Year (SE)</option>
                    <option value="Third Year (TE)">Third Year (TE)</option>
                    <option value="Final Year (BE)">Final Year (BE)</option>
                  </select>
                </div>
              )}

              {/* Password */}
              <div>
                <label className="font-bold text-slate-700 block mb-1.5">
                  {activeTab === "register" ? "Create Password" : "Password"}
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3.5 py-2.5 pr-10 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#003c84]/20 focus:border-[#003c84] transition font-medium"
                    required={activeTab === "register"}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                    title={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Fast 1-Click Test Logins (Visible on Login Tabs) */}
              {activeTab !== "register" && (
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-700 flex items-center gap-1.5 text-xs">
                      <Sparkles className="w-3.5 h-3.5 text-[#003c84]" />
                      <span>Fast 1-Click Test Logins</span>
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium hidden sm:inline">
                      Instant sandbox access
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => handleFastLogin("student")}
                      disabled={isSubmitting}
                      className="py-2 px-2.5 rounded-lg bg-white hover:bg-blue-50/70 border border-slate-200 hover:border-blue-300 text-[11px] font-bold text-slate-800 transition flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer"
                    >
                      <User className="w-3.5 h-3.5 text-[#003c84]" />
                      <span>Student (View Only)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleFastLogin("member")}
                      disabled={isSubmitting}
                      className="py-2 px-2.5 rounded-lg bg-white hover:bg-amber-50/70 border border-slate-200 hover:border-amber-300 text-[11px] font-bold text-slate-800 transition flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer"
                    >
                      <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      <span>Member (Upload Mode)</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Options Row (Remember Me / Forgot Password / Ethics) */}
              {activeTab !== "register" ? (
                <div className="flex items-center justify-between text-xs text-slate-600 pt-1">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="rounded border-slate-300 text-[#003c84] focus:ring-[#003c84] w-3.5 h-3.5"
                    />
                    <span className="font-medium text-slate-700">Remember me</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setForgotPasswordNotice(true)}
                    className="font-bold text-[#003c84] hover:text-[#278da4] hover:underline transition"
                  >
                    Forgot password?
                  </button>
                </div>
              ) : (
                <div className="pt-1 space-y-2">
                  <label className="flex items-start gap-2.5 cursor-pointer select-none text-xs text-slate-700">
                    <input
                      type="checkbox"
                      checked={agreedCodeOfEthics}
                      onChange={(e) => setAgreedCodeOfEthics(e.target.checked)}
                      className="rounded border-slate-300 text-[#003c84] focus:ring-[#003c84] w-4 h-4 mt-0.5"
                      required
                    />
                    <span className="leading-snug">
                      I agree to follow the{" "}
                      <a
                        href="https://www.acm.org/code-of-ethics"
                        target="_blank"
                        rel="noreferrer"
                        className="font-bold text-[#003c84] underline"
                      >
                        ACM Code of Ethics
                      </a>{" "}
                      and uphold collegiate academic integrity.
                    </span>
                  </label>
                </div>
              )}

              {/* Action Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-xl bg-[#003c84] hover:bg-[#002d66] text-white font-black text-xs sm:text-sm tracking-wide transition shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Processing authentication...</span>
                    </div>
                  ) : activeTab === "register" ? (
                    <span>Complete Free Membership →</span>
                  ) : activeTab === "member" ? (
                    <span>Sign In as Chapter Member (Upload Mode) →</span>
                  ) : (
                    <span>Sign In as Student User (View Only) →</span>
                  )}
                </button>
              </div>
            </form>

            {/* Bottom Toggle Prompt */}
            <div className="text-center pt-3 border-t border-slate-100 text-xs text-slate-500">
              {activeTab === "register" ? (
                <div>
                  Already registered as a member?{" "}
                  <button
                    type="button"
                    onClick={() => switchTab("student")}
                    className="font-bold text-[#003c84] hover:text-[#278da4] hover:underline ml-1 cursor-pointer"
                  >
                    Sign In to your account
                  </button>
                </div>
              ) : (
                <div>
                  Not an ACM member yet?{" "}
                  <button
                    type="button"
                    onClick={() => switchTab("register")}
                    className="font-bold text-[#003c84] hover:text-[#278da4] hover:underline ml-1 cursor-pointer"
                  >
                    Join the Chapter for free
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Security & Affiliation Footnote */}
        <div className="text-center space-y-1 text-[11px] text-slate-500 pt-2">
          <p className="flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Encrypted Authentication • Indira College of Engineering &amp; Management</span>
          </p>
          <p>
            Chapter Secretariat: Dept. of AI &amp; Data Science, 3rd Floor •{" "}
            <a href="mailto:acm.chapter@icem.ac.in" className="text-[#003c84] font-semibold hover:underline">
              acm.chapter@icem.ac.in
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[70vh] flex items-center justify-center">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
            <div className="w-4 h-4 border-2 border-[#003c84] border-t-transparent rounded-full animate-spin"></div>
            <span>Loading Chapter Authentication...</span>
          </div>
        </div>
      }
    >
      <LoginFormContent />
    </Suspense>
  );
}
