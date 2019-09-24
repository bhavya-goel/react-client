import React from 'react'
import { errorText } from './style'

function RadioGroup(props) {
    const { options, onChange, name, value, onFocus, error } = props
    const radio = options.map((obj, index) => {
        return(
            < React.Fragment key={index}>
                <input
                    type='radio'
                    name={name}
                    value={obj.value}
                    onChange={onChange} 
                    onFocus={onFocus}
                    checked={obj.label === value}
                />
                <label>{obj.label}</label>
                <br/>
            </ React.Fragment>
        )
    })
    return (
        <>
        <br/>
        <label><strong>What you do</strong></label>
        <br/>
        {radio}
        { !error.length ?
            '' :
            <>
                <span style={errorText} >{error}</span>
            </>
        }
        </>
    )
}

export default RadioGroup