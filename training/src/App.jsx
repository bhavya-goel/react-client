import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme'
import { ChildrenDemo } from './components'

function App() {
  return (
    < MuiThemeProvider theme={theme}>
      <ChildrenDemo />
    </ MuiThemeProvider>
  )
}

export default App;
