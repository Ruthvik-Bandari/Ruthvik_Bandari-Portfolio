import { motion } from 'framer-motion'
import { ExternalLink, Rss, PenLine } from 'lucide-react'
import BlogCard from '@/components/BlogCard'
import { useBlogPosts } from '@/hooks/useBlog'

export default function Blog() {
  const { data: posts, isLoading, error } = useBlogPosts(12)

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
            My <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-white/60 font-space max-w-xl mx-auto mb-6">
            Thoughts on AI, Machine Learning, Tech, and everything in between.
          </p>
          
          {/* Hashnode Link */}
          <a
            href="https://ruthvikbandari.hashnode.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                       bg-blue-500/10 border border-blue-500/30 text-blue-400
                       hover:bg-blue-500/20 hover:border-blue-500/50 transition-all"
          >
            <PenLine size={18} />
            Follow on Hashnode
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </section>

      {/* Blog Grid */}
      <section className="px-8 md:px-20">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="glass rounded-3xl overflow-hidden animate-pulse">
                <div className="h-48 bg-white/5" />
                <div className="p-6">
                  <div className="h-4 w-32 bg-white/5 rounded mb-3" />
                  <div className="h-6 w-full bg-white/5 rounded mb-3" />
                  <div className="h-4 w-full bg-white/5 rounded mb-2" />
                  <div className="h-4 w-2/3 bg-white/5 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : error || !posts || posts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="glass rounded-3xl p-12">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 
                              flex items-center justify-center">
                <PenLine className="text-blue-400" size={32} />
              </div>
              <h3 className="font-orbitron text-xl font-bold mb-3">Blog Coming Soon!</h3>
              <p className="text-white/60 mb-6">
                I'm working on some exciting content about AI, Machine Learning, and my tech journey.
                Follow me on Hashnode to get notified when I publish!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://ruthvikbandari.hashnode.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <Rss size={16} /> Subscribe to Blog
                </a>
                <a
                  href="https://hashnode.com/@RuthvikBandari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  View Profile <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Placeholder Content Ideas */}
            <div className="mt-12">
              <h4 className="font-space text-sm text-cyan tracking-wide uppercase mb-6">Coming Soon Topics</h4>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { title: 'Building CTPPO', desc: 'How I built a cyber threat optimizer with GNNs' },
                  { title: 'n8n Automation Guide', desc: 'Automate your workflow with AI integrations' },
                  { title: 'My ML Journey', desc: 'From beginner to building production AI systems' },
                ].map((topic, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="glass rounded-2xl p-5 text-left"
                  >
                    <h5 className="font-orbitron font-bold mb-2">{topic.title}</h5>
                    <p className="text-white/50 text-sm">{topic.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {posts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </motion.div>
        )}
      </section>

      {/* Newsletter CTA */}
      <section className="px-8 md:px-20 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto glass-cyan rounded-3xl p-8 text-center"
        >
          <h3 className="font-orbitron text-2xl font-bold mb-3">
            Stay <span className="gradient-text">Updated</span>
          </h3>
          <p className="text-white/60 mb-6 max-w-lg mx-auto">
            Get notified when I publish new articles about AI, automation, and tech insights.
          </p>
          <a
            href="https://ruthvikbandari.hashnode.dev/newsletter"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            <Rss size={16} /> Subscribe to Newsletter
          </a>
        </motion.div>
      </section>
    </div>
  )
}
