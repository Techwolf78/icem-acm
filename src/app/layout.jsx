import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "ICEM ACM Student Chapter | Department of AI & Data Science",
  description: "Official portal of the ICEM ACM Student Chapter, Department of AI & Data Science, Indira College of Engineering and Management (ICEM), Pune.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#003c84] selection:text-white" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
