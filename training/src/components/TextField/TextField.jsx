import React from 'react'
import style, { error } from './style'

function TextField(props) {
    let fieldStyle = style
    if ('error' in props) {
        fieldStyle = {
            ...style,
            ...error
        }
    }
    return (
        <input
            type='text'
            onChange={props.onChange}
            name='textField'
            value={props.value}
            style={fieldStyle}
            disabled={props.disabled}
        >
        </input>
    )
}

export default TextField
