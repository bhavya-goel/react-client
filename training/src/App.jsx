import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme'
import { PrivateLayout } from './layouts'
import { Trainee } from './pages'

function App() {
  return (
    <>
      <CssBaseline>
        < MuiThemeProvider theme={theme}>
        <Router>
          <Switch>
            <PrivateLayout
              path='/'
              component={Trainee}
            />
          </Switch>
        </Router>
        </ MuiThemeProvider>
      </CssBaseline>
    </>
  )
}

export default App;
