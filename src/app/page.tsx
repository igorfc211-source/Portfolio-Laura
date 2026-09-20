import { Navbar } from "../components/navbar";
import { HeroSection } from "../components/hero";
import { Portfolio } from "../components/portolfio";

import { ServicesSection } from "../components/services";
import { ProcessSection } from "../components/process";

import { ContactSection } from "../components/contacts";
import { Footer } from "../components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Navbar />
      <HeroSection />
      <Portfolio />
      <ServicesSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
