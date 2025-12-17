import { useQuery } from '@tanstack/react-query'

interface LastFmTrack {
  name: string
  artist: {
    '#text': string
  }
  album: {
    '#text': string
  }
  image: Array<{
    '#text': string
    size: string
  }>
  url: string
  '@attr'?: {
    nowplaying: string
  }
}

interface LastFmResponse {
  recenttracks: {
    track: LastFmTrack[]
    '@attr': {
      user: string
      totalPages: string
      total: string
    }
  }
}

interface NowPlaying {
  isPlaying: boolean
  track: string
  artist: string
  album: string
  albumArt: string
  url: string
}

// Your Last.fm username - syncs with Apple Music!
const LASTFM_USERNAME = import.meta.env.VITE_LASTFM_USERNAME || 'RuthvikBandari'
const LASTFM_API_KEY = import.meta.env.VITE_LASTFM_API_KEY || ''

export function useNowPlaying() {
  return useQuery({
    queryKey: ['now-playing', LASTFM_USERNAME],
    queryFn: async (): Promise<NowPlaying | null> => {
      if (!LASTFM_API_KEY) {
        console.warn('Last.fm API key not configured')
        return null
      }

      try {
        const response = await fetch(
          `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json&limit=1`
        )

        if (!response.ok) return null

        const data: LastFmResponse = await response.json()
        const track = data.recenttracks.track[0]

        if (!track) return null

        const isPlaying = track['@attr']?.nowplaying === 'true'
        const albumArt = track.image.find(img => img.size === 'large')?.['#text'] || 
                         track.image.find(img => img.size === 'medium')?.['#text'] || ''

        return {
          isPlaying,
          track: track.name,
          artist: track.artist['#text'],
          album: track.album['#text'],
          albumArt: albumArt || '/images/default-album.png',
          url: track.url,
        }
      } catch (error) {
        console.error('Failed to fetch now playing:', error)
        return null
      }
    },
    refetchInterval: 30000, // Refresh every 30 seconds
    staleTime: 10000, // Consider data stale after 10 seconds
  })
}

// Get recent tracks history
export function useRecentTracks(limit: number = 10) {
  return useQuery({
    queryKey: ['recent-tracks', LASTFM_USERNAME, limit],
    queryFn: async () => {
      if (!LASTFM_API_KEY) return []

      try {
        const response = await fetch(
          `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json&limit=${limit}`
        )

        if (!response.ok) return []

        const data: LastFmResponse = await response.json()
        
        return data.recenttracks.track.map(track => ({
          track: track.name,
          artist: track.artist['#text'],
          album: track.album['#text'],
          albumArt: track.image.find(img => img.size === 'medium')?.['#text'] || '',
          url: track.url,
          isPlaying: track['@attr']?.nowplaying === 'true',
        }))
      } catch {
        return []
      }
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}

// Get top artists
export function useTopArtists(period: 'overall' | '7day' | '1month' | '3month' = '1month', limit: number = 5) {
  return useQuery({
    queryKey: ['top-artists', LASTFM_USERNAME, period, limit],
    queryFn: async () => {
      if (!LASTFM_API_KEY) return []

      try {
        const response = await fetch(
          `https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json&period=${period}&limit=${limit}`
        )

        if (!response.ok) return []

        const data = await response.json()
        
        return data.topartists.artist.map((artist: any) => ({
          name: artist.name,
          playcount: parseInt(artist.playcount),
          url: artist.url,
          image: artist.image.find((img: any) => img.size === 'medium')?.['#text'] || '',
        }))
      } catch {
        return []
      }
    },
    staleTime: 1000 * 60 * 30, // 30 minutes
  })
}
