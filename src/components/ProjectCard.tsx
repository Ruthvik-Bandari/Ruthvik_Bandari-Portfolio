import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Star, GitFork, ExternalLink, Github, FileText } from 'lucide-react'
import { useGitHubRepoStats, projectRepoMap } from '@/hooks/useGitHub'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  
  // Get GitHub stats if available
  const repoName = projectRepoMap[project.id]
  const { data: repoStats } = useGitHubRepoStats(repoName || '')

  const handleClick = (e: React.MouseEvent) => {
    // Don't flip if clicking on a link
    if ((e.target as HTMLElement).closest('a')) return
    setIsFlipped(!isFlipped)
  }

  const getStatusButton = () => {
    switch (project.status) {
      case 'coming-soon':
        return (
          <span className="flex-1 py-2.5 rounded-xl text-center text-sm font-semibold
                           bg-white/5 border border-white/10 text-white/50 cursor-default">
            🚧 Coming Soon
          </span>
        )
      case 'paper-coming':
        return (
          <span className="flex-1 py-2.5 rounded-xl text-center text-sm font-semibold
                           bg-white/5 border border-white/10 text-white/50 cursor-default">
            📄 Paper Coming Soon
          </span>
        )
      case 'demo-soon':
        return (
          <span className="flex-1 py-2.5 rounded-xl text-center text-sm font-semibold
                           bg-white/5 border border-white/10 text-white/50 cursor-default">
            Demo Soon
          </span>
        )
      case 'github-soon':
        return (
          <span className="flex-1 py-2.5 rounded-xl text-center text-sm font-semibold
                           bg-white/5 border border-white/10 text-white/50 cursor-default">
            GitHub Soon
          </span>
        )
      case 'cert-soon':
        return (
          <span className="flex-1 py-2.5 rounded-xl text-center text-sm font-semibold
                           bg-white/5 border border-white/10 text-white/50 cursor-default">
            Certificate Soon
          </span>
        )
      default:
        return null
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="h-[450px] cursor-pointer group"
      style={{ perspective: '2000px' }}
      onClick={handleClick}
    >
      <motion.div
        className="w-full h-full relative"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -15, scale: 1.02 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 rounded-3xl overflow-hidden glass"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Image/Icon Area */}
          <div className="h-36 relative flex items-center justify-center bg-gradient-to-br from-cyan/10 to-purple/10">
            <span className="text-5xl">{project.icon}</span>
            <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-space
                             bg-black/50 border border-white/20">
              {project.categoryLabel}
            </span>
            
            {/* GitHub Stats Badge */}
            {repoStats && (repoStats.stargazers_count > 0 || repoStats.forks_count > 0) && (
              <div className="absolute top-4 right-4 flex items-center gap-3">
                {repoStats.stargazers_count > 0 && (
                  <span className="flex items-center gap-1 text-xs text-yellow-400">
                    <Star size={12} fill="currentColor" /> {repoStats.stargazers_count}
                  </span>
                )}
                {repoStats.forks_count > 0 && (
                  <span className="flex items-center gap-1 text-xs text-cyan">
                    <GitFork size={12} /> {repoStats.forks_count}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="font-orbitron text-lg font-bold mb-2">{project.title}</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-3">
              {project.description}
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="tag text-xs">{tag}</span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-2 text-cyan font-space text-sm">
              <span>Click to Explore</span>
              <ExternalLink size={14} />
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 rounded-3xl overflow-hidden glass-cyan p-5 flex flex-col"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          {/* Header */}
          <div className="flex items-start gap-3 mb-3 pb-3 border-b border-white/10">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center text-lg shrink-0
                            bg-gradient-to-br from-cyan to-purple">
              {project.icon}
            </div>
            <div className="min-w-0">
              <h3 className="font-orbitron text-sm font-bold truncate">{project.title}</h3>
              <p className="text-cyan text-xs">{project.subtitle}</p>
            </div>
          </div>

          {/* Features */}
          <div className="flex-1 overflow-y-auto min-h-0">
            <h4 className="text-purple text-xs font-semibold uppercase tracking-wider mb-2">Key Features</h4>
            <ul className="space-y-1 mb-3">
              {project.features.slice(0, 4).map((feature, i) => (
                <li key={i} className="text-white/70 text-xs leading-relaxed flex items-start gap-2">
                  <span className="text-cyan mt-0.5">•</span>
                  <span className="line-clamp-2">{feature}</span>
                </li>
              ))}
            </ul>
            
            <h4 className="text-purple text-xs font-semibold uppercase tracking-wider mb-2">Impact</h4>
            <p className="text-white/70 text-xs line-clamp-2">{project.impact}</p>
          </div>

          {/* Buttons - Always visible at bottom */}
          <div className="flex gap-2 mt-3 pt-3 border-t border-white/10 shrink-0">
            {project.paperUrl && (
              <a
                href={project.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 py-2.5 rounded-xl text-center text-sm font-semibold text-black
                           bg-gradient-to-r from-cyan to-blue-500 flex items-center justify-center gap-2
                           hover:shadow-lg hover:shadow-cyan/30 transition-all"
              >
                <FileText size={14} /> Research Paper
              </a>
            )}
            
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`flex-1 py-2.5 rounded-xl text-center text-sm font-semibold
                           ${project.paperUrl || project.demoUrl ? 'bg-white/10 border border-white/20 text-white' : 'text-black bg-gradient-to-r from-cyan to-blue-500'}
                           flex items-center justify-center gap-2 hover:shadow-lg transition-all`}
              >
                <Github size={14} /> GitHub
              </a>
            )}
            
            {project.demoUrl && project.demoUrl !== '/contact' && !project.status && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 py-2.5 rounded-xl text-center text-sm font-semibold text-black
                           bg-gradient-to-r from-cyan to-blue-500 flex items-center justify-center gap-2
                           hover:shadow-lg hover:shadow-cyan/30 transition-all"
              >
                <ExternalLink size={14} /> {project.demoUrl.includes('expo') ? '📲 Try on Android' : 'Demo'}
              </a>
            )}

            {project.demoUrl === '/contact' && (
              <Link
                to="/contact"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 py-2.5 rounded-xl text-center text-sm font-semibold text-black
                           bg-gradient-to-r from-cyan to-blue-500 flex items-center justify-center gap-2
                           hover:shadow-lg hover:shadow-cyan/30 transition-all"
              >
                Get Started
              </Link>
            )}

            {getStatusButton()}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
