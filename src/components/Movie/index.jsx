import { Container } from './styles'

import { Rating } from '../Rating'
import { Tag } from '../Tag'

export function Movie({ data }) {
  return (
    <Container to={`/details/${data.id}`}>
      <h2>{data.title}</h2>

      <Rating value={data.rating} />
      <p>{data.description}</p>

      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} text={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  )
}
