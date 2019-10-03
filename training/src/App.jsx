import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme'
import List from './hoc/List'
import Table from './hoc/Table'

function App() {
  return (
    <>
      <CssBaseline>
        < MuiThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Redirect exact from='/' to='/list' />
            <Route path='/list' component={List} />
            <Route path='/table' component={Table} />
          </Switch>
        </Router>
        </ MuiThemeProvider>
      </CssBaseline>
    </>
  )
}

export default App;
