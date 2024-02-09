import * as S from './styles'

const anoAtual = new Date().getFullYear()
console.log(anoAtual)

const Footer = () => (
  <S.Container>
    <div className="container">
      <S.FooterSection>
        <S.SectionTitle>Categorias</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link
              title="clique aqui para acessar jogos de RPG"
              to="/categories#rpg"
            >
              RPG
            </S.Link>
          </li>
          <li>
            <S.Link
              title="clique aqui para acessar jogos de ação"
              to="/categories#action"
            >
              Ação
            </S.Link>
          </li>
          <li>
            <S.Link
              title="clique aqui para acessar jogos de simulação"
              to="/categories#simulation"
            >
              Simulação
            </S.Link>
          </li>
          <li>
            <S.Link
              to="/categories#sports"
              title="clique aqui para acessar jogos de esportes"
            >
              Esportes
            </S.Link>
          </li>
          <li>
            <S.Link
              to="/categories#fight"
              title="clique aqui para acessar jogos de luta"
            >
              Luta
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <S.FooterSection>
        <S.SectionTitle>Acesso Rápido</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link title="ir para aba de promoções" to="/#on-sale">
              Promoções
            </S.Link>
          </li>
          <li>
            <S.Link title="ir para aba de breve" to="/#coming-soon">
              Em breve
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <p>{anoAtual} - &copy; E-Play Todos os direitos reservados</p>
    </div>
  </S.Container>
)

export default Footer
