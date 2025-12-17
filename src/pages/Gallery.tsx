import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, X, Camera } from 'lucide-react'
import { photos, vscoProfile, galleryCategories } from '@/data/photos'

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const filteredPhotos = activeFilter === 'all'
    ? photos
    : photos.filter(photo => photo.category === activeFilter)

  const openLightbox = (photoId: string) => {
    const index = filteredPhotos.findIndex(p => p.id === photoId)
    setCurrentIndex(index)
    setSelectedPhoto(photoId)
  }

  const closeLightbox = () => setSelectedPhoto(null)

  const goNext = () => {
    const nextIndex = (currentIndex + 1) % filteredPhotos.length
    setCurrentIndex(nextIndex)
    setSelectedPhoto(filteredPhotos[nextIndex].id)
  }

  const goPrev = () => {
    const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length
    setCurrentIndex(prevIndex)
    setSelectedPhoto(filteredPhotos[prevIndex].id)
  }

  const currentPhoto = filteredPhotos.find(p => p.id === selectedPhoto)

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
            Photo <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Gallery</span>
          </h1>
          <p className="text-white/60 font-space">
            Moments captured through my lens
          </p>
        </motion.div>
      </section>

      {/* VSCO Profile Link */}
      <section className="px-8 md:px-20 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex justify-center"
        >
          <a
            href={vscoProfile.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl glass
                       hover:border-pink-500/50 transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500
                            flex items-center justify-center">
              <Camera size={20} className="text-white" />
            </div>
            <div className="text-left">
              <h3 className="font-orbitron font-bold group-hover:text-pink-400 transition-colors">
                Follow on VSCO
              </h3>
              <p className="text-white/50 text-sm">@{vscoProfile.username}</p>
            </div>
            <ExternalLink size={16} className="text-white/30 group-hover:text-pink-400 transition-colors" />
          </a>
        </motion.div>
      </section>

      {/* Photo Count */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center text-white/40 text-sm font-space mb-8"
      >
        {filteredPhotos.length} photos
      </motion.p>

      {/* Filter Tabs */}
      <section className="px-8 md:px-20 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`
                px-6 py-2.5 rounded-full font-space text-sm font-medium
                transition-all duration-300 border
                ${activeFilter === cat.id
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white border-transparent'
                  : 'bg-white/5 text-white/70 border-white/10 hover:border-pink-500/50 hover:text-white'
                }
              `}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Gallery Grid */}
      <section className="px-8 md:px-20">
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => openLightbox(photo.id)}
                className="aspect-square rounded-2xl overflow-hidden cursor-pointer
                           glass hover:border-pink-500/50 transition-all group relative
                           bg-gradient-to-br from-pink-500/10 to-purple-500/10"
              >
                <img
                  src={photo.thumbnail}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    // Hide broken image and show fallback
                    e.currentTarget.style.display = 'none'
                  }}
                />
                {/* Overlay - always show title for better UX */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent
                                flex items-end justify-start p-4">
                  <span className="text-white text-sm font-space opacity-80 group-hover:opacity-100 transition-opacity">
                    {photo.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && currentPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-8"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10
                         flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <X size={24} />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev() }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full
                         bg-white/10 flex items-center justify-center text-white text-2xl
                         hover:bg-white/20 transition-colors z-10"
            >
              ‹
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext() }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full
                         bg-white/10 flex items-center justify-center text-white text-2xl
                         hover:bg-white/20 transition-colors z-10"
            >
              ›
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl max-h-[85vh] relative"
            >
              <img
                src={currentPhoto.url}
                alt={currentPhoto.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Info */}
              <div className="mt-4 text-center">
                <p className="text-white font-space">{currentPhoto.title}</p>
                <a
                  href={vscoProfile.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-pink-400 text-sm mt-2 hover:text-pink-300"
                >
                  View on VSCO <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
