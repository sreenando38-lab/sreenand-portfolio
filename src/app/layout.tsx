import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sreenand O | AI & Machine Learning Engineer",
  description: "Portfolio of Sreenand O — Architecting Autonomous Agents and Deep Learning Systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className="bg-[#05070b] text-slate-100 antialiased selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}