import React from 'react'
import { Navbar } from '../components'
function PrivateLayout({component: Component, ...rest}) {
    return (
        <>
            <Navbar/>
            <Component {...rest}/>
        </>
    )
}
export default  PrivateLayout