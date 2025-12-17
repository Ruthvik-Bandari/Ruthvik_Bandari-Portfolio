import { motion } from 'framer-motion'
import { Calendar, Clock, ExternalLink, BookOpen } from 'lucide-react'
import { formatDate } from '@/utils/helpers'
import type { BlogPost } from '@/hooks/useBlog'

interface BlogCardProps {
  post: BlogPost
  index: number
}

export default function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group block glass rounded-3xl overflow-hidden hover:border-cyan/50 transition-all"
    >
      {/* Cover Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-cyan/10 to-purple/10">
        {post.coverImage && post.coverImage !== '/images/default-blog.png' ? (
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <BookOpen className="text-cyan/30" size={48} />
          </div>
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        {/* Tags */}
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
          {post.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 rounded-full text-xs bg-cyan/20 border border-cyan/30 text-cyan"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center gap-4 text-white/40 text-xs mb-3">
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {formatDate(post.publishedAt)}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {post.readTime} min read
          </span>
        </div>

        {/* Title */}
        <h3 className="font-orbitron font-bold text-lg mb-3 line-clamp-2 group-hover:text-cyan transition-colors">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-white/60 text-sm line-clamp-3 mb-4">
          {post.excerpt}
        </p>

        {/* Read More */}
        <div className="flex items-center gap-2 text-cyan text-sm font-space">
          <span>Read Article</span>
          <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.a>
  )
}
