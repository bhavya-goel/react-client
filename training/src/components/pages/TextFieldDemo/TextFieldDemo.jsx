import React from 'react'
import { TextField } from '../../TextField'
import { Slider } from '../../Slider'

function TextFieldDemo(props) {
    return(
        <div>
            <div>
                <Slider
                    altText='Default Banner'
                    banners={
                        [
                            'default.png',
                            'load-balancer.png',
                            'full-stack-web-development.jpg',
                            'js.jpg',
                            'dns-server.png',
                            'cloud.jpg'
                        ]
                    }
                    defaultBanner='default.png'
                    duration={1000}
                    height={150}
                    random={false}
                />
            </div>
            <br/>
            <TextField value='text field'/>
            <TextField error='error field'/>
            <TextField disabled={true} />
        </div>
    )
}

export default TextFieldDemo