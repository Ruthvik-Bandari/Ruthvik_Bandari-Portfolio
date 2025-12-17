import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface CardProject {
  name: string
  desc: string
}

interface FlipCardProps {
  card: {
    id: string
    icon: string
    title: string
    description: string
    backTitle: string
    backSubtitle: string
    projects: CardProject[]
    tags: string[]
    link: string
    directLink?: boolean
  }
}

export default function FlipCard({ card }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    // If clicking on the button/link, let it navigate
    if ((e.target as HTMLElement).closest('a')) {
      return
    }
    
    // For photography card, navigate directly to gallery
    if (card.directLink) {
      window.location.href = card.link
      return
    }
    
    setIsFlipped(!isFlipped)
  }

  return (
    <div
      onClick={handleClick}
      className="w-full h-[480px] cursor-pointer group"
      style={{ perspective: '2000px' }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -20, scale: 1.02 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Glow effect on hover */}
        <div className="absolute -inset-0.5 rounded-[32px] opacity-0 group-hover:opacity-60 transition-opacity duration-400 blur-xl z-0"
             style={{ 
               background: 'linear-gradient(135deg, var(--cyan), var(--purple), var(--pink), var(--cyan))',
               backgroundSize: '400% 400%',
               animation: 'glowRotate 5s linear infinite'
             }} />

        {/* Front Face */}
        <div
          className="absolute inset-0 rounded-[30px] overflow-hidden"
          style={{ 
            backfaceVisibility: 'hidden',
            background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))',
            backdropFilter: 'blur(40px)',
            border: '1px solid rgba(255,255,255,0.15)',
          }}
        >
          {/* Top gradient overlay */}
          <div className="absolute top-0 left-0 right-0 h-[200px] pointer-events-none"
               style={{ background: 'linear-gradient(180deg, rgba(0,245,255,0.1), transparent)' }} />
          
          {/* Icon */}
          <div className="p-12 flex justify-center">
            <div className="w-[120px] h-[120px] rounded-[40px] flex items-center justify-center text-6xl
                            transition-all duration-400 group-hover:scale-110 group-hover:rotate-[5deg]
                            group-hover:shadow-[0_20px_40px_rgba(0,245,255,0.3)]"
                 style={{ background: 'linear-gradient(135deg, rgba(0,245,255,0.2), rgba(168,85,247,0.2))' }}>
              {card.icon}
            </div>
          </div>

          {/* Content */}
          <div className="px-10 pb-10 flex-1 flex flex-col">
            <h3 className="font-orbitron text-2xl font-bold mb-4">{card.title}</h3>
            <p className="text-white/60 text-base leading-relaxed flex-1">{card.description}</p>
            <div className="flex items-center gap-2 text-cyan text-sm font-medium uppercase tracking-wider mt-5">
              <span>{card.directLink ? 'Click to View Gallery' : 'Click to Explore'}</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 rounded-[30px] overflow-hidden p-10 flex flex-col"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: 'linear-gradient(145deg, #0a0a15, #1a1a2e)',
            border: '1px solid rgba(0,245,255,0.3)',
          }}
        >
          {/* Header */}
          <div className="flex items-center gap-5 mb-6 pb-6 border-b border-white/10">
            <div className="w-[70px] h-[70px] rounded-[20px] flex items-center justify-center text-3xl shrink-0"
                 style={{ background: 'linear-gradient(135deg, var(--cyan), var(--purple))' }}>
              {card.icon}
            </div>
            <div>
              <h3 className="font-orbitron text-xl font-bold">{card.backTitle}</h3>
              <p className="text-cyan text-sm mt-1">{card.backSubtitle}</p>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {card.projects.map((project, i) => (
              <div key={i} className="mb-5">
                <h4 className="font-orbitron text-sm text-purple uppercase tracking-wider mb-2">
                  {project.name}
                </h4>
                <p className="text-white/70 text-sm leading-relaxed">{project.desc}</p>
              </div>
            ))}
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {card.tags.map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-full text-xs text-cyan
                                           bg-cyan/10 border border-cyan/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Button */}
          <Link
            to={card.link}
            onClick={(e) => e.stopPropagation()}
            className="mt-6 py-4 px-8 rounded-full text-center text-sm font-semibold uppercase tracking-wider
                       text-black transition-all hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,245,255,0.3)]"
            style={{ background: 'linear-gradient(135deg, var(--cyan), var(--blue))' }}
          >
            {card.directLink ? 'View Gallery' : `View All ${card.title.split(' ')[0]} Projects`}
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
