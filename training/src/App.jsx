import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme'
import { InputDemo } from './components'

function App() {
  return (
    < MuiThemeProvider theme={theme}>
      <InputDemo />
    </ MuiThemeProvider>
  )
}

export default App;
