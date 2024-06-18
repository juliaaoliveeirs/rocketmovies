import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Container, Brand, Search, Profile } from './styles'

import { Input } from '../Input'

export function Header() {
  return (
    <Container>
      <Brand>RocketMovies</Brand>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </Search>

      <Profile to="/profile">
        <div>
          <strong>Julia Oliveira</strong>
          <a href="to">sair</a>
        </div>
        <img
          src="https://github.com/juliaaoliveeirs.png"
          alt="Foto do usuário"
        />
      </Profile>
    </Container>
  )
}
