declare interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

declare type Game = {
  category: string
  image: string
  infos: string[]
  title: string
  system: string
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}
