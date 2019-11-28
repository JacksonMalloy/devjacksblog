import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { MyThemeProvider } from '../themeContext'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    font-family: 'Roboto', sans-serif;
  }

  body {
    padding: 0px;
    margin: 0;
    height: 100%;
    width: 100%;
    font-size: 1.5rem;
    line-height: 2;
    text-decoration: none;
    color: ${props => props.theme.subprimary}
  }

  a {
    color: ${props => props.theme.subprimary};
    text-decoration: none;
  }

  h3 {
    font-size: 3rem;
    line-height: 1.2;
    text-transform: uppercase;
  }
`

export default ({ children }) => (
  <>
    <MyThemeProvider>
      <GlobalStyle />
      {children}
    </MyThemeProvider>
  </>
)
