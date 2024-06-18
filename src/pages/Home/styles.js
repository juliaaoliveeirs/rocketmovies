import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 12rem auto;
  grid-template-areas:
    'header'
    'main';

  > main {
    grid-area: main;

    width: 100%;
    max-width: 113.7rem;
    margin: 4.8rem auto;
    padding: 0 3.2rem;
  }
`

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;

  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    background: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    font-size: 1.6rem;

    padding: 1.35rem 3.2rem;

    border: none;
    border-radius: 1rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  max-height: calc(100vh - 29.7rem);
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.8rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 0.8rem;
  }
`
