import React from 'react'
import { errorText } from './style'

function SelectField(props) {
    const { options, value, defaultText, onChange, onFocus, error, onBlur } = props
    const option = options.map((obj, index) => <option value={obj.value} key={index}>{obj.label}</option> )
    return (
        <>
        <label><strong> Select the game you play</strong></label>
        <br/>
        <select
            name="sport"
            value={value || defaultText }
            onBlur={onBlur}
            onChange={onChange}
            onFocus={onFocus}
        >
        {
            option
        }
        </select>
        <br/>
        { !error.length ?
            '' :
            <>
                <span style={errorText} >{error}</span>
            </>
        }
        <br/>
        </>
    )
}
export default SelectField