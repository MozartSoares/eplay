import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { HeaderBar, Links, LinkItem, CartButton } from './styles'

import logo from '../../assets/images/logo.svg'
import carrinhoSvg from '../../assets/images/carrinho.svg'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  const returnCartLength = () => {
    if (items.length === 1) {
      return `${items.length} - produto`
    }
    return `${items.length} - produtos`
  }

  const cartText = returnCartLength()

  return (
    <HeaderBar>
      <div>
        <Link to="/">
          <img src={logo} alt="EPLAY logo" />
        </Link>
        <nav>
          <Links>
            <LinkItem>
              <Link to="/categories">Categorias</Link>
            </LinkItem>
            <LinkItem>
              <a href="#">Novidades</a>
            </LinkItem>
            <LinkItem>
              <a href="#">Promoções</a>
            </LinkItem>
          </Links>
        </nav>
      </div>
      <CartButton onClick={openCart}>
        {cartText}
        <img src={carrinhoSvg} alt="Carrinho" />
      </CartButton>
    </HeaderBar>
  )
}
export default Header
