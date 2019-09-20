import React from 'react'
import style, { error } from './style'

function TextField(props) {
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
    } else if (props.error) {
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

    } else if (props.disabled) {
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
