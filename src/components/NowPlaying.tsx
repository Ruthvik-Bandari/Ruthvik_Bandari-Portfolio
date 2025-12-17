import { motion } from 'framer-motion'
import { Music, Disc3, ExternalLink } from 'lucide-react'
import { useNowPlaying } from '@/hooks/useNowPlaying'

interface NowPlayingProps {
  variant?: 'compact' | 'full'
  className?: string
}

export default function NowPlaying({ variant = 'compact', className = '' }: NowPlayingProps) {
  const { data: nowPlaying, isLoading } = useNowPlaying()

  if (isLoading) {
    return (
      <div className={`glass rounded-2xl p-4 ${className}`}>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-white/10 animate-pulse" />
          <div className="flex-1">
            <div className="h-4 w-24 bg-white/10 rounded animate-pulse mb-2" />
            <div className="h-3 w-32 bg-white/10 rounded animate-pulse" />
          </div>
        </div>
      </div>
    )
  }

  if (!nowPlaying) {
    return (
      <div className={`glass rounded-2xl p-4 ${className}`}>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 
                          flex items-center justify-center">
            <Music className="text-pink-400" size={20} />
          </div>
          <div>
            <p className="text-white/50 text-sm">Not Playing</p>
            <p className="text-white/30 text-xs">Apple Music • Offline</p>
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'compact') {
    return (
      <motion.a
        href={nowPlaying.url}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`glass rounded-2xl p-4 block hover:border-pink-500/50 transition-all group ${className}`}
      >
        <div className="flex items-center gap-3">
          {/* Album Art */}
          <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0">
            {nowPlaying.albumArt ? (
              <img 
                src={nowPlaying.albumArt} 
                alt={nowPlaying.album}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 
                              flex items-center justify-center">
                <Disc3 className="text-pink-400" size={20} />
              </div>
            )}
            
            {/* Playing indicator */}
            {nowPlaying.isPlaying && (
              <div className="absolute bottom-1 right-1 flex gap-0.5">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-0.5 bg-green-400 rounded-full"
                    animate={{
                      height: [4, 12, 4],
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Track Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              {nowPlaying.isPlaying ? (
                <span className="text-green-400 text-xs font-space">Now Playing</span>
              ) : (
                <span className="text-white/50 text-xs font-space">Recently Played</span>
              )}
              <Music size={12} className="text-pink-400" />
            </div>
            <p className="text-white font-medium text-sm truncate">{nowPlaying.track}</p>
            <p className="text-white/50 text-xs truncate">{nowPlaying.artist}</p>
          </div>

          <ExternalLink size={14} className="text-white/30 group-hover:text-pink-400 transition-colors shrink-0" />
        </div>
      </motion.a>
    )
  }

  // Full variant
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`glass-cyan rounded-3xl p-6 ${className}`}
    >
      <div className="flex items-center gap-2 mb-4">
        <Music className="text-pink-400" size={18} />
        <span className="font-space text-sm text-pink-400">
          {nowPlaying.isPlaying ? 'Now Playing' : 'Recently Played'}
        </span>
        {nowPlaying.isPlaying && (
          <div className="flex gap-0.5 ml-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-0.5 bg-green-400 rounded-full"
                animate={{
                  height: [4, 16, 4],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        )}
      </div>

      <div className="flex gap-4">
        {/* Album Art */}
        <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 shadow-lg shadow-black/50">
          {nowPlaying.albumArt ? (
            <img 
              src={nowPlaying.albumArt} 
              alt={nowPlaying.album}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-pink-500 to-purple-600 
                            flex items-center justify-center">
              <Disc3 className="text-white" size={32} />
            </div>
          )}
          
          {/* Spinning disc effect */}
          {nowPlaying.isPlaying && (
            <motion.div
              className="absolute inset-0 border-2 border-white/20 rounded-2xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
          )}
        </div>

        {/* Track Info */}
        <div className="flex-1 min-w-0">
          <h4 className="font-orbitron font-bold text-lg truncate">{nowPlaying.track}</h4>
          <p className="text-pink-400 text-sm truncate">{nowPlaying.artist}</p>
          <p className="text-white/40 text-xs truncate mt-1">{nowPlaying.album}</p>
          
          <a
            href={nowPlaying.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-3 text-xs text-white/50 
                       hover:text-pink-400 transition-colors"
          >
            View on Last.fm <ExternalLink size={10} />
          </a>
        </div>
      </div>
    </motion.div>
  )
}
