import React from 'react'

function RadioGroup(props) {
    console.log('in radio roup>>>>>>>>',props)
    const redio = props.options.map((obj, index) => {
        return(
            < React.Fragment key={index}>
                <input type='radio' name={props.name} value={obj.value} onChange={props.onChange} 
                    checked={obj.label === props.value}
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
        {redio}
        </>
    )
}

export default RadioGroup