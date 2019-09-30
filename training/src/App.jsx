import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme'
import { Trainee } from './pages'

function App() {
  return (
    <>
      <CssBaseline>
        < MuiThemeProvider theme={theme}>
          <Trainee />
        </ MuiThemeProvider>
      </CssBaseline>
    </>
  )
}

export default App;
