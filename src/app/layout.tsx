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
      <body className="antialiased relative" suppressHydrationWarning>
        {/* Animated Background Orbs */}
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="bg-orb bg-orb-3" />
        <div className="bg-orb bg-orb-4" />
        
        {/* Grid Background */}
        <div className="grid-background" />
        
        {/* Main Content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
