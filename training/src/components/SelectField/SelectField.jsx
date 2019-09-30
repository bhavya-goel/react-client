import React from 'react'

function SelectField(props) {
    const options = props.options.map((obj, index) => <option value={obj.value} key={index}>{obj.label}</option> )
    return (
        <>
        <label><strong> Select the game you play</strong></label>
        <br/>
        <select
            name="selectField"
            value={props.value || props.defaultText }
            onChange={props.onChange}
        >
        {
            options
        }
        </select>
        <br/>
        </>
    )
}
export default SelectField