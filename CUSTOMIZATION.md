# Customization Guide

Learn how to customize the Nexando website to match your brand and content needs.

## Update Branding

### Site Metadata

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Company – Your Tagline",
  description: "Your company description",
  keywords: ["keyword1", "keyword2", "keyword3"],
};
```

### Company Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  background: "#0a0a0a",  // Main background
  foreground: "#ffffff",  // Text color
  primary: "#ffffff",     // Primary text
  accent: "#00d9ff",      // Accent color (cyan)
  secondary: "#666666",   // Secondary text
  // Add more custom colors
}
```

### Typography & Fonts

Edit `app/layout.tsx` to change Google Fonts:

```typescript
import { YourFont, AnotherFont } from "next/font/google";

const yourFont = YourFont({
  subsets: ["latin"],
  variable: "--font-sans",
});
```

Update `tailwind.config.ts`:

```typescript
fontFamily: {
  sans: ["var(--font-sans)", "system-ui"],
  display: ["var(--font-display)", "system-ui"],
}
```

## Update Content

### Hero Section

Edit `components/sections/HeroSection.tsx`:

```typescript
<GradientText>Your Main Headline</GradientText>
<span className="block mt-2">Your Secondary Headline</span>

{/* Update description */}
<p className="text-lg md:text-xl text-white/60">
  Your company description goes here...
</p>

{/* Update buttons */}
<Button variant="primary" size="lg">
  Your CTA Text
</Button>
```

### About Section

Edit `components/sections/AboutSection.tsx`:

```typescript
<p className="text-lg text-white/80 leading-relaxed">
  Your about text goes here...
</p>

{/* Update feature list */}
{["Feature 1", "Feature 2", "Feature 3"].map((item) => (
  // Feature items
))}
```

### Services/What We Build

Edit `components/sections/WhatWeBuildSection.tsx`:

```typescript
const services = [
  {
    icon: YourIcon,
    title: "Your Service",
    description: "Service description",
  },
  // Add more services
];
```

### Vision Section

Edit `components/sections/VisionPhilosophySection.tsx`:

```typescript
<h3>Your Vision Title</h3>
<p>Your vision description...</p>

{/* Update philosophy items */}
const philosophyCores = [
  {
    number: "01",
    title: "Your Value",
    description: "Value description",
  },
  // More items
];
```

### Future Initiatives

Edit `components/sections/FutureInitiativesSection.tsx`:

```typescript
const initiatives = [
  {
    icon: YourIcon,
    title: "Initiative Title",
    description: "Initiative description",
    status: "launching" | "in-progress" | "upcoming",
  },
  // More initiatives
];
```

### CTA Section

Edit `components/sections/CTASection.tsx`:

```typescript
<h2>Your CTA Headline</h2>
<p>Your CTA description...</p>

{/* Update social links */}
const socialLinks = [
  { icon: Mail, label: "Email", href: "mailto:your@email.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/..." },
  // More social links
];
```

### Footer

Edit `components/sections/Footer.tsx`:

```typescript
const links = {
  Product: ["Link1", "Link2"],
  Company: ["About", "Blog", "Careers"],
  // Update link categories and items
};
```

## Styling Adjustments

### Button Styles

Edit `components/ui/Button.tsx`:

```typescript
const variants = {
  primary: "bg-white text-black hover:bg-white/90",
  secondary: "bg-white/10 text-white border border-white/20",
  // Customize button styles
};
```

### Card Styles

Edit `components/ui/Card.tsx`:

```typescript
className={`group relative p-6 rounded-2xl bg-white/5 border border-white/10`}
// Adjust padding, border radius, background
```

### Animation Speed

Edit `lib/animations.ts`:

```typescript
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }, // Change duration
};
```

## Add New Sections

### Step 1: Create Component

Create `components/sections/NewSection.tsx`:

```typescript
"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section, SectionTitle } from "@/components/ui/Section";
import { staggerContainer, staggerItem } from "@/lib/animations";

export const NewSection = () => {
  return (
    <Section id="new-section">
      <Container>
        <SectionTitle>Your Section Title</SectionTitle>
        {/* Your content */}
      </Container>
    </Section>
  );
};
```

### Step 2: Add to Page

Edit `app/page.tsx`:

```typescript
import { NewSection } from "@/components/sections/NewSection";

export default function Home() {
  return (
    <main>
      {/* Other sections */}
      <NewSection />
      {/* Other sections */}
    </main>
  );
}
```

### Step 3: Update Navigation

Edit `components/Header.tsx`:

```typescript
const navLinks = [
  { name: "Your Section", href: "#new-section" },
  // Other links
];
```

## Add Images

### Hero Background Image

Edit `components/sections/HeroSection.tsx`:

```typescript
<Image
  src="/hero-background.png"
  alt="Hero"
  fill
  className="object-cover"
  priority
/>
```

### Feature Images

```typescript
import Image from "next/image";

<Image
  src="/feature.png"
  alt="Feature"
  width={400}
  height={300}
/>
```

Place images in `public/` directory.

## Add Icons

Using Lucide React (already installed):

```typescript
import { YourIcon } from "lucide-react";

<YourIcon className="w-6 h-6 text-accent" />
```

Browse available icons at [lucide.dev](https://lucide.dev)

## Mobile Responsiveness

Tailwind responsive classes:

```typescript
className="text-sm md:text-base lg:text-lg"
// sm: 640px, md: 768px, lg: 1024px, xl: 1280px
```

## Animations

### Scroll Animations

```typescript
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```

### Hover Animations

```typescript
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Clickable
</motion.button>
```

## SEO Optimization

### Update Meta Tags

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Title",
  description: "Meta description",
  openGraph: {
    title: "OG Title",
    description: "OG Description",
  },
};
```

### Add Structured Data

```typescript
// In your component
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      // Your structured data
    }),
  }}
/>
```

## Performance Optimization

### Image Optimization

Use Next.js Image component:

```typescript
import Image from "next/image";

<Image
  src="/image.png"
  alt="Description"
  width={1200}
  height={600}
  priority // Only for above-the-fold images
/>
```

### Code Splitting

Lazy load heavy components:

```typescript
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(
  () => import("@/components/Heavy"),
  { loading: () => <p>Loading...</p> }
);
```

## Support

For questions about customization, refer to:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion)
- [Lucide Icons](https://lucide.dev)
