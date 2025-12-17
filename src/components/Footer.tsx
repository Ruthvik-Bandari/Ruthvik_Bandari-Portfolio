import { Github, Linkedin, Mail, Instagram, Camera } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/Ruthvik-Bandari', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ruthvik-nath-bandari-908b00247/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:ruthvik299@gmail.com', label: 'Email' },
  { icon: Instagram, href: 'https://www.instagram.com/_rxthvik03', label: 'Instagram' },
  { icon: Camera, href: 'https://vsco.co/rxthvik03/gallery', label: 'VSCO' },
]

export default function Footer() {
  return (
    <footer className="px-8 md:px-20 py-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-white/40 text-sm font-space">
        © 2025 Bandari Ruthvik Nath. Crafted with passion.
      </p>
      
      <div className="flex gap-4">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            title={social.label}
            className="w-11 h-11 rounded-full flex items-center justify-center
                       bg-white/5 border border-white/10 text-white
                       hover:bg-cyan hover:border-cyan hover:text-black
                       transition-all duration-300 hover:-translate-y-1"
          >
            <social.icon size={18} />
          </a>
        ))}
      </div>
    </footer>
  )
}
