import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import IntroAnimation from '@/components/IntroAnimation'
import FlipCard from '@/components/FlipCard'
import RobotCharacter from '@/components/RobotCharacter'

const expertiseCards = [
  {
    id: 'ml',
    icon: '🧠',
    title: 'Machine Learning',
    description: 'Building intelligent models for classification, prediction, NLP, and computer vision applications.',
    backTitle: 'ML Projects',
    backSubtitle: 'Featured Work',
    projects: [
      { name: 'CTPPO', desc: 'Cyber Threat Propagation Path Optimizer using GNN, NLP, and Reinforcement Learning for intelligent threat prioritization.' },
      { name: 'NeuroFace Recognition', desc: 'Real time multi face recognition attendance system with 98%+ accuracy using ResNet and dlib.' },
    ],
    tags: ['PyTorch', 'GNN', 'OpenCV', 'RL'],
    link: '/projects',
  },
  {
    id: 'fullstack',
    icon: '💻',
    title: 'Full Stack Dev',
    description: 'Modern web and mobile applications with React Native, NestJS, Spring Boot, and FastAPI.',
    backTitle: 'Full Stack Projects',
    backSubtitle: 'Featured Work',
    projects: [
      { name: 'TaskApp', desc: 'Full stack task management app with glassmorphism UI built using React Native and NestJS.' },
      { name: 'Image Prompt Generator', desc: 'AI powered system using Java Spring Boot and React with GPT-4 Vision API integration.' },
    ],
    tags: ['React Native', 'NestJS', 'Spring Boot'],
    link: '/projects',
  },
  {
    id: 'research',
    icon: '📊',
    title: 'Research',
    description: 'Published research and academic projects in AI, healthcare, and cybersecurity domains.',
    backTitle: 'Research Work',
    backSubtitle: 'Publications & Projects',
    projects: [
      { name: 'Featured Projects', desc: 'MindCare AI — Healthcare chatbot outperforming MetaGPT. ScholarMine — Research clustering with HDBSCAN. CTPPO — Cybersecurity research platform.' },
      { name: 'Publication', desc: 'NeuroFace Recognition System published in IOSR Journal of Computer Engineering.' },
    ],
    tags: ['NLP', 'LLM', 'GNN', 'HDBSCAN'],
    link: '/projects',
  },
  {
    id: 'photography',
    icon: '📸',
    title: 'Photography',
    description: 'Visual storytelling through the lens with technical precision and artistic vision.',
    backTitle: 'Photography',
    backSubtitle: 'Visual Arts',
    projects: [
      { name: 'My Work', desc: 'Capturing moments through portrait, landscape, street, and nature photography. Each shot tells a unique story.' },
    ],
    tags: ['Portrait', 'Landscape', 'Street', 'Nature'],
    link: '/gallery',
    directLink: true,
  },
]

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false)

  return (
    <>
      {/* Intro Animation */}
      <IntroAnimation onComplete={() => setIntroComplete(true)} />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center px-8 md:px-20 pt-32">
          <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={introComplete ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >
              {/* Status Badge */}
              <div className="inline-flex items-center gap-3 px-5 py-2.5 mb-8 rounded-full
                             bg-cyan/10 border border-cyan/30">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="font-space text-sm text-cyan tracking-wide">
                  Actively looking for Co-op/Internships
                </span>
              </div>

              {/* Title */}
              <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">
                <span className="block">Building the</span>
                <span className="gradient-text block">Future with AI</span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-10 max-w-xl">
                Artificial Intelligence and Machine Learning Engineer crafting intelligent 
                solutions at the intersection of Deep Learning, Data Science, and Innovation.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-5">
                <Link to="/projects" className="btn-primary">
                  View Projects <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Get in Touch
                </Link>
              </div>
            </motion.div>

            {/* Robot Character */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={introComplete ? { opacity: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.7 }}
              className="hidden lg:block"
            >
              <RobotCharacter />
            </motion.div>
          </div>
        </section>

        {/* Expertise Cards Section */}
        <section className="px-8 md:px-20 py-24" id="cardsSection">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-space text-sm text-cyan tracking-[0.3em] uppercase mb-4">
              What I Do
            </p>
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold">
              Explore My <span className="gradient-text">Expertise</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 max-w-7xl mx-auto"
               style={{ perspective: '2000px' }}>
            {expertiseCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 150, rotateX: 45, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <FlipCard card={card} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-8 md:px-20 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6">
              Let's Build Something
              <br />
              <span className="gradient-text">Extraordinary</span>
            </h2>
            <p className="text-lg text-white/60 max-w-xl mx-auto mb-10">
              Have a project in mind? I'd love to hear about it and explore how we can 
              create something amazing together.
            </p>
            <div className="flex flex-wrap gap-5 justify-center">
              <Link to="/contact" className="btn-primary">
                Start a Project <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="btn-secondary">
                Learn More About Me
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  )
}
