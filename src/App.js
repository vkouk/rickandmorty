import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'base/globalStyles'
import theme from 'base/theme'

import Router from 'presenters/Router'

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Router />
  </ThemeProvider>
)

export default App
