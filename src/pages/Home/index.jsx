import { Container, Section, Content } from './styles'
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Title } from '../../components/Title'
import { Movie } from '../../components/Movie'

export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <Section>
          <Title title="Meus filmes" />
          <Link to="/new">
            <FiPlus />
            Adicionar filme
          </Link>
        </Section>

        <Content>
          <Movie
            data={{
              id: 1,
              title: 'Interstellar',
              rating: 4,
              description:
                'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha dePragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand.',
              tags: [
                { id: 1, name: 'Ficção Científica' },
                { id: 2, name: 'Drama' },
                { id: 3, name: 'Familia' },
              ],
            }}
          />
        </Content>
      </main>
    </Container>
  )
}
