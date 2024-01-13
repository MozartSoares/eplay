import styled from 'styled-components'
import { Props } from '.'
import { cores } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'games' | 'title'>>`
  padding: 32px 0;
  background-color: ${(Props) =>
    Props.background === 'black' ? cores.preto : cores.cinza};

  ${Card} {
    background-color: ${(Props) =>
      Props.background === 'black' ? cores.cinza : cores.preto};
  }

  p {
    font-size: 14px;
    line-height: 22px;
    max-width: 640px;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
`
