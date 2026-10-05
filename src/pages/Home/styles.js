import styled from 'styled-components'

export const Main = styled.main`
  min-height: 400px;
  padding-top: 80px;
`

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 48px 80px;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`
