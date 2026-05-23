import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Products from "@/sections/Products";
import Portfolio from "@/sections/Portfolio";
import WhyChooseUs from "@/sections/WhyChooseUs";
import TechStack from "@/sections/TechStack";
import Pricing from "@/sections/Pricing";
import Statistics from "@/sections/Statistics";
import Testimonials from "@/sections/Testimonials";
import FAQ from "@/sections/FAQ";
import CTA from "@/sections/CTA";

export default function Home() {
  return (
    <main className="bg-[#050505] text-white min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <Portfolio />
      <WhyChooseUs />
      <TechStack />
      <Pricing />
      <Statistics />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
