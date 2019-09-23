import React from 'react'

function RadioGroup(props) {
    const option = props.options.filter((obj) => {
        if (props.selectField in obj) {
            return true 
        }
        else return false
    })
    console.log(option[0])
    // const redio = props.options.map((obj) => <input>obj.label</input>)
    return (
        <h1>sd</h1>
    )
}

export default RadioGroup