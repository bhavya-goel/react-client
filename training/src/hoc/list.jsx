import React from 'react'
const withListName = (prop) => (WrappedComponent) => {
    return (props) => {
        return (
            <WrappedComponent greet={prop} {...props}  />
        )
    }
}
function List(props) {
    return (
        <h1>
            {console.log('-----------', props)}
        </h1>
    )

}
export default withListName('hello')(List)