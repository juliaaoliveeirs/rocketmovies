import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  margin-bottom: 2.4rem;

  > a {
    display: flex;
    align-items: center;
    justify-content: start;

    gap: 0.8rem;

    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`
