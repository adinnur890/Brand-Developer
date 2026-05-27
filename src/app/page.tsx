"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Stats from "@/sections/Stats";
import dynamic from "next/dynamic";
const Services = dynamic(() => import("@/sections/Services"), { ssr: false, loading: () => <div style={{minHeight:200, textAlign:'center'}}>Loading Services...</div> });
const OrderOptions = dynamic(() => import("@/sections/OrderOptions"), { ssr: false, loading: () => <div style={{minHeight:200, textAlign:'center'}}>Loading Order Options...</div> });
const FAQ = dynamic(() => import("@/sections/FAQ"), { ssr: false, loading: () => <div style={{minHeight:200, textAlign:'center'}}>Loading FAQ...</div> });
const CTA = dynamic(() => import("@/sections/CTA"), { ssr: false, loading: () => <div style={{minHeight:200, textAlign:'center'}}>Loading CTA...</div> });
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0E1A] relative">
      {/* Animated gradient background overlay */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] animate-[ambientPulse_12s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[120px] animate-[ambientPulse_15s_ease-in-out_infinite]" style={{ animationDelay: '-5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-600/6 rounded-full blur-[100px] animate-[ambientPulse_18s_ease-in-out_infinite]" style={{ animationDelay: '-10s' }} />
        <div className="absolute top-1/3 right-1/3 w-[350px] h-[350px] bg-cyan-600/6 rounded-full blur-[100px] animate-[ambientPulse_20s_ease-in-out_infinite]" style={{ animationDelay: '-15s' }} />
      </div>
      
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <OrderOptions />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
