import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 12.3rem;
  gap: 6.4rem;

  grid-area: header;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_500};
`
export const Brand = styled.div`
  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: 2.4rem;
  font-weight: 700;
`

export const Search = styled.div`
  flex: 1;
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 0.9rem;

  img {
    width: 6.4rem;
    height: 6.4rem;

    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_500};
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    text-align: right;
    font-size: 1.4rem;

    strong {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    a {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`
