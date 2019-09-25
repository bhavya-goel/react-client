import React from 'react'

function Button(props) {
    const { color, disabled, style, value, onClick } = props
    
    let buttonStyle = {
            ...style,
            backgroundColor: color
        }
    return (
        <>
            <br/>
            <br/>
            <input
                type="button"
                value={value}
                disabled={disabled}
                style={buttonStyle}
                onClick={onClick}
            />
        </>
    )
}
export default Button