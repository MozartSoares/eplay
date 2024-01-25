import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
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

const Home = () => {
  const { data: onSaleGames } = useGetOnSaleQuery()
  const { data: soonGames } = useGetSoonQuery()

  if (onSaleGames && soonGames) {
    return (
      <>
        <Banner />
        <ProductsList
          id="on-sale"
          games={onSaleGames}
          title={'Promoções'}
          background={'gray'}
        />
        <ProductsList
          games={soonGames}
          title={'Em breve'}
          background={'black'}
          id="coming-soon"
        />
      </>
    )
  }
  return <h4>carregando...</h4>
}

export default Home
