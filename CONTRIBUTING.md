# Contributing to Nexando

Thank you for your interest in contributing to Nexando! This document provides guidelines and instructions for contributing to the project.

## Code Style

- **TypeScript**: All code should be written in TypeScript with strict type checking
- **Components**: Use functional components with hooks
- **Naming**: Use PascalCase for components, camelCase for functions and variables
- **Formatting**: Code is automatically formatted with Prettier (configure in IDE)

## Component Guidelines

### Naming Conventions

- UI Components: `components/ui/ComponentName.tsx`
- Section Components: `components/sections/SectionNameSection.tsx`
- Pages: `app/path/page.tsx`

### Component Structure

```typescript
"use client"; // For client components

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { staggerContainer, staggerItem } from "@/lib/animations";

export const MyComponent = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
    >
      {/* Component content */}
    </motion.div>
  );
};
```

## Adding New Sections

1. Create a new file in `components/sections/`
2. Use the provided UI components and animation utilities
3. Export the component
4. Add it to the imports in `app/page.tsx`
5. Update the exports in `components/sections/index.ts`

## Performance Tips

- Use `whileInView` for animations that trigger on scroll
- Lazy load images with Next.js `Image` component
- Keep component bundle size small
- Use `viewport={{ once: true }}` to prevent re-triggering animations

## Testing

Before submitting changes:

```bash
npm run lint  # Check for linting errors
npm run build # Build for production
npm run dev   # Test locally
```

## Commit Messages

- Use clear, descriptive commit messages
- Start with a verb: "Add", "Fix", "Update", "Refactor"
- Example: "Add new testimonial section with animations"

## Code Review

All contributions will be reviewed for:

- Code quality and consistency
- Performance impact
- Accessibility
- Mobile responsiveness
- Adherence to project guidelines

## Questions?

Feel free to open an issue on GitHub with any questions or suggestions.
