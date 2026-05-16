"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Section, SectionTitle, SectionContent } from "@/components/ui/Section";
import { staggerContainer, staggerItem } from "@/lib/animations";
import {
  Globe,
  Sparkles,
  Users,
  Gauge,
} from "lucide-react";

const InitiativeCard = ({
  icon: Icon,
  title,
  description,
  status,
}: {
  icon: any;
  title: string;
  description: string;
  status: "upcoming" | "in-progress" | "launching";
}) => (
  <motion.div variants={staggerItem}>
    <Card hover className="h-full flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-lg bg-accent/20">
          <Icon className="w-6 h-6 text-accent" />
        </div>
        <div className="px-2 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/20">
          <span
            className={
              status === "launching"
                ? "text-green-400"
                : status === "in-progress"
                  ? "text-blue-400"
                  : "text-white/60"
            }
          >
            {status === "launching"
              ? "Launching Soon"
              : status === "in-progress"
                ? "In Progress"
                : "Upcoming"}
          </span>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/60 flex-1">{description}</p>
    </Card>
  </motion.div>
);

export const FutureInitiativesSection = () => {
  const initiatives = [
    {
      icon: Globe,
      title: "Global Network",
      description:
        "Expanding our ecosystem across continents to connect innovators and creators worldwide.",
      status: "in-progress" as const,
    },
    {
      icon: Sparkles,
      title: "AI-Augmented Tools",
      description:
        "Creating intelligent tools that enhance creativity and accelerate development cycles.",
      status: "launching" as const,
    },
    {
      icon: Users,
      title: "Creator Community",
      description:
        "Building a thriving community where creators can collaborate, learn, and grow together.",
      status: "in-progress" as const,
    },
    {
      icon: Gauge,
      title: "Performance Platform",
      description:
        "Analytics and insights platform for measuring impact and optimizing digital experiences.",
      status: "upcoming" as const,
    },
  ];

  return (
    <Section id="initiatives" className="relative">
      <div className="absolute -bottom-40 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <Container>
        <SectionContent>
          <SectionTitle>
            Future <span className="text-accent">Initiatives</span>
          </SectionTitle>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {initiatives.map((initiative, i) => (
              <InitiativeCard
                key={i}
                icon={initiative.icon}
                title={initiative.title}
                description={initiative.description}
                status={initiative.status}
              />
            ))}
          </motion.div>

          {/* Timeline context */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 text-center max-w-3xl mx-auto"
          >
            <p className="text-white/60 leading-relaxed">
              Our roadmap is ambitious yet grounded in user feedback and market insights.
              Every initiative represents our commitment to pushing the boundaries of
              what&apos;s possible in the digital innovation space.
            </p>
          </motion.div>
        </SectionContent>
      </Container>
    </Section>
  );
};
