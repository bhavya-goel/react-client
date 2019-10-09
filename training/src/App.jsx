import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme'
import { PrivateLayout, AuthLayout } from './layouts'
import { TraineeList, GetTrainee, Login, NoMatch, TextFieldDemo, ChildrenDemo, InputDemo, TraineeDetail } from './pages'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  uri: 'http:///localhost:4000',
  request: (operation) => {
    operation.setContext({
      headers: {
        authorization: localStorage.getItem('token')
      }
    })
  }
})
function App() {
  return (
    <>
      <CssBaseline>
        < MuiThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            <Router>
            <Switch>
              <Redirect exact from='/' to='/trainee' />
              <AuthLayout exact
                path='/login'
                client={client}
                component={Login}
              />
              <PrivateLayout
                exact
                path='/trainee/:id'
                component={TraineeDetail}
              />
              <PrivateLayout
                exact
                path='/trainee'
                component={TraineeList}
              />
              <PrivateLayout
                exactpath='/getTrainee'
                component={GetTrainee}
              />
              <PrivateLayout
                exact
                path='/textField-demo'
                component={TextFieldDemo}
              />
              <PrivateLayout
                exact
                path='/Input-demo'
                component={InputDemo}
              />
              <PrivateLayout
                exact
                path='/children-demo'
                component={ChildrenDemo}
              />
              <Route component={NoMatch} />
            </Switch>
          </Router>
          </ApolloProvider>
        </ MuiThemeProvider>
      </CssBaseline>
    </>
  )
}

export default App;
