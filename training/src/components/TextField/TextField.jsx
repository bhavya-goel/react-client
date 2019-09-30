import React from 'react'
import style, { error as errorStyle} from './style'

function TextField(props) {
    const { value, error, disabled, onChange } = props
    let fieldStyle = style
    if (error.length) {
        fieldStyle = {
            ...style,
            ...errorStyle
        }
    }
    return (
        <input
            type='text'
            onChange={onChange}
            name='textField'
            value={value}
            style={fieldStyle}
            disabled={disabled}
        >
        </input>
    )
}

export default TextField
