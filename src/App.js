import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'base/globalStyles'
import theme from 'base/theme'

import Router from 'presenters/Router'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  )
}

export default App
