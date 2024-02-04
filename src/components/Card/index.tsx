import { Container } from './styles'

type Props = {
  children: JSX.Element
  title: string
}

const Card = ({ children, title }: Props) => {
  return (
    <Container>
      <h2>{title}</h2>
      {children}
    </Container>
  )
}

export default Card
