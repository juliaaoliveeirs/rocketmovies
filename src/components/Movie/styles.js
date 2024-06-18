import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.PINK_DARK};
  border: none;
  border-radius: 1.6rem;

  padding: 3.2rem;

  > h2 {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 0.8rem;
    text-align: left;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin: 1.5rem 0;
    max-height: 5.3rem;

    line-height: 1.5;

    overflow: hidden;
    text-overflow: ellipsis;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`
