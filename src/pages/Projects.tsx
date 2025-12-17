import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'
import { projects, categories } from '@/data/projects'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category.includes(activeFilter))

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Header */}
      <section className="px-8 md:px-20 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="font-orbitron text-4xl md:text-5xl font-black mb-4">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-white/60 font-space">
            Hover to explore the details
          </p>
        </motion.div>
      </section>

      {/* Filter Tabs */}
      <section className="px-8 md:px-20 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`
                px-6 py-2.5 rounded-full font-space text-sm font-medium
                transition-all duration-300 border
                ${activeFilter === cat.id
                  ? 'bg-cyan text-black border-cyan'
                  : 'bg-white/5 text-white/70 border-white/10 hover:border-cyan/50 hover:text-white'
                }
              `}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="px-8 md:px-20">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-white/40 py-20 font-space"
          >
            No projects found in this category.
          </motion.p>
        )}
      </section>
    </div>
  )
}
