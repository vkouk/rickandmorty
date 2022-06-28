import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import theme from 'base/theme'

const TestProvider = ({ children }) => {
  TestProvider.propTypes = { children: PropTypes.node }

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default TestProvider
