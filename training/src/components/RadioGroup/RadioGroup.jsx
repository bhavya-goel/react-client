import React from 'react'

function RadioGroup(props) {
    console.log('>>>>>>>>',props.value)
    const redio = props.options.map((obj, index) => {
        return(
            <>
                <label>{obj.label}</label>
                <input type='radio' name='sport' value={obj.value} onChange={props.onChange}>
                </input>
                <br/>
            </>
        )
    })
    return (
        <>
        <br/>
        <label><strong>What you do</strong></label>
        <br/>
        {redio}
        </>
    )
}

export default RadioGroup