import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportsGames } = useGetSportGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()

  if (actionGames && sportsGames && fightGames && rpgGames && simulationGames) {
    return (
      <>
        <ProductsList
          id="action"
          games={actionGames}
          title="Ação"
          background="black"
        />
        <ProductsList
          id="fight"
          games={fightGames}
          title="Luta"
          background="gray"
        />
        <ProductsList
          id="rpg"
          games={rpgGames}
          title="RPG"
          background="black"
        />
        <ProductsList
          id="simulation"
          games={simulationGames}
          title="Simulação"
          background="gray"
        />
        <ProductsList
          id="sports"
          games={sportsGames}
          title="Esportes"
          background="black"
        />
      </>
    )
  }
  return <h4>carregando...</h4>
}

export default Categories
