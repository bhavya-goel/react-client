import React from 'react'
import style, { error as errorStyle, errorText} from './style'

function TextField(props) {
    const { value, error, disabled, onChange, onFocus } = props
    let fieldStyle = { ...style }
    if (error.length) {
        fieldStyle = {
            ...style,
            ...errorStyle
        }
    }
    return (
        <>
            <label> Name </label>
            <br/>
            <input
                type='text'
                onFocus={onFocus}
                onChange={onChange}
                name='textField'
                value={value}
                style={fieldStyle}
                disabled={disabled}
            >
            </input>
            { !error.length ?
                '' :
                <>
                    <span style={errorText} >{error}</span>
                </>
            }
        </>
    )
}

export default TextField
