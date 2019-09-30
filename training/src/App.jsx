import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme'
import { Trainee, TextFieldDemo, NoMatch, Login, InputDemo, ChildrenDemo} from './pages'

function App() {
  return (
    <>
      <CssBaseline>
        < MuiThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path='/'
              component={Trainee}
            />
            <Route path='/textField-demo'
              component={TextFieldDemo}
            />
            <Route path='/Input-demo'
              component={InputDemo}
            />
            <Route path='/login'
              component={Login}
            />
            <Route path='/children-demo'
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
