import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Stats from "@/sections/Stats";
import Services from "@/sections/Services";
import OrderOptions from "@/sections/OrderOptions";
import Testimonials from "@/sections/Testimonials";
import FAQ from "@/sections/FAQ";
import CTA from "@/sections/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <OrderOptions />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
