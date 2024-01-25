import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button'
import Tag from '../Tag'
import {
  CartContainer,
  Overlay,
  Sidebar,
  Prices,
  Quantity,
  CartItem
} from './styles'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../ProductsList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const returnCartLength = () => {
    if (items.length === 1) {
      return `${items.length} jogo no carrinho`
    }
    return `${items.length} jogos no carrinho`
  }

  const cartText = returnCartLength()

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.prices.current!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{formataPreco(item.prices.current)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Quantity>{cartText}</Quantity>
        <Prices>
          Total de {formataPreco(getTotalPrice())}
          <span>em até 6x sem juros</span>
        </Prices>
        <Button type="button" title="clique aqui para continuar com a compra">
          Continuar com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
