import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import carrinhoSvg from '../../assets/images/carrinho.svg'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { useState } from 'react'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.Hamburger onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </S.Hamburger>
          <Link title="clique aqui para acessar a página inicial" to="/">
            <img src={logo} alt="EPLAY logo" />
          </Link>
          <nav>
            <S.Links>
              <S.LinkItem>
                <Link
                  title="clique aqui para acessar a página de categorias"
                  to="/categories"
                >
                  Categorias
                </Link>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  to="/#coming-soon"
                  title="clique aqui para acessar a página de novidades"
                >
                  Novidades
                </HashLink>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  to="/#on-sale"
                  title="clique aqui para acessar a página de promoções"
                >
                  Promoções
                </HashLink>
              </S.LinkItem>
            </S.Links>
          </nav>
        </div>
        <S.CartButton onClick={openCart}>
          {cartText}
          <img src={carrinhoSvg} alt="Carrinho" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          <S.LinkItem>
            <Link onClick={() => setIsMenuOpen(false)} to="/categories">
              Categorias
            </Link>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink onClick={() => setIsMenuOpen(false)} to="/#coming-soon">
              Novidades
            </HashLink>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink onClick={() => setIsMenuOpen(false)} to="/#on-sale">
              Promoções
            </HashLink>
          </S.LinkItem>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}
export default Header
