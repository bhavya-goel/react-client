import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme'
import { Login } from './pages'

function App() {
  return (
    <>
      <CssBaseline>
        < MuiThemeProvider theme={theme}>
          <Login />
        </ MuiThemeProvider>
      </CssBaseline>
    </>
  )
}

export default App;
