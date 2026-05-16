# Nexando – Premium Innovation Ecosystem Website

A modern, futuristic website for Nexando, a premium innovation ecosystem focused on future-oriented ideas, digital experiences, creative ventures, and scalable innovation.

## Features

- **Minimalist & Cinematic Design**: Dark modern UI with glassmorphism and soft gradient glows
- **Premium Typography**: Large typography hierarchy with elegant spacing
- **Smooth Animations**: Apple-like motion design powered by Framer Motion
- **Responsive Design**: Mobile-first architecture that works perfectly on all devices
- **Optimized Performance**: Built for Vercel deployment with best practices

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui inspired
- **Icons**: Lucide React
- **Fonts**: Inter + Space Grotesk (Google Fonts)

## Project Structure

```
nexando/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── ui/                 # UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   ├── Grid.tsx
│   │   ├── Section.tsx
│   │   └── index.ts
│   └── sections/           # Page sections
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── WhatWeBuildSection.tsx
│       ├── VisionPhilosophySection.tsx
│       ├── FutureInitiativesSection.tsx
│       ├── CTASection.tsx
│       ├── Footer.tsx
│       └── index.ts
├── lib/
│   ├── animations.ts       # Animation presets
│   └── index.ts
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── postcss.config.js
```

## Getting Started

### Prerequisites

- Node.js 18+ or higher
- npm, yarn, or pnpm

### Installation

1. **Install dependencies**:

```bash
npm install
```

2. **Start the development server**:

```bash
npm run dev
```

3. **Open your browser**:

Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## Development

### Available Scripts

- `npm run dev` – Start development server
- `npm run build` – Create optimized production build
- `npm start` – Start production server
- `npm run lint` – Run ESLint

### Code Quality

- **TypeScript**: Full type safety across the codebase
- **Clean Architecture**: Separated concerns with reusable components
- **Performance Optimized**: Lazy loading, proper bundling, optimized animations
- **Accessibility**: Semantic HTML and ARIA labels where needed

## Sections

### 1. Hero Section
Eye-catching hero with animated background orbs, main headline, subheading, and CTA buttons.

### 2. About Section
Introduction to Nexando with key features displayed in a grid layout with icons.

### 3. What We Build
Showcase of services with glassmorphic cards and hover effects.

### 4. Vision & Philosophy
Company vision statement and core philosophy with numbered pillars.

### 5. Future Initiatives
Upcoming projects and roadmap items with status indicators.

### 6. CTA Section
Call-to-action section with social media links.

### 7. Footer
Comprehensive footer with links and company information.

## Design System

### Colors

- **Background**: `#0a0a0a` (near black)
- **Primary**: `#ffffff` (white)
- **Accent**: `#00d9ff` (cyan)
- **Muted**: `#333333` (dark gray)
- **Border**: `#1a1a1a` (subtle borders)

### Typography

- **Display**: Space Grotesk (700)
- **Body**: Inter (400, 500, 600)
- **Heading Hierarchy**: H1–H4 with specific sizing

### Components

- **Buttons**: Primary, Secondary, Ghost variants
- **Cards**: Hover effects with glassmorphism
- **Badges**: With icons and glow effects
- **Containers**: Max-width with responsive padding

## Customization

### Update Company Info

Edit the following files to customize content:

- `app/layout.tsx` – Update metadata (title, description)
- `components/sections/HeroSection.tsx` – Update hero headline and CTA
- `components/sections/AboutSection.tsx` – Update about content
- `components/sections/Footer.tsx` – Update footer links and company info

### Modify Colors

Update `tailwind.config.ts` colors object to change the design system colors.

### Update Fonts

Modify `app/layout.tsx` to use different Google Fonts.

## Performance

- **Optimized Animations**: Uses `will-change` and `transform` for 60fps performance
- **Code Splitting**: Automatic with Next.js App Router
- **Image Optimization**: Ready for image integration with Next.js Image component
- **Zero Layout Shift**: Fixed scrollbar and careful animation timing

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect repository to Vercel
3. Vercel automatically deploys on push

### Other Platforms

```bash
npm run build
npm start
```

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Nexando. All rights reserved.

## Support

For questions or issues, please reach out to the development team.
