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
      <body className="antialiased relative bg-[#050816] min-h-screen overflow-x-hidden" suppressHydrationWarning>
        {/* Global Animated Background Orbs */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {/* Purple Orb - Top Left */}
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[140px] animate-[orbFloat_25s_ease-in-out_infinite]" />
          
          {/* Blue Orb - Top Right */}
          <div className="absolute top-20 -right-40 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] animate-[orbFloat_30s_ease-in-out_infinite_reverse]" />
          
          {/* Cyan Orb - Center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[140px] animate-[orbFloat_20s_ease-in-out_infinite]" style={{ animationDelay: '-5s' }} />
          
          {/* Pink Orb - Bottom */}
          <div className="absolute -bottom-40 left-1/3 w-[450px] h-[450px] bg-pink-600/12 rounded-full blur-[140px] animate-[orbFloat_28s_ease-in-out_infinite]" style={{ animationDelay: '-10s' }} />
        </div>

        {/* Grid Background */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        {/* Radial Gradient Overlay for Depth */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.08),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.06),transparent_60%)]" />
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}