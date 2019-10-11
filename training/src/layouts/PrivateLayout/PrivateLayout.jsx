import React from 'react'
import { withRouter } from 'react-router-dom'
import { Navbar } from '../components'
function PrivateLayout({component: Component, ...rest}) {
    return (
        <>
            <Navbar/>
            <Component {...rest}/>
        </>
    )
}
export default  withRouter(PrivateLayout)