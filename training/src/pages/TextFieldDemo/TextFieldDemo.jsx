import React from 'react'
import { Slider, TextField } from '../../components'
import { banner } from '../../configs/constants'

function TextFieldDemo() {
    return(
        <div>
            <div>
                <Slider
                    altText='Default Banner'
                    banners={ banner }
                    defaultBanner='default.png'
                    duration={1000}
                    height={150}
                    random={false}
                />
            </div>
            <br/>
            <TextField  error='' value='text field'/>
            <TextField error='error' value='error field'/>
            <TextField error='' disabled={true} value='disabled'/>
        </div>
    )
}

export default TextFieldDemo