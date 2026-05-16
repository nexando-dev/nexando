import { motion } from "framer-motion";

export const Section = ({
  children,
  className = "",
  id = "",
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => (
  <section
    id={id}
    className={`relative py-24 md:py-32 lg:py-40 overflow-hidden ${className}`}
  >
    {children}
  </section>
);

export const SectionContent = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`relative z-10 ${className}`}>{children}</div>
);

export const SectionBackground = ({
  type = "gradient",
}: {
  type?: "gradient" | "grid" | "dots";
}) => {
  if (type === "gradient") {
    return (
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent pointer-events-none" />
    );
  }

  if (type === "grid") {
    return (
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />
    );
  }

  return null;
};

export const SectionTitle = ({
  children,
  subtitle,
  align = "center",
}: {
  children: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center" | "right";
}) => {
  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`mb-16 md:mb-20 ${alignClass[align]}`}
    >
      <h2 className="text-h2 md:text-h1 font-bold mb-4 text-white leading-tight">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
