import React from 'react'
import { style as buttonStyle } from './style'

function Button(props) {
    const { color, disabled, value, onClick } = props
    
    let buttonS = {
            ...buttonStyle[color]
        }
    return (
        <>
            <br/>
            <br/>
            <input
                type="button"
                value={value}
                disabled={disabled}
                style={buttonS}
                onClick={onClick}
            />
        </>
    )
}
export default Button