import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme'
import { Login } from './pages'

function App() {
  return (
    < MuiThemeProvider theme={theme}>
      <Login />
    </ MuiThemeProvider>
  )
}

export default App;
