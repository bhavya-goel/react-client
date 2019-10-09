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
        authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDc2MDhiNGE2NDZmMDQyNzY3MGNmZTUiLCJyb2xlIjoiaGVhZC10cmFpbmVyIiwiZW1haWwiOiJoZWFkLnRyYWluZXJAc3VjY2Vzc2l2ZS50ZWNoIiwibmFtZSI6ImhlYWRUcmFpbmVyIiwicGFzc3dvcmQiOiIkMmIkMTAkRFlVTUhyVHZqQmNHVjh0S2kvQm5SZTRVM1N6MlRCMXJuU3RoTDMuMVRSb2lXZ1V5VjlHbjIiLCJjcmVhdGVkQXQiOiIyMDE5LTA5LTA5VDA4OjA5OjI0Ljk1MloiLCJjcmVhdGVkQnkiOiI1ZDc2MDhiNGE2NDZmMDQyNzY3MGNmZTUiLCJvcmlnaW5hbElEIjoiNWQ3NjA4YjRhNjQ2ZjA0Mjc2NzBjZmU1IiwiX192IjowLCJpYXQiOjE1NzA2MjA0MjYsImV4cCI6MTU3MDYyMTMyNn0.f3T5-eOdsxrCZJewcWHYCHImOZLejXkf16ygsLD07uI'
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
