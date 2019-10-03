import React from 'react'
import withHeader from './HocComponent'
function List(props) {
    const list = props.data.map((obj) => {
        return(
            <li key={obj.id}>
                {obj.name}
            </li>
        )
    })
    return (
        <>
            <u>
                {list}
            </u>
        </>
    )
}
export default withHeader(List)