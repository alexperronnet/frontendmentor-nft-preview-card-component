import { createGlobalStyle } from "styled-components"
import { rgba } from "polished"

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
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
    text-rendering: optimizeSpeed;
    background: ${props => props.theme.color.darkJungleGreen};
    font-family: ${props => props.theme.typography.fontFamily};
  }

  ::selection {
    color:  ${props => props.theme.color.aqua};
    background: ${props => rgba(props.theme.color.aqua, 0.1)};
  }

  img {
    display: block;
  }
`
