import React from 'react'
import { ThemeProvider } from 'styled-components'

const ThemeToggleContext = React.createContext()

export const useTheme = () => React.useContext(ThemeToggleContext)

const lightTheme = {
  highlightcolor: '#1b61a9',
  primary: '#f4f4f4',
  subprimary: '#333333',
  backgroundcolor: '#ffffff',
  desktopMax: '1700px',
  tabletMax: '950px',
  mobileMax: '555px',
}

const darkTheme = {
  highlightcolor: '#66abf2',
  primary: '#090909',
  subprimary: '#f5f5f5',
  backgroundcolor: '#000000',
  desktopMax: '1700px',
  tabletMax: '950px',
  mobileMax: '555px',
}

const blackWhiteTheme = {
  highlightcolor: '#090909',
  primary: '#090909',
  subprimary: '#f9f9f9',
  backgroundcolor: '#000000',
  desktopMax: '1700px',
  tabletMax: '950px',
  mobileMax: '555px',
}

export const MyThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = React.useState({
    mode: lightTheme,
  })

  const toggle = () => {
    const themeArray = [blackWhiteTheme, lightTheme, darkTheme]

    const mode = themeState.mode === lightTheme ? darkTheme : lightTheme

    setThemeState({ mode: mode })
  }

  return (
    <ThemeToggleContext.Provider value={{ toggle: toggle }}>
      <ThemeProvider theme={themeState.mode}>{children}</ThemeProvider>
    </ThemeToggleContext.Provider>
  )
}

export default ThemeProvider
