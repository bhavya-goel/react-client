import React from 'react'
import { AuthLayout } from '../AuthLayout'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Trainee, TextFieldDemo, InputDemo, ChildrenDemo, Login, NoMatch } from '../../pages'

function PrivateLayout({computedMatch}) {
    console.log(computedMatch)
    return (
        <>
            <Router>
                <Switch>
                    <Redirect exact from='/' to='/trainee' />
                    <Route path='/trainee'
                        component={Trainee}
                    />
                    <Route path='/textField-demo'
                        component={TextFieldDemo}
                    />
                    <Route path='/Input-demo'
                        component={InputDemo}
                    />
                    <Route path='/children-demo'
                        component={ChildrenDemo}
                    />
                    <AuthLayout
                        path='/login'
                        component={Login}
                    />
                    <Route component={NoMatch} />
                </Switch>
            </Router>
        </>
    )
}
export default  PrivateLayout