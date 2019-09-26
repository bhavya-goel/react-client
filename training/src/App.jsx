import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme'
import { Trainee } from './components'

function App() {
  return (
    < MuiThemeProvider theme={theme}>
      <Trainee />
    </ MuiThemeProvider>
  )
}

export default App;
