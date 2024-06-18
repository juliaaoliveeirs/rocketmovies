import styled from 'styled-components'

export const Container = styled.div`
  > header {
    width: 100%;
    height: 14.4rem;

    background: ${({ theme }) => theme.COLORS.PINK_DARK};

    display: flex;
    align-items: center;

    padding: 0 14.4rem;
  }
`

export const Form = styled.div`
  max-width: 34rem;

  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > div:nth-child(3),
  div:nth-child(5) {
    margin-bottom: 2.4rem;
  }
`

export const Avatar = styled.div`
  position: relative;

  margin: -9rem auto 6.4rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;
  }

  label {
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 4.8rem;
    height: 4.8rem;

    border-radius: 50%;

    padding: 1.4rem;

    background: ${({ theme }) => theme.COLORS.PINK};

    bottom: 0.7rem;
    right: 0.7rem;

    cursor: pointer;

    svg {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_300};
      font-size: 2rem;
    }
  }

  input {
    display: none;
  }
`
