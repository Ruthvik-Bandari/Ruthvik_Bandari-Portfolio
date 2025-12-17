import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const outerRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, .card-3d, .clickable')) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, .card-3d, .clickable')) {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  // Smooth follow for outer cursor
  useEffect(() => {
    const animate = () => {
      outerRef.current.x += (mousePos.x - outerRef.current.x) * 0.15
      outerRef.current.y += (mousePos.y - outerRef.current.y) * 0.15
      requestAnimationFrame(animate)
    }
    animate()
  }, [mousePos])

  return (
    <>
      {/* Inner cursor - follows exactly */}
      <motion.div
        className="fixed w-2 h-2 bg-cyan rounded-full pointer-events-none z-[99999] hidden md:block"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      {/* Outer cursor - follows with delay */}
      <motion.div
        className="fixed pointer-events-none z-[99998] hidden md:block"
        animate={{
          width: isHovering ? 60 : 40,
          height: isHovering ? 60 : 40,
          borderColor: isHovering ? '#ec4899' : '#00f5ff',
          backgroundColor: isHovering ? 'rgba(236, 72, 153, 0.1)' : 'transparent',
        }}
        transition={{ duration: 0.15 }}
        style={{
          left: mousePos.x,
          top: mousePos.y,
          transform: 'translate(-50%, -50%)',
          border: '2px solid',
          borderRadius: '50%',
          mixBlendMode: 'difference',
        }}
      />
    </>
  )
}
