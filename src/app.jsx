import styled, { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from "~/styles"
import { Card } from "~/components"

export const App = () => {
  return (
    <StyledApp>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Card />
      </ThemeProvider>
    </StyledApp>
  )
}

const StyledApp = styled.main``
