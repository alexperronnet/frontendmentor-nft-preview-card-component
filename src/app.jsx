import styled, { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from "~/styles"
import { Card } from "~/components"

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <GlobalStyle />
        <Card />
      </StyledApp>
    </ThemeProvider>
  )
}

const StyledApp = styled.main`
  height: 100vh;
  display: grid;
  place-items: center;
`
