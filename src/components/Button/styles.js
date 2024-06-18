import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  background: ${({ theme, $isdelete }) =>
    $isdelete ? theme.COLORS.BACKGROUND_900 : theme.COLORS.PINK};
  color: ${({ theme, $isdelete }) =>
    $isdelete ? theme.COLORS.PINK : theme.COLORS.BACKGROUND_300};
  font-size: 1.6rem;
  font-weight: 500;

  padding: 1.75rem;

  border: none;
  border-radius: 1rem;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
