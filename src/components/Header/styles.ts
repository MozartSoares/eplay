import { styled } from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.cinza};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }

  a {
    color: ${cores.branco};
    text-decoration: none;
    font-weight: bold;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const LinkItem = styled.li`
  margin-right: 16px;
`

export const CartButton = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    margin-left: 16px;
  }
`
