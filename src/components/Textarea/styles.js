import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  /* height: 274px; */

  border: 0;
  border-radius: 1rem;

  resize: none;

  padding: 1.2rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.WHITE};

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`
