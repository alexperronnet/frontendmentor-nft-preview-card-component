import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    height: 100vh;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  * {
    margin: 0;
    padding: 0;
    font: inherit;
  }

  body {
    height: 100%;
    background: ${props => props.theme.color.darkJungleGreen};
    font-family: ${props => props.theme.typography.fontFamily};
  }
`
