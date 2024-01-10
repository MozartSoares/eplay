import { Link } from 'react-router-dom'

import { HeaderBar, Links, LinkItem, LinkCart } from './styles'

import logo from '../../assets/images/logo.svg'
import carrinhoSvg from '../../assets/images/carrinho.svg'

const Header = () => (
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
    <LinkCart href="#">
      0 - produtos
      <img src={carrinhoSvg} alt="Carrinho" />
    </LinkCart>
  </HeaderBar>
)
export default Header
