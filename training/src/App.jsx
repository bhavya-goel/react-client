import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme'
import { PrivateLayout, AuthLayout } from './layouts'
import { TraineeList, Login, NoMatch, TextFieldDemo, ChildrenDemo, InputDemo, TraineeDetail } from './pages'

function App() {
  return (
    <>
      <CssBaseline>
        < MuiThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Redirect exact from='/' to='/trainee' />
            <AuthLayout exact
              path='/login'
              component={Login}
            />
            <PrivateLayout
              exact
              path='/trainee/:id'
              component={TraineeDetail}
            />
            <PrivateLayout
              path='/trainee'
              component={TraineeList}
            />
            <PrivateLayout
              path='/textField-demo'
              component={TextFieldDemo}
            />
            <PrivateLayout
              path='/Input-demo'
              component={InputDemo}
            />
            <PrivateLayout
              path='/children-demo'
              component={ChildrenDemo}
            />
            <Route component={NoMatch} />
          </Switch>
        </Router>
        </ MuiThemeProvider>
      </CssBaseline>
    </>
  )
}

export default App;
