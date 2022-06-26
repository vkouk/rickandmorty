import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: ${(props) => props.theme.remSize}px;
    font-family: ${(props) => props.theme.fonts.primary.name};
  }
  body {
    margin: 0;
    overflow: hidden;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  b,
  strong {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default GlobalStyles
