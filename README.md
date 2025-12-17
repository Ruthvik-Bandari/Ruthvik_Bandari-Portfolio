# 🚀 Ruthvik's Portfolio

A modern, interactive portfolio built with React, TypeScript, and Three.js featuring glassmorphic design, 3D particle animations, and seamless API integrations.

[![Live Demo](https://img.shields.io/badge/Live-Demo-cyan?style=for-the-badge&logo=vercel)](https://ruthvik-bandari-portfolio-sufd.vercel.app/)
[![GitHub stars](https://img.shields.io/github/stars/Ruthvik-Bandari/portfolio?style=for-the-badge&logo=github)](https://github.com/Ruthvik-Bandari/portfolio/stargazers)
[![License](https://img.shields.io/badge/License-MIT-purple?style=for-the-badge)](LICENSE)

---

## ⭐ Like this project? Give it a star!

If you find this portfolio useful, inspiring, or want to use it as a template for your own — **please consider giving it a star!** It helps others discover the project and motivates me to keep building.

---

## ✨ Features

- 🌌 **3D Particle Background** — Interactive Three.js animation
- 🎨 **Glassmorphic Design** — Modern frosted glass UI effects
- ✨ **Smooth Animations** — Page transitions with Framer Motion
- 📱 **Fully Responsive** — Works on all devices
- 🎵 **Now Playing Widget** — Real-time Apple Music integration via Last.fm
- 📊 **Live GitHub Stats** — Auto-fetched stars and forks on project cards
- 📝 **Blog Integration** — Auto-fetching posts from Hashnode
- 📸 **Masonry Gallery** — VSCO-style photo gallery
- 📬 **Contact Form** — Working form with Formspree
- 📈 **Analytics** — Google Analytics integration
- 🤖 **Animated Robot** — Custom CSS character on homepage
- ⚡ **Fast Performance** — Optimized with Vite

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 18, TypeScript, Vite |
| **Styling** | Tailwind CSS, Custom CSS |
| **3D Graphics** | Three.js |
| **Animations** | Framer Motion |
| **Routing** | TanStack Router |
| **Data Fetching** | TanStack Query |
| **APIs** | GitHub, Hashnode GraphQL, Last.fm, Formspree |
| **Deployment** | Vercel |
| **Analytics** | Google Analytics 4 |

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/Ruthvik-Bandari/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

4. **Configure your `.env` file**
   ```env
   # GitHub (optional - for higher rate limits)
   VITE_GITHUB_TOKEN=your_github_token

   # Contact Form
   VITE_FORMSPREE_ID=your_formspree_id

   # Blog
   VITE_HASHNODE_HOST=yourblog.hashnode.dev

   # Apple Music / Last.fm
   VITE_LASTFM_API_KEY=your_lastfm_api_key
   VITE_LASTFM_USERNAME=your_lastfm_username

   # Analytics (optional)
   VITE_GA_TRACKING_ID=G-XXXXXXXXXX
   ```

5. **Run development server**
   ```bash
   npm run dev
   ```

6. **Open** [http://localhost:5173](http://localhost:5173)

---

## 🔧 Configuration

### GitHub Integration

Update your GitHub username in `src/hooks/useGitHub.ts`:
```typescript
const GITHUB_USERNAME = 'your-username'
```

### Projects

Edit your projects in `src/data/projects.ts`

### Gallery Photos

Add your photos to `public/images/gallery/` and update `src/data/photos.ts`

### Personal Info

Update your details in:
- `src/pages/Home.tsx` — Hero section
- `src/pages/About.tsx` — About content
- `src/pages/Contact.tsx` — Contact info
- `src/components/Footer.tsx` — Social links

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── images/
│   │   ├── gallery/        # Gallery photos
│   │   └── profile.png     # Profile picture
│   └── favicon.svg
├── src/
│   ├── components/         # Reusable components
│   ├── pages/              # Page components
│   ├── hooks/              # Custom hooks (GitHub, Blog, etc.)
│   ├── data/               # Static data (projects, photos)
│   ├── three/              # Three.js background
│   ├── styles/             # Global styles
│   └── App.tsx             # Main app with routing
├── .env.example
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Ruthvik-Bandari/portfolio)

---

## 🔌 API Setup Guides

<details>
<summary><b>GitHub Token (Optional)</b></summary>

1. Go to [GitHub Settings → Tokens](https://github.com/settings/tokens)
2. Generate new token (classic)
3. Select `public_repo` scope
4. Add to `.env` as `VITE_GITHUB_TOKEN`

</details>

<details>
<summary><b>Formspree (Contact Form)</b></summary>

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Copy the form ID (e.g., `myzrrnvq`)
4. Add to `.env` as `VITE_FORMSPREE_ID`

</details>

<details>
<summary><b>Hashnode (Blog)</b></summary>

1. Create a blog at [hashnode.com](https://hashnode.com)
2. Your blog URL is `yourusername.hashnode.dev`
3. Add to `.env` as `VITE_HASHNODE_HOST`

</details>

<details>
<summary><b>Last.fm (Apple Music Widget)</b></summary>

1. Create account at [last.fm](https://last.fm)
2. Get API key from [last.fm/api](https://www.last.fm/api/account/create)
3. Install a scrobbler app to connect Apple Music
4. Add to `.env`:
   - `VITE_LASTFM_API_KEY`
   - `VITE_LASTFM_USERNAME`

</details>

<details>
<summary><b>Google Analytics</b></summary>

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create a new property
3. Get Measurement ID (G-XXXXXXXXXX)
4. Add to `index.html` and `.env`

</details>

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Feel free to use this as a template for your own portfolio!** Just remember to:
- Replace personal info with your own
- Update projects and photos
- Give a ⭐ if you found it helpful!

---

## 📬 Contact

**Bandari Ruthvik Nath**

- 🌐 Portfolio: [ruthvik-bandari-portfolio-sufd.vercel.app](https://ruthvik-bandari-portfolio-sufd.vercel.app/)
- 💼 LinkedIn: [linkedin.com/in/ruthvik-nath-bandari](https://www.linkedin.com/in/ruthvik-nath-bandari-908b00247/)
- 🐙 GitHub: [@Ruthvik-Bandari](https://github.com/Ruthvik-Bandari)
- 📧 Email: ruthvik299@gmail.com

---

<div align="center">

### ⭐ Star this repo if you like it!

Made with ❤️ by [Ruthvik](https://github.com/Ruthvik-Bandari)

</div>
