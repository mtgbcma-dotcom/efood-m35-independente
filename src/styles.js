import { createGlobalStyle } from 'styled-components'

export const colors = {
  salmon: '#E66767',
  cream: '#FFF8F2',
  peach: '#FFEBD9',
  white: '#FFFFFF',
  gold: '#F5A623'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    min-width: 320px;
    background: ${colors.cream};
    color: ${colors.salmon};
    font-family: 'Roboto', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
  }

  a {
    color: inherit;
  }

  .container {
    width: min(1024px, calc(100% - 32px));
    margin: 0 auto;
  }
`
