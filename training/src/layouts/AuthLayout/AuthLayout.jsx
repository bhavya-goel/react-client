import React from 'react'
import { Navbar } from '../components'

function AuthLayout({component: Component}) {
    return(
       <>
        <Navbar/>
        <Component />
       </>
    )
}
export default AuthLayout