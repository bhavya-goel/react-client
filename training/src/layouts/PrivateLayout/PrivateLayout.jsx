import React from 'react'
function PrivateLayout({component: Component}) {
    return (
        <>
       <Component />
       </>
    )
}
export default  PrivateLayout