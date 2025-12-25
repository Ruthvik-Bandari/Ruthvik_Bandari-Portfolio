import { useState } from 'react'
import { Link, useLocation } from '@tanstack/react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/blog', label: 'Blog' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="fixed top-0 left-0 w-full z-50 px-8 md:px-16 py-6 flex justify-between items-center"
      >
        {/* Logo */}
        <Link
          to="/"
          className="font-orbitron text-lg md:text-xl font-black tracking-wider text-white hover:text-cyan transition-colors"
        >
          BANDARI RUTHVIK NATH
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-12">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`
                  font-space text-sm font-medium uppercase tracking-widest
                  relative transition-colors duration-300
                  ${location.pathname === link.path ? 'text-cyan' : 'text-white/60 hover:text-white'}
                `}
              >
                {link.label}
                <span
                  className={`
                    absolute -bottom-2 left-0 h-0.5 bg-cyan transition-all duration-300
                    ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}
                  `}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 z-[60]"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu - Outside nav for proper z-index */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] md:hidden flex flex-col items-center justify-center gap-8"
            style={{ backgroundColor: '#000000' }}
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`
                    font-space text-2xl font-medium uppercase tracking-widest
                    ${location.pathname === link.path ? 'text-cyan' : 'text-white/60 hover:text-white'}
                  `}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}