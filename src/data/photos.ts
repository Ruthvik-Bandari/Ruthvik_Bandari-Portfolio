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
    url: '/images/gallery/beaches_boston.jpg',
    title: 'Beaches of Boston',
    category: 'nature',
    orientation: 'landscape',
  },
  {
    id: '2',
    url: '/images/gallery/cityscape.jpg',
    title: 'Cityscape',
    category: 'street',
    orientation: 'landscape',
  },
  {
    id: '3',
    url: '/images/gallery/clocktower.jpg',
    title: 'Clock Tower',
    category: 'architecture',
    orientation: 'portrait',
  },
  {
    id: '4',
    url: '/images/gallery/gothic-spire.jpg',
    title: 'Gothic Spire',
    category: 'architecture',
    orientation: 'portrait',
  },
  {
    id: '5',
    url: '/images/gallery/night-reflections.jpg',
    title: 'Night Reflections',
    category: 'street',
    orientation: 'landscape',
  },
  {
    id: '6',
    url: '/images/gallery/night_city_scape_Boston.jpg',
    title: 'Boston Night Skyline',
    category: 'street',
    orientation: 'landscape',
  },
  {
    id: '7',
    url: '/images/gallery/river_reflections.jpg',
    title: 'River Reflections',
    category: 'landscape',
    orientation: 'landscape',
  },
  {
    id: '8',
    url: '/images/gallery/seashores.jpg',
    title: 'Seashores',
    category: 'nature',
    orientation: 'landscape',
  },
  {
    id: '9',
    url: '/images/gallery/seashores_boston.jpg',
    title: 'Boston Seashores',
    category: 'nature',
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