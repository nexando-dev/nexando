# Quick Start Guide

Get the Nexando website up and running in minutes.

## 1. Installation

```bash
# Navigate to the project directory
cd /workspaces/nexando

# Install dependencies
npm install

# This installs:
# - React 18.3.1
# - Next.js 14.2.4
# - TypeScript 5.4.5
# - Tailwind CSS 3.4.3
# - Framer Motion 11.0.8
# - And all other required packages
```

## 2. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

The page will automatically reload when you make changes.

## 3. Make Your First Changes

### Update Site Title

1. Open `app/layout.tsx`
2. Change the metadata title and description
3. Save and refresh your browser

### Update Hero Content

1. Open `components/sections/HeroSection.tsx`
2. Modify the headline text
3. Changes appear instantly in your browser

### Change Brand Colors

1. Open `tailwind.config.ts`
2. Update the color values in the `colors` object
3. All components automatically use the new colors

## 4. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` directory.

## 5. Run Production Build

```bash
npm start
```

Your production-ready site runs at [http://localhost:3000](http://localhost:3000).

## 6. Deploy to Vercel

### Easiest Method:

1. Push your code to GitHub/GitLab/Bitbucket
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

Your site is live! 🚀

## 7. Custom Domain

1. After deployment, go to your Vercel project settings
2. Click "Domains"
3. Add your custom domain
4. Update your DNS records as instructed

## Project Structure

```
nexando/
├── app/
│   ├── layout.tsx          # Root layout (site config)
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation
│   ├── ui/                 # Reusable UI components
│   └── sections/           # Page sections
├── lib/
│   └── animations.ts       # Animation presets
├── public/                 # Static assets
└── package.json           # Dependencies
```

## Common Tasks

### Add a New Section

1. Create `components/sections/NewSection.tsx`
2. Import in `app/page.tsx`
3. Add to navigation in `components/Header.tsx`

### Change Colors

Edit `tailwind.config.ts` colors section.

### Update Fonts

Edit `app/layout.tsx` Google Fonts imports.

### Add Images

Place in `public/` and use in components with Next.js Image component.

### Modify Animations

Edit `lib/animations.ts` or `tailwind.config.ts` keyframes.

## Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Run production server
npm run lint     # Check code quality
```

## Useful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Lucide Icons](https://lucide.dev)

## Troubleshooting

### Port 3000 Already in Use

```bash
# Kill the process
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3001
```

### Build Fails

```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

### Changes Not Showing

1. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
2. Check the terminal for errors
3. Ensure file is saved

## Need Help?

Check the detailed guides:
- [README.md](README.md) - Full project overview
- [CUSTOMIZATION.md](CUSTOMIZATION.md) - How to customize
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment options
- [CONTRIBUTING.md](CONTRIBUTING.md) - Code guidelines

## Next Steps

1. ✅ Run `npm install`
2. ✅ Run `npm run dev`
3. ✅ Visit http://localhost:3000
4. ✅ Start customizing!

Happy building! 🎉
