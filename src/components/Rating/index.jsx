import { BiStar, BiSolidStar } from 'react-icons/bi'
import { Container } from './styles'

export function Rating({ value, ...rest }) {
  let stars = []

  for (let i = 1; i <= 5; i++) {
    if (i <= value) {
      stars.push(<BiSolidStar key={i} {...rest} />)
    } else {
      stars.push(<BiStar key={i} {...rest} />)
    }
  }

  return <Container>{stars}</Container>
}
