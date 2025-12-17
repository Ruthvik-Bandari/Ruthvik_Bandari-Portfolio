import { useState, useEffect } from 'react'
import { RouterProvider, createRouter, createRootRoute, createRoute, Outlet, Link, useLocation } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'framer-motion'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Blog from './pages/Blog'

// Components
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'
import Footer from './components/Footer'
import IntroAnimation from './components/IntroAnimation'
import ThreeBackground from './three/ThreeBackground'

// Root Route with Layout
const rootRoute = createRootRoute({
  component: () => {
    const location = useLocation()
    
    return (
      <>
        <CustomCursor />
        <ThreeBackground />
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.main>
        </AnimatePresence>
        <Footer />
      </>
    )
  },
})

// Routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})

const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/projects',
  component: Projects,
})

const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/gallery',
  component: Gallery,
})

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: Contact,
})

const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog',
  component: Blog,
})

// Route Tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  projectsRoute,
  galleryRoute,
  contactRoute,
  blogRoute,
])

// Create Router
const router = createRouter({ routeTree })

// Type declarations
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function App() {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {showIntro && <IntroAnimation />}
      </AnimatePresence>
      <RouterProvider router={router} />
    </>
  )
}

export default App
