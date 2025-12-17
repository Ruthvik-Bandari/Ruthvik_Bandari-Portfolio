import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface IntroAnimationProps {
  onComplete?: () => void
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [isVisible, setIsVisible] = useState(true)
  const name = 'BANDARI RUTHVIK NATH'
  const letters = name.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      onComplete?.()
    }, 3000)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="fixed inset-0 z-[100000] bg-black flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Animated lines */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '100%', opacity: [0, 1, 0] }}
                transition={{
                  duration: 2,
                  delay: Math.random() * 1,
                  ease: 'easeInOut',
                }}
                className="absolute h-px bg-gradient-to-r from-transparent via-cyan to-transparent"
                style={{ top: `${Math.random() * 100}%` }}
              />
            ))}
          </div>

          {/* Name text with letter-by-letter reveal */}
          <div className="relative z-10 font-orbitron text-[clamp(1.2rem,4vw,2.5rem)] font-black tracking-[0.15em] uppercase">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 100, rotateX: 90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2 + i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-5 text-sm tracking-[0.4em] text-cyan"
          >
            AI & MACHINE LEARNING ENGINEER
          </motion.p>

          {/* Loading bar */}
          <div className="mt-12 w-[200px] h-0.5 bg-white/10 rounded overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.5, duration: 2, ease: 'easeInOut' }}
              className="h-full rounded"
              style={{
                background: 'linear-gradient(90deg, var(--cyan), var(--purple), var(--pink))',
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
