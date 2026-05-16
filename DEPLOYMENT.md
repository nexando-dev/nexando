# Deployment Guide

This guide covers deploying the Nexando website to various platforms.

## Vercel (Recommended)

### Prerequisites

- Vercel account
- GitHub, GitLab, or Bitbucket repository

### Steps

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your repository

2. **Configure Project**
   - Framework: Next.js (auto-detected)
   - Root Directory: ./ (default)
   - Build Command: `npm run build` (auto-detected)
   - Install Command: `npm install` (auto-detected)

3. **Environment Variables**
   - No environment variables needed for basic deployment
   - Add any custom variables if needed

4. **Deploy**
   - Click "Deploy"
   - Vercel automatically builds and deploys your project
   - Your site will be live at `https://your-project.vercel.app`

5. **Custom Domain**
   - Go to project settings
   - Add your custom domain
   - Update DNS records as instructed

## Other Platforms

### Netlify

```bash
# Build the project
npm run build

# Deploy the .next folder to Netlify
# Configure build command: npm run build
# Publish directory: .next
```

### Docker

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:

```bash
docker build -t nexando .
docker run -p 3000:3000 nexando
```

### AWS Amplify

1. Connect your repository
2. Configure build settings
3. Build command: `npm run build`
4. Start command: `npm start`
5. Deploy

### Manual Deployment

```bash
# Build the project
npm run build

# Create a production bundle
npm install -g serve
npm start

# Your site will be available at http://localhost:3000
```

## Performance Optimization

### Image Optimization

Replace static images with optimized Next.js Image component:

```typescript
import Image from "next/image";

export const MyComponent = () => (
  <Image
    src="/image.png"
    alt="Description"
    width={1200}
    height={600}
    priority
  />
);
```

### Font Optimization

Fonts are already optimized using `next/font`. No additional steps needed.

### Code Splitting

Next.js automatically code splits by page. For component-level splitting:

```typescript
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("@/components/Heavy"));
```

## Environment Variables

Create `.env.local` for local development:

```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=https://api.example.com
```

For production, add variables in your hosting platform's environment variable settings.

## Monitoring

### Core Web Vitals

Monitor performance with:

- Google PageSpeed Insights
- Next.js Analytics
- Vercel Analytics

### Error Tracking

Add error tracking for production:

```typescript
// app/layout.tsx
import * as Sentry from "@sentry/nextjs";

// Configure Sentry (optional)
```

## Security

- Enable HTTPS (automatic with most hosting)
- Set security headers in `next.config.js`
- Keep dependencies updated: `npm audit fix`
- Use environment variables for sensitive data

## Troubleshooting

### Build Fails

```bash
# Clear build cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install

# Rebuild
npm run build
```

### Performance Issues

- Check bundle size: `npm install -D @next/bundle-analyzer`
- Use React DevTools Profiler
- Check Core Web Vitals in browser DevTools

## SSL/TLS Certificate

Most hosting platforms provide free SSL certificates. Ensure HTTPS is enforced in your domain settings.

## Support

For deployment issues, consult:

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- Vercel Documentation
- Platform-specific support channels
