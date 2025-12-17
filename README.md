# 🚀 Ruthvik's Portfolio - React + Bun + TanStack

A modern, high-performance portfolio built with React, TypeScript, TanStack Router & Query, Three.js, and Tailwind CSS.

![Portfolio Preview](./preview.png)

## ✨ Features

- **⚡ Blazing Fast** - Powered by Vite + Bun for instant HMR and builds
- **🎨 Stunning 3D Graphics** - Three.js particle system and floating shapes
- **📊 Live GitHub Stats** - Real-time repository stars, forks, and activity
- **🎵 Apple Music Now Playing** - Show what you're listening to via Last.fm
- **📝 Hashnode Blog** - Auto-fetch and display your blog posts
- **📧 Contact Form** - Working form with Formspree integration
- **🔄 Smooth Animations** - Framer Motion page transitions and interactions
- **📱 Fully Responsive** - Beautiful on all devices
- **🎯 Type-Safe Routing** - TanStack Router with full TypeScript support
- **💾 Smart Caching** - TanStack Query for efficient data fetching
- **🌙 Glassmorphism Design** - Modern frosted glass UI components

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | React 18, TypeScript |
| **Build Tool** | Vite, Bun |
| **Routing** | TanStack Router |
| **Data Fetching** | TanStack Query |
| **3D Graphics** | Three.js, React Three Fiber |
| **Animations** | Framer Motion |
| **Styling** | Tailwind CSS |
| **Icons** | Lucide React |
| **Deployment** | Vercel |

## 🚀 Quick Start

### Prerequisites
- [Bun](https://bun.sh/) (recommended) or Node.js 18+

### Installation

```bash
# Clone the repository
git clone https://github.com/Ruthvik-Bandari/portfolio-react.git
cd portfolio-react

# Install dependencies with Bun (recommended)
bun install

# Or with npm
npm install

# Copy environment variables
cp .env.example .env

# Start development server
bun dev
# or
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it.

### Building for Production

```bash
# Build with Bun
bun run build

# Or with npm
npm run build

# Preview production build
bun preview
```

## 🔧 Configuration

### 1. Formspree Contact Form Setup

1. Go to [formspree.io](https://formspree.io) and create an account
2. Create a new form
3. Copy your form ID (looks like `xabcdefg`)
4. Add to `.env`:
   ```env
   VITE_FORMSPREE_ID=xabcdefg
   ```

### 2. Hashnode Blog Setup

1. Create a blog on [hashnode.dev](https://hashnode.dev)
2. Your blog URL will be `yourname.hashnode.dev`
3. Add to `.env`:
   ```env
   VITE_HASHNODE_HOST=yourname.hashnode.dev
   ```

### 3. Apple Music Now Playing (via Last.fm)

1. Create a [Last.fm](https://last.fm) account
2. Connect Apple Music:
   - On iPhone: Settings → Music → Connect to Last.fm
   - On Mac: Use [Cider](https://cider.sh) or [Scrobbles for Last.fm](https://apps.apple.com/app/scrobbles-for-last-fm/id1344679160)
3. Get API key from [last.fm/api/account/create](https://www.last.fm/api/account/create)
4. Add to `.env`:
   ```env
   VITE_LASTFM_API_KEY=your_api_key_here
   ```
5. Update your username in `src/hooks/useNowPlaying.ts`:
   ```typescript
   const LASTFM_USERNAME = 'your_lastfm_username'
   ```

### 4. GitHub Stats (Optional - Higher Rate Limits)

1. Create a [GitHub Personal Access Token](https://github.com/settings/tokens)
2. Add to `.env`:
   ```env
   VITE_GITHUB_TOKEN=ghp_xxxxxxxxxxxx
   ```

## 📁 Project Structure

```
portfolio-react/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── BlogCard.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── FlipCard.tsx
│   │   ├── Footer.tsx
│   │   ├── IntroAnimation.tsx
│   │   ├── Navbar.tsx
│   │   ├── NowPlaying.tsx
│   │   └── ProjectCard.tsx
│   ├── pages/            # Route pages
│   │   ├── About.tsx
│   │   ├── Blog.tsx
│   │   ├── Contact.tsx
│   │   ├── Gallery.tsx
│   │   ├── Home.tsx
│   │   └── Projects.tsx
│   ├── hooks/            # Custom React hooks
│   │   ├── useBlog.ts       # Hashnode integration
│   │   ├── useGitHub.ts     # GitHub API integration
│   │   └── useNowPlaying.ts # Last.fm/Apple Music
│   ├── data/             # Static data
│   │   └── projects.ts   # Projects configuration
│   ├── three/            # Three.js components
│   │   └── ThreeBackground.tsx
│   ├── styles/           # Global styles
│   │   └── globals.css
│   ├── utils/            # Utility functions
│   │   └── helpers.ts
│   ├── App.tsx           # Main app with router
│   └── main.tsx          # Entry point
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard:
   - `VITE_FORMSPREE_ID`
   - `VITE_HASHNODE_HOST`
   - `VITE_LASTFM_API_KEY`
4. Deploy!

### Other Platforms

- **Netlify**: Works out of the box, add env vars in dashboard
- **Cloudflare Pages**: Set build command and output
- **GitHub Pages**: Use `gh-pages` branch

## 📊 Live Features

| Feature | Refresh Rate | Source |
|---------|-------------|--------|
| GitHub Stats | 5 minutes | GitHub API |
| Now Playing | 30 seconds | Last.fm API |
| Blog Posts | 10 minutes | Hashnode GraphQL |

## 🎨 Customization Tips

1. **Profile Photo**: Add your image to `public/images/` and update About.tsx
2. **Gallery Images**: Add local images or connect to VSCO/Instagram API
3. **Colors**: Edit `tailwind.config.js` and `src/styles/globals.css`
4. **Projects**: Edit `src/data/projects.ts`

## 📝 License

MIT License - feel free to use this for your own portfolio!

## 🙏 Credits

- Design & Development: Bandari Ruthvik Nath
- 3D Inspiration: Various Three.js examples
- Icons: Lucide React

---

Built with ❤️ and lots of ☕
