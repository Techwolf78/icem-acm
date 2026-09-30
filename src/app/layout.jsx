import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "ICEM ACM Student Chapter | Department of AI & Data Science",
  description: "Official portal of the ICEM ACM Student Chapter, Department of AI & Data Science, Indira College of Engineering and Management (ICEM), Pune.",
  icons: {
    icon: "/icem-acm/favicon.ico",
    shortcut: "/icem-acm/favicon.ico",
    apple: "/icem-acm/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icem-acm/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/icem-acm/favicon.ico" />
      </head>
      <body className="flex flex-col min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#003c84] selection:text-white" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
