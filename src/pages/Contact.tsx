import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, Github, Linkedin, Instagram, Camera, CheckCircle, AlertCircle } from 'lucide-react'

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/Ruthvik-Bandari' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ruthvik-nath-bandari-908b00247/' },
  { icon: Mail, label: 'Email', href: 'mailto:ruthvik299@gmail.com' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/_rxthvik03' },
  { icon: Camera, label: 'VSCO', href: 'https://vsco.co/rxthvik03/gallery' },
]

const subjectOptions = [
  { value: '', label: 'Select a topic' },
  { value: 'job', label: 'Job Opportunity / Hiring' },
  { value: 'coop', label: 'Co-op / Internship' },
  { value: 'project', label: 'Project Inquiry' },
  { value: 'collaboration', label: 'Collaboration' },
  { value: 'automation', label: 'AI Automation Services' },
  { value: 'other', label: 'Other' },
]

// Formspree form ID
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || 'your-form-id'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `Portfolio Contact: ${formData.subject}`,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitStatus('idle'), 10000)
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Something went wrong. Please try again or email me directly.')
      setTimeout(() => setSubmitStatus('idle'), 10000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Header */}
      <section className="px-8 md:px-20 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="font-orbitron text-4xl md:text-5xl font-black mb-4">
            Get in <span className="bg-gradient-to-r from-emerald-400 to-cyan bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-white/60 font-space">
            Let's create something amazing together
          </p>
        </motion.div>
      </section>

      <div className="px-8 md:px-20 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-orbitron text-2xl font-bold mb-4">
                Open to <span className="bg-gradient-to-r from-emerald-400 to-cyan bg-clip-text text-transparent">Opportunities</span>
              </h2>
              <p className="text-white/70 leading-relaxed">
                I'm a Master's student in Applied AI at Northeastern University, actively seeking <strong className="text-white">Co-op, Internship, and Full-time</strong> opportunities in Machine Learning Engineering, AI Research, and Data Science. With hands-on experience in building ML pipelines, AI automation solutions, and full-stack applications, I'm ready to contribute to innovative teams and challenging projects.
              </p>
            </div>

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full
                            bg-emerald-500/10 border border-emerald-500/30">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-emerald-400 font-space text-sm">
                Available for Co-op / Internship / Full-time Roles
              </span>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <a
                href="mailto:ruthvik299@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl glass hover:border-emerald-500/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan/20
                                flex items-center justify-center group-hover:from-emerald-500/30">
                  <Mail className="text-emerald-400" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-white">Email</h3>
                  <p className="text-white/60 text-sm">ruthvik299@gmail.com</p>
                  <p className="text-white/60 text-sm">bandari.ru@northeastern.edu</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/ruthvik-nath-bandari-908b00247/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl glass hover:border-emerald-500/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan/20
                                flex items-center justify-center">
                  <Linkedin className="text-emerald-400" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-white">LinkedIn</h3>
                  <p className="text-white/60 text-sm">Connect with me</p>
                </div>
              </a>

              <a
                href="https://github.com/Ruthvik-Bandari"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl glass hover:border-emerald-500/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan/20
                                flex items-center justify-center">
                  <Github className="text-emerald-400" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-white">GitHub</h3>
                  <p className="text-white/60 text-sm">View my code</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl glass">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan/20
                                flex items-center justify-center">
                  <MapPin className="text-emerald-400" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-white">Location</h3>
                  <p className="text-white/60 text-sm">Boston, Massachusetts</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center
                             hover:border-emerald-500/50 hover:text-emerald-400 transition-all"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 space-y-6 relative overflow-hidden">
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute inset-0 bg-black/90 z-10 flex flex-col items-center justify-center text-center p-8"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
                    <CheckCircle className="text-emerald-400" size={32} />
                  </div>
                  <h3 className="font-orbitron text-xl font-bold text-emerald-400 mb-2">Message Sent!</h3>
                  <p className="text-white/60">I'll get back to you soon.</p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-red-500/20 border border-red-500/30 text-red-400 text-sm flex items-center gap-3"
                >
                  <AlertCircle size={20} />
                  <span>{errorMessage}</span>
                </motion.div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm text-white/50 mb-2">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="input-glass"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm text-white/50 mb-2">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="input-glass"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-white/50 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-glass"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm text-white/50 mb-2">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="input-glass appearance-none"
                >
                  {subjectOptions.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-black">
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-white/50 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="input-glass resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-2xl font-bold text-black
                           bg-gradient-to-r from-emerald-400 to-cyan
                           hover:shadow-lg hover:shadow-emerald-500/30
                           disabled:opacity-50 disabled:cursor-not-allowed
                           transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin">⏳</span> Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
