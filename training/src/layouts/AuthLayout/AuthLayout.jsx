import React from 'react'
import { Navbar } from '../components'

function AuthLayout({component: Component, ...rest}) {
    return(
       <>
        <Navbar/>
        <Component {...rest} />
       </>
    )
}
export default AuthLayout