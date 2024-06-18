import {
  Container,
  Form,
  SectionInput,
  SectionTags,
  SectionButtons,
} from './styles'

import { Header } from '../../components/Header'
import { Title } from '../../components/Title'
import { ButtonBack } from '../../components/ButtonBack'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { MovieItem } from '../../components/MovieItem'
import { Button } from '../../components/Button'

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <ButtonBack />
        <Form>
          <Title title="Novo Filme" />

          <SectionInput>
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </SectionInput>

          <Textarea rows="15" placeholder="Observações" />

          <SectionTags>
            <h3>Marcadores</h3>
            <div className="tags">
              <MovieItem value="react" />
              <MovieItem isNew placeholder="Novo marcador" />
            </div>
          </SectionTags>

          <SectionButtons>
            <Button isDelete type="button" title="Excluir" />
            <Button type="submit" title="Salvar alterações" />
          </SectionButtons>
        </Form>
      </main>
    </Container>
  )
}
