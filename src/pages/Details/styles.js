import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > main {
    max-width: 113.7rem;
    margin: 0 auto;

    padding: 4rem 2.4rem;
  }
`

export const Content = styled.main`
  max-height: calc(100vh - 29.7rem);
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.8rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 0.8rem;
  }
  > header {
    display: flex;
    flex-direction: column;

    justify-content: center;

    margin-bottom: 4rem;

    > div:first-child {
      display: flex;
      align-items: center;
      gap: 1.9rem;
    }
  }

  > p {
    margin-top: 4rem;

    line-height: 2.1rem;

    text-align: justify;
  }
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-top: 2.4rem;

  > span {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    > img {
      width: 1.6rem;
      height: 1.6rem;

      border-radius: 50%;

      border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_500};
    }

    > svg {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`
