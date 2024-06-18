import styled from 'styled-components'

import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 13.6rem;

  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.PINK};
    font-weight: 700;
  }

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > h2 {
    font-size: 2.4rem;
    font-weight: 500;
    margin: 4.8rem 0;
  }

  > button {
    margin-top: 0.8rem;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.PINK};
    margin-top: 4.2rem;
    font-size: 1.6rem;

    text-align: center;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`
