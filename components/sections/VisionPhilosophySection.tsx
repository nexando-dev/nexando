"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Section, SectionTitle, SectionContent } from "@/components/ui/Section";
import { staggerContainer, staggerItem } from "@/lib/animations";

const PhilosophyCore = ({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) => (
  <motion.div variants={staggerItem}>
    <Card hover={false}>
      <div className="relative">
        <div className="absolute -top-3 -left-3 w-12 h-12 rounded-lg bg-accent/30 flex items-center justify-center border border-accent/50">
          <span className="text-sm font-bold text-accent">{number}</span>
        </div>
        <div className="pt-6 pl-6">
          <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
          <p className="text-white/60 leading-relaxed">{description}</p>
        </div>
      </div>
    </Card>
  </motion.div>
);

export const VisionPhilosophySection = () => {
  const philosophyCores = [
    {
      number: "01",
      title: "Future First",
      description:
        "We don't follow trends; we anticipate and create them. Our lens is always on what's next.",
    },
    {
      number: "02",
      title: "User-Centric Design",
      description:
        "Every decision flows from understanding user needs. Beauty and functionality must coexist.",
    },
    {
      number: "03",
      title: "Creative Excellence",
      description:
        "We push boundaries while maintaining elegance. Innovation without compromise.",
    },
    {
      number: "04",
      title: "Sustainable Scale",
      description:
        "Build solutions that grow responsibly. Technology should empower, not overwhelm.",
    },
  ];

  return (
    <Section id="vision" className="relative">
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent pointer-events-none" />

      <Container>
        <SectionContent>
          <SectionTitle align="left">
            Our Vision &amp; Philosophy
          </SectionTitle>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Vision statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  An Ecosystem for Tomorrow
                </h3>
                <p className="text-white/70 leading-relaxed">
                  We envision a world where innovation is accessible, creativity is valued,
                  and digital experiences transform how people connect, create, and commerce.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Why We Exist
                </h3>
                <p className="text-white/70 leading-relaxed">
                  The digital landscape is evolving faster than ever. Brands and creators
                  need a partner who understands complexity, embraces innovation, and
                  delivers excellence. That&apos;s Nexando.
                </p>
              </div>
            </motion.div>

            {/* Highlighted stat */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-blue-500/5 border border-accent/20 backdrop-blur-sm flex flex-col justify-center"
            >
              <div className="text-6xl font-bold text-accent mb-2">10X</div>
              <p className="text-white/80">
                We believe in building experiences and solutions that deliver exponential
                value to our partners.
              </p>
            </motion.div>
          </div>

          {/* Philosophy cores */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {philosophyCores.map((core, i) => (
              <PhilosophyCore
                key={i}
                number={core.number}
                title={core.title}
                description={core.description}
              />
            ))}
          </motion.div>
        </SectionContent>
      </Container>
    </Section>
  );
};
