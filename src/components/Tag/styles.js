import styled from 'styled-components'

export const Container = styled.span`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 1.2rem;
  padding: 0.5rem 1.6rem;
  border-radius: 0.8rem;

  margin-right: 0.8rem;
`
