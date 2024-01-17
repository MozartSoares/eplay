import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import { useState } from 'react'

type Game = {}

const Home = () => {
  const [promocoes, setPromocoes] = useState([])
  const [emBreve, setEmBreve] = useState([])

  return (
    <>
      <Banner />
      <ProductsList games={promocoes} title={'Promoções'} background={'gray'} />
      <ProductsList games={emBreve} title={'Em breve'} background={'black'} />
    </>
  )
}

export default Home
