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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4rem;
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

export const SectionInput = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
`

export const SectionTags = styled.section`
  > h3 {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-weight: 400;
  }

  .tags {
    width: 100%;

    display: flex;
    align-items: center;
    gap: 2.4rem;

    padding: 1.6rem;
    margin-top: 2.4rem;

    border-radius: 0.8rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }
`

export const SectionButtons = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
`
