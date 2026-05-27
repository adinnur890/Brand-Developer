import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Brand Developer — Full Stack Developer Agency",
  description: "Jasa pembuatan website modern, landing page, toko online, dashboard admin, dan full stack development premium.",
  icons: {
    icon: "/brand-developer.svg",
    shortcut: "/brand-developer.svg",
    apple: "/brand-developer.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased relative min-h-screen overflow-x-hidden bg-[#050816] font-sans" suppressHydrationWarning>
        {/* Global Animated Background Orbs & Glow */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          {/* Purple Orb - Top Left */}
          <div className="absolute -top-24 -left-24 w-[320px] h-[320px] bg-purple-600/15 rounded-full blur-[60px] animate-[orbFloat_12s_ease-in-out_infinite]" />
          {/* Blue Orb - Top Right */}
          <div className="absolute top-10 -right-24 w-[220px] h-[220px] bg-blue-600/10 rounded-full blur-[40px] animate-[orbFloat_14s_ease-in-out_infinite_reverse]" />
          {/* Cyan Orb - Center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] bg-cyan-600/8 rounded-full blur-[32px] animate-[orbFloat_10s_ease-in-out_infinite]" style={{ animationDelay: '-5s' }} />
          {/* Pink Orb - Bottom */}
          <div className="absolute -bottom-24 left-1/3 w-[180px] h-[180px] bg-pink-600/10 rounded-full blur-[32px] animate-[orbFloat_16s_ease-in-out_infinite]" style={{ animationDelay: '-10s' }} />
        </div>

        {/* Grid Background */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        {/* Radial Gradient Overlay for Depth */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.10),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.09),transparent_60%)]" />
        </div>

        {/* Main Content - glass and premium spacing */}
        <div className="relative z-10 px-2 md:px-0">
          {children}
        </div>
      </body>
    </html>
  );
}