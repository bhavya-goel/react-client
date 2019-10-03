import React from 'react'
import Header from './Header'
import trainees from './data/trainee'
const withHeader = (WrappedComponent) => {
    return () => {
        return (
            <>
                <Header />
                <WrappedComponent data={trainees} />
            </>
        )
    }
}
export default withHeader