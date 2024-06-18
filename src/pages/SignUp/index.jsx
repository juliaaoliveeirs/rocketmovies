import { FiUser, FiMail, FiLock } from 'react-icons/fi'

import { Container, Form, Background } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonBack } from '../../components/ButtonBack'

export function SignUp() {
  return (
    <Container>
      <Background />

      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="email" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button title="Cadastrar" />

        <ButtonBack to="/" title="Voltar para o login" />
      </Form>
    </Container>
  )
}
