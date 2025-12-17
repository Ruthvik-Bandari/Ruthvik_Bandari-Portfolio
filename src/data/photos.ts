export interface Photo {
  id: string
  url: string
  title: string
  category: 'landscape' | 'street' | 'nature' | 'portrait' | 'architecture'
  orientation: 'landscape' | 'portrait'
}

export const vscoProfile = {
  username: 'rxthvik03',
  profileUrl: 'https://vsco.co/rxthvik03/gallery',
}

export const photos: Photo[] = [
  {
    id: '1',
    url: '/images/gallery/night-reflections.jpg',
    title: 'Night Reflections',
    category: 'street',
    orientation: 'landscape',
  },
  {
    id: '2',
    url: '/images/gallery/boston-architectural.jpg',
    title: 'Boston Architectural College',
    category: 'architecture',
    orientation: 'portrait',
  },
  {
    id: '3',
    url: '/images/gallery/golden-lights.jpg',
    title: 'Golden Lights',
    category: 'street',
    orientation: 'portrait',
  },
  {
    id: '4',
    url: '/images/gallery/holiday-glow.jpg',
    title: 'Holiday Glow',
    category: 'street',
    orientation: 'portrait',
  },
  {
    id: '5',
    url: '/images/gallery/gothic-spire.jpg',
    title: 'Gothic Spire',
    category: 'architecture',
    orientation: 'portrait',
  },
  {
    id: '6',
    url: '/images/gallery/harbor-nights.jpg',
    title: 'Harbor Nights',
    category: 'landscape',
    orientation: 'landscape',
  },
  {
    id: '7',
    url: '/images/gallery/aurora-dreams.jpg',
    title: 'Aurora Dreams',
    category: 'nature',
    orientation: 'portrait',
  },
  {
    id: '8',
    url: '/images/gallery/northern-lights.jpg',
    title: 'Northern Lights',
    category: 'nature',
    orientation: 'landscape',
  },
  {
    id: '9',
    url: '/images/gallery/dusk-silhouettes.jpg',
    title: 'Dusk Silhouettes',
    category: 'landscape',
    orientation: 'landscape',
  },
]

export const galleryCategories = [
  { id: 'all', label: 'All' },
  { id: 'landscape', label: 'Landscape' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'street', label: 'Street' },
  { id: 'nature', label: 'Nature' },
]
