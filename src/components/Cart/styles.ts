import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'
import fechar from '../../assets/images/close 1.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: none;
  justify-content: flex-end;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  z-index: 1;
  background-color: ${cores.cinza};
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.branco};
  margin-bottom: 24px;
  span {
    display: block;
    font-size: 12px;
    color: ${cores.cinzaClaro};
  }
`

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${cores.branco};
  margin-top: 32px;
  margin-bottom: 36px;
`

export const CartItem = styled.li`
  position: relative;
  display: flex;
  border-bottom: 1px solid ${cores.cinzaClaro};
  padding: 8px 0;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    color: ${cores.branco};
    font-weight: bold;
    font-size: 16px;
  }

  span {
    display: block;
    color: ${cores.branco};
    font-weight: bold;
    font-size: 14px;
  }

  ${TagContainer} {
    margin: 8px 8px 16px 0;
  }

  button {
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 8px;
    right: 0;
  }
`
