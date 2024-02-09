import styled from 'styled-components'

import { Props } from '.'
import { breakpoints, colors } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'games' | 'title'>>`
  padding: 32px 0;
  background-color: ${(Props) =>
    Props.background === 'black' ? colors.black : colors.grey};

  ${Card} {
    background-color: ${(Props) =>
      Props.background === 'black' ? colors.grey : colors.black};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
  margin-top: 40px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
