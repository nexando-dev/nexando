"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Section, SectionTitle, SectionContent } from "@/components/ui/Section";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Zap, Lightbulb, Rocket } from "lucide-react";

const AboutFeature = ({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) => (
  <motion.div variants={staggerItem}>
    <Card>
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-accent/20">
          <Icon className="w-6 h-6 text-accent" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
          <p className="text-white/60 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </Card>
  </motion.div>
);

export const AboutSection = () => {
  return (
    <Section id="about" className="relative">
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent pointer-events-none" />

      <Container>
        <SectionContent>
          <SectionTitle align="left">
            About Nexando
          </SectionTitle>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-white/80 leading-relaxed">
                Nexando is a modern innovation ecosystem built for the future. We bring
                together visionary thinkers, creative builders, and digital innovators
                to create experiences that matter.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Our mission is to foster an environment where bold ideas transform into
                scalable solutions. We believe in the power of collaboration, creativity,
                and cutting-edge technology.
              </p>
              <ul className="space-y-3">
                {[
                  "Future-oriented innovation",
                  "Creative digital ventures",
                  "Scalable ecosystems",
                  "Premium experiences",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-white/70"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right features */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <AboutFeature
                icon={Lightbulb}
                title="Innovative Thinking"
                description="We challenge the status quo and embrace bold ideas that shape the future of digital innovation."
              />
              <AboutFeature
                icon={Zap}
                title="Rapid Execution"
                description="From concept to launch, we execute with precision and agility in a fast-moving digital landscape."
              />
              <AboutFeature
                icon={Rocket}
                title="Scalable Solutions"
                description="Build ventures that grow exponentially with technology that scales alongside your ambitions."
              />
            </motion.div>
          </div>
        </SectionContent>
      </Container>
    </Section>
  );
};
