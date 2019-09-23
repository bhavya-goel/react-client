import React from 'react'
import style, { error } from './style'

function TextField(props) {
    //checks if props has a value field
    if (props.value) {
        return(
            <label>TextField:
                <br/>
                <input
                    type='text'
                    placeholder={props.value}
                    style={style}
                >
                </input>
            </label>
        )
    }
    //checks if props contain error field
    else if (props.error) {
        return(
            <label>Error TextField:
                <br/>
                <input
                    type='text'
                    placeholder={props.error}
                    style={error}
                    className='textError'
                >
                </input>
            </label>
        )

    }
    // check if props has disabled field
    else if (props.disabled) {
        return(
            <label> Disabled TextField:
                <br/>
                <input
                    value='Disabled'
                    disabled={props.disabled}
                    style={style}
                >
                </input>
            </label>
        )

    }
}

export default TextField
