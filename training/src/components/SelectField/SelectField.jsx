import React from 'react'

function SelectField(props) {
    const options = props.options.map((obj) => <option value={obj.value} >{obj.label}</option> )
    return (
        <select
            name="selectField"
            value={props.value || props.defaultText }
            onChange={props.onChange}
        >
        {
            options
        }
        </select>
    )
}
export default SelectField