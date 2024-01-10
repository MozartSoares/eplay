import Product from '../Product'
import { Container, List } from './styles'
import Game from '../../models/game'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductsList = ({ background, title, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            category={game.category}
            description={game.description}
            image={game.image}
            infos={game.infos}
            title={game.title}
            system={game.system}
          />
        ))}
      </List>
    </div>
  </Container>
)
export default ProductsList
