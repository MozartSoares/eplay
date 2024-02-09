import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Button from '../Button'
import Tag from '../Tag'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import * as S from './styles'
import { getTotalPrice, parseToBrl } from '../../utils'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const navigate = useNavigate()

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

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    if (items.length > 0) {
      navigate('/checkout')
    } else {
      navigate('/')
    }
    closeCart()
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{parseToBrl(item.prices.current)}</span>
              </div>
              <button
                title="Clique aqui para remover o item"
                onClick={() => removeItem(item.id)}
                type="button"
              />
            </S.CartItem>
          ))}
        </ul>
        <S.Quantity>{cartText}</S.Quantity>
        <S.Prices>
          Total de {parseToBrl(getTotalPrice(items))}
          <span>em até 6x sem juros</span>
        </S.Prices>
        <Button
          type="button"
          onClick={goToCheckout}
          title="clique aqui para continuar com a compra"
        >
          Continuar com a compra
        </Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
