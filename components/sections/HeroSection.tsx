"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button, BadgeGlow, GradientText } from "@/components/ui/Button";
import { staggerContainer, staggerItem } from "@/lib/animations";


export const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center py-20 md:py-0">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(600px at 50% 50%, rgba(0, 217, 255, 0.1) 0%, transparent 80%)`,
          }}
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={staggerItem} className="mb-8 flex justify-center">
            <BadgeGlow>Welcome to the future of innovation</BadgeGlow>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={staggerItem}
            className="text-5xl md:text-6xl lg:text-h1 font-bold text-white mb-6 leading-tight tracking-tight"
          >
            <GradientText>Shape Tomorrow&apos;s</GradientText>
            {" "}
            <span className="block mt-2">Digital Experiences</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={staggerItem}
            className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Welcome to Nexando, where innovation meets imagination. We&apos;re building
            the ecosystem for tomorrow&apos;s creative ventures, digital experiences, and
            scalable ideas.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button variant="primary" size="lg">
              Explore Our Vision
            </Button>
            <Button variant="secondary" size="lg">
              Learn More
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center"
          >
            <button className="p-3 rounded-full border border-white/20 hover:border-white/40 transition-all hover:bg-white/5">
              <ArrowDown className="w-5 h-5 text-white/60" />
            </button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
