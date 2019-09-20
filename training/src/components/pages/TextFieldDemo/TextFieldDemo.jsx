import React from 'react'
import { TextField } from '../../TextField'

function TextFieldDemo(props) {
    return(
        <div>
            <TextField value='text field'/>
            <TextField error='error field'/>
            <TextField disabled={true} />
        </div>
    )
}

export default TextFieldDemo