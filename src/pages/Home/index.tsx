import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingSale } = useGetOnSaleQuery()
  const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery()

  {
    return (
      <>
        <Banner />
        <ProductsList
          id="on-sale"
          games={onSaleGames}
          title={'Promoções'}
          background={'gray'}
          isLoading={isLoadingSale}
        />
        <ProductsList
          games={soonGames}
          title={'Em breve'}
          background={'black'}
          id="coming-soon"
          isLoading={isLoadingSoon}
        />
      </>
    )
  }
}

export default Home
