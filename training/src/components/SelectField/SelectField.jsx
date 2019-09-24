import React from 'react'

function SelectField(props) {
    const { options, value, defaultText, onChange } = props
    const option = options.map((obj, index) => <option value={obj.value} key={index}>{obj.label}</option> )
    return (
        <>
        <label><strong> Select the game you play</strong></label>
        <br/>
        <select
            name="selectField"
            value={value || defaultText }
            onChange={onChange}
        >
        {
            option
        }
        </select>
        <br/>
        </>
    )
}
export default SelectField