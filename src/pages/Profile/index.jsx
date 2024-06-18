import { FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi'
import { Container, Form, Avatar } from './styles'

import { ButtonBack } from './../../components/ButtonBack'
import { Input } from './../../components/Input'
import { Button } from './../../components/Button'

export function Profile() {
  return (
    <Container>
      <header>
        <ButtonBack />
      </header>

      <Form>
        <Avatar>
          <img
            src="https://github.com/juliaaoliveeirs.png"
            alt="Foto do usuário"
          />

          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" />
          </label>
        </Avatar>

        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="email" icon={FiMail} />
        <Input placeholder="Senha atual" type="password" icon={FiLock} />
        <Input placeholder="Nova senha" type="password" icon={FiLock} />

        <Button type="submit" title="Salvar" disabled />
      </Form>
    </Container>
  )
}
