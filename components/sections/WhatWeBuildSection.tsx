"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Grid } from "@/components/ui/Grid";
import { Section, SectionTitle, SectionContent } from "@/components/ui/Section";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Code, Palette, Brain, Zap } from "lucide-react";

const BuildItem = ({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) => (
  <motion.div variants={staggerItem}>
    <Card hover className="h-full">
      <div className="space-y-4">
        <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
          <Icon className="w-6 h-6 text-accent" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-white/60 leading-relaxed">{description}</p>
        </div>
      </div>
    </Card>
  </motion.div>
);

export const WhatWeBuildSection = () => {
  const services = [
    {
      icon: Code,
      title: "Digital Experiences",
      description:
        "Immersive web and mobile experiences that captivate, engage, and inspire users to action.",
    },
    {
      icon: Brain,
      title: "AI-Powered Solutions",
      description:
        "Intelligent systems that leverage cutting-edge AI to solve complex problems and unlock new possibilities.",
    },
    {
      icon: Palette,
      title: "Creative Ventures",
      description:
        "Innovative projects that blend art, technology, and commerce into compelling brand experiences.",
    },
    {
      icon: Zap,
      title: "Scalable Infrastructure",
      description:
        "Robust technical foundations that grow with your ambitions and handle exponential scale.",
    },
  ];

  return (
    <Section id="what-we-build" className="relative">
      <div className="absolute -top-40 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <Container>
        <SectionContent>
          <SectionTitle>
            What We <span className="text-accent">Build</span>
          </SectionTitle>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <Grid cols={2}>
              {services.map((service, i) => (
                <BuildItem
                  key={i}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </Grid>
          </motion.div>

          {/* Additional context */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
              From concept to deployment, we handle every aspect of product development
              with a focus on quality, performance, and user experience. Our multidisciplinary
              team brings together design, engineering, and strategy expertise.
            </p>
          </motion.div>
        </SectionContent>
      </Container>
    </Section>
  );
};
