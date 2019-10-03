import React from 'react'
import PropTypes from 'prop-types'
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
List.propTypes = {
    data: PropTypes.array.isRequired
}
export default withHeader(List)