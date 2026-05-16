"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Section, SectionContent } from "@/components/ui/Section";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export const CTASection = () => {
  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:hello@nexando.io" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
  ];

  return (
    <Section id="cta" className="relative py-32 md:py-40">
      <div className="absolute inset-0 bg-gradient-radial from-accent/10 via-transparent to-transparent pointer-events-none" />

      <Container>
        <SectionContent>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Main CTA */}
            <motion.h2
              variants={staggerItem}
              className="text-4xl md:text-5xl lg:text-h2 font-bold text-white mb-6"
            >
              Ready to Shape the Future?
            </motion.h2>

            <motion.p
              variants={staggerItem}
              className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Join us on this journey to create the next generation of digital experiences
              and innovation-driven solutions. Let&apos;s build something extraordinary together.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <Button variant="primary" size="lg">
                Get Started
              </Button>
              <Button variant="secondary" size="lg">
                Schedule a Conversation
              </Button>
            </motion.div>

            {/* Divider */}
            <motion.div
              variants={staggerItem}
              className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-12"
            />

            {/* Social Links */}
            <motion.div
              variants={staggerItem}
              className="flex justify-center gap-6"
            >
              <p className="text-white/60 text-sm self-center">Connect with us:</p>
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-lg border border-white/10 text-white/60 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </SectionContent>
      </Container>
    </Section>
  );
};
