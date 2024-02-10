import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: sportsGames, isLoading: isLoadingSports } =
    useGetSportGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()

  return (
    <>
      <ProductsList
        id="action"
        games={actionGames}
        title="Ação"
        background="black"
        isLoading={isLoadingAction}
      />
      <ProductsList
        id="fight"
        games={fightGames}
        title="Luta"
        background="gray"
        isLoading={isLoadingFight}
      />
      <ProductsList
        id="rpg"
        games={rpgGames}
        title="RPG"
        background="black"
        isLoading={isLoadingRpg}
      />
      <ProductsList
        id="simulation"
        games={simulationGames}
        title="Simulação"
        background="gray"
        isLoading={isLoadingSimulation}
      />
      <ProductsList
        id="sports"
        games={sportsGames}
        title="Esportes"
        background="black"
        isLoading={isLoadingSports}
      />
    </>
  )
}

export default Categories
