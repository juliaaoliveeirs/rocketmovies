import { FiArrowLeft } from 'react-icons/fi'
import { Container } from './styles'
import { Link } from 'react-router-dom'

export function ButtonBack({ title = 'Voltar' }) {
  return (
    <Container>
      <Link to="/">
        <FiArrowLeft /> {title}
      </Link>
    </Container>
  )
}
