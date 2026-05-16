"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { staggerContainer, staggerItem } from "@/lib/animations";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    Product: ["Features", "Pricing", "Security", "Roadmap"],
    Company: ["About", "Blog", "Careers", "Contact"],
    Resources: ["Docs", "API", "Community", "Support"],
    Legal: ["Privacy", "Terms", "Cookies", "Compliance"],
  };

  return (
    <footer className="relative bg-black border-t border-white/5 py-16 md:py-20">
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent pointer-events-none" />

      <Container>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative z-10"
        >
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand */}
            <motion.div variants={staggerItem} className="lg:col-span-1">
              <div className="mb-4">
                <div className="text-2xl font-bold">
                  <span className="text-white">Nexando</span>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                A modern innovation ecosystem for future-oriented ideas and digital experiences.
              </p>
            </motion.div>

            {/* Links */}
            {Object.entries(links).map(([category, items]) => (
              <motion.div key={category} variants={staggerItem}>
                <h3 className="text-sm font-semibold text-white mb-4">{category}</h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-white/60 text-sm hover:text-white transition-colors duration-300"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <motion.div
            variants={staggerItem}
            className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"
          />

          {/* Bottom footer */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col md:flex-row justify-between items-center text-sm text-white/50"
          >
            <p>© {currentYear} Nexando. All rights reserved.</p>
            <p>
              Built with <span className="text-accent">∞</span> by the Nexando team
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </footer>
  );
};
