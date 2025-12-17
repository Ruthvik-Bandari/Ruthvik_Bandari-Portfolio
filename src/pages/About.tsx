import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Instagram } from 'lucide-react'
import { useGitHubTotalStats } from '@/hooks/useGitHub'
import NowPlaying from '@/components/NowPlaying'

const skills = [
  {
    icon: '🧠',
    name: 'Machine Learning',
    level: 90,
    tags: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'Computer Vision'],
  },
  {
    icon: '🔐',
    name: 'Cybersecurity',
    level: 80,
    tags: ['Threat Analysis', 'Security Research'],
  },
  {
    icon: '⚡',
    name: 'AI Automation',
    level: 95,
    tags: ['n8n', 'Workflow Design', 'API Integration'],
  },
  {
    icon: '💻',
    name: 'Full Stack Dev',
    level: 85,
    tags: ['React', 'Python', 'FastAPI'],
  },
  {
    icon: '☁️',
    name: 'Cloud & DevOps',
    level: 75,
    tags: ['Docker', 'Git', 'CI/CD'],
  },
  {
    icon: '📊',
    name: 'Data Engineering',
    level: 85,
    tags: ['SQL', 'ETL Pipelines', 'Data Analysis', 'HDBSCAN'],
  },
]

const timeline = [
  {
    date: '2025 — Present',
    title: "Master's in Applied AI",
    subtitle: 'Northeastern University',
    description: 'Pursuing advanced studies in Applied Artificial Intelligence, focusing on machine learning, machine learning for cybersecurity, machine learning for healthcare and building intelligent systems.',
  },
  {
    date: '2025',
    title: 'Research Publication',
    subtitle: 'IOSR Journal',
    description: 'Published research paper contributing to the field of computer science and engineering.',
  },
  {
    date: '2021 — 2025',
    title: 'B.E. Computer Science (AI)',
    subtitle: 'Sathyabama University',
    description: 'Graduated with a focus on Artificial Intelligence. Served as Class Representative for 4 years and led the ACM Student Chapter.',
  },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/Ruthvik-Bandari' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ruthvik-nath-bandari-908b00247/' },
  { icon: Mail, href: 'mailto:ruthvik299@gmail.com' },
  { icon: Instagram, href: 'https://www.instagram.com/_rxthvik03' },
]

export default function About() {
  const { totalStars, totalForks, totalRepos } = useGitHubTotalStats()

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Header */}
      <section className="px-8 md:px-20 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-orbitron text-4xl md:text-5xl font-black mb-4">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-white/60 font-space">The story behind the code</p>
        </motion.div>
      </section>

      {/* About Grid */}
      <section className="px-8 md:px-20 mb-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold">
              Building the <span className="gradient-text">Future</span> with Code
            </h2>
            
            <p className="text-white/70 leading-relaxed">
              I'm Bandari Ruthvik Nath, a passionate technologist with an insatiable curiosity for artificial intelligence, machine learning, and cybersecurity. Currently completing my Master's in Applied AI at Northeastern University, I specialize in transforming complex problems into elegant, intelligent solutions.
            </p>
            
            <p className="text-white/70 leading-relaxed">
              My journey began at Sathyabama University, where I earned my B.E. in Computer Science with a focus on Artificial Intelligence. During those formative years, I served as class representative for all four years and led the ACM Student Chapter, building teams and delivering impactful technical projects.
            </p>

            <div className="glass-cyan rounded-2xl p-6 italic text-white/80">
              "The intersection of creativity and technology is where magic happens. I strive to build solutions that are not just functional, but transformative."
            </div>

            <p className="text-white/70 leading-relaxed">
              My expertise spans machine learning model development, cybersecurity research, and full stack development.
            </p>

            <p className="text-white/70 leading-relaxed">
              Beyond code, I'm an avid photographer, capturing the world through my lens and finding beauty in everyday moments. This creative outlet fuels my technical work, reminding me that the best solutions are both functional and aesthetically pleasing.
            </p>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:sticky lg:top-32"
          >
            <div className="glass-cyan rounded-3xl p-8 profile-float">
              {/* Avatar */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden
                              bg-gradient-to-br from-cyan to-purple p-1">
                <img 
                  src="/images/profile.png" 
                  alt="Bandari Ruthvik Nath" 
                  className="w-full h-full object-cover rounded-full bg-black"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement
                    if (fallback) fallback.style.display = 'flex'
                  }}
                />
                <div className="w-full h-full rounded-full bg-black items-center justify-center text-5xl hidden">
                  👨‍💻
                </div>
              </div>

              {/* Name & Title */}
              <h3 className="font-orbitron text-xl font-bold text-center mb-2">
                Bandari Ruthvik Nath
              </h3>
              <p className="text-cyan font-space text-sm text-center tracking-wider mb-6">
                AI & ML ENGINEER
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 rounded-xl bg-white/5">
                  <p className="font-orbitron text-2xl font-bold text-cyan">10+</p>
                  <p className="text-white/50 text-xs">Projects</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5">
                  <p className="font-orbitron text-2xl font-bold text-purple">4</p>
                  <p className="text-white/50 text-xs">Research</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-3 mb-6">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full glass flex items-center justify-center
                               hover:bg-cyan hover:text-black transition-all"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>

              {/* Now Playing */}
              <NowPlaying variant="compact" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-8 md:px-20 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <p className="font-space text-sm text-cyan tracking-[0.3em] uppercase mb-4">
              Expertise
            </p>
            <h2 className="font-orbitron text-3xl font-bold">
              Technical <span className="gradient-text">Skills</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="font-orbitron font-bold">{skill.name}</h3>
                </div>
                
                {/* Skill Bar */}
                <div className="h-2 bg-white/10 rounded-full mb-4 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, var(--cyan), var(--purple))',
                    }}
                  />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag) => (
                    <span key={tag} className="tag text-xs">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="px-8 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <p className="font-space text-sm text-cyan tracking-[0.3em] uppercase mb-4">
              Journey
            </p>
            <h2 className="font-orbitron text-3xl font-bold">
              My <span className="gradient-text">Timeline</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan via-purple to-pink" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-12 md:pl-20 pb-12 last:pb-0"
              >
                {/* Dot */}
                <div className="absolute left-2 md:left-6 top-1 w-5 h-5 rounded-full bg-black border-2 border-cyan z-10" />

                {/* Content */}
                <div className="glass rounded-2xl p-6">
                  <span className="text-cyan font-space text-sm">{item.date}</span>
                  <h3 className="font-orbitron font-bold text-lg mt-2">{item.title}</h3>
                  <p className="text-purple text-sm mb-2">{item.subtitle}</p>
                  <p className="text-white/60 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}
