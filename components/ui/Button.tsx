import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg";

  const variants = {
    primary: "bg-white text-black hover:bg-white/90 active:scale-95",
    secondary:
      "bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30",
    ghost: "text-white hover:bg-white/5 border border-transparent hover:border-white/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const ButtonWithArrow = ({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <Button {...props} className="group">
    <span>{children}</span>
    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
  </Button>
);

export const BadgeGlow = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 backdrop-blur-md hover:bg-white/10 transition-all duration-300"
  >
    <Sparkles className="h-3.5 w-3.5 text-accent" />
    {children}
  </motion.div>
);

export const GradientText = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span className={`bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent ${className}`}>
    {children}
  </span>
);
