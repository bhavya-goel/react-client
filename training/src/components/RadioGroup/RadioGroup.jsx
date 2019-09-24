import React from 'react'

function RadioGroup(props) {
    const { options, onChange, name, value } = props
    const radio = options.map((obj, index) => {
        return(
            < React.Fragment key={index}>
                <input type='radio' name={name} value={obj.value} onChange={onChange} 
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
        </>
    )
}

export default RadioGroup