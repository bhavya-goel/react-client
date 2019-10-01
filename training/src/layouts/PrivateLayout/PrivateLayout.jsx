import React from 'react'
function PrivateLayout({component: Component, ...rest}) {
    return (
        <>
       <Component {...rest} />
       </>
    )
}
export default  PrivateLayout