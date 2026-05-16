import { motion } from "framer-motion";

export const Card = ({
  children,
  className = "",
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) => (
  <motion.div
    whileHover={hover ? { y: -4 } : {}}
    transition={{ duration: 0.3 }}
    className={`group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 ${
      hover
        ? "hover:bg-white/[0.08] hover:border-white/20 cursor-pointer"
        : ""
    } ${className}`}
  >
    {children}
  </motion.div>
);

export const CardGradient = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`relative p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-md overflow-hidden ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-radial opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    <div className="relative z-10">{children}</div>
  </div>
);
