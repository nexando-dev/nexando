"use client";

import { Header } from "@/components/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhatWeBuildSection } from "@/components/sections/WhatWeBuildSection";
import { VisionPhilosophySection } from "@/components/sections/VisionPhilosophySection";
import { FutureInitiativesSection } from "@/components/sections/FutureInitiativesSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="w-full bg-background overflow-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <WhatWeBuildSection />
      <VisionPhilosophySection />
      <FutureInitiativesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
