import React, { Component } from 'react'
import * as yup from 'yup'
import { TextField } from '../../TextField'
import { SelectField } from '../../SelectField'
import { RadioGroup } from '../../RadioGroup'
import { GAMES_OPTIONS, player} from '../../../configs/constants'
class InputDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textField: '',
            sport: null,
            cricket: null,
            footBall: null,
            textFieldIsTouched: false,
            sportIsTouched: false,
            cricketIsTouched: false
        }
    }

    handleNameChange = (event) => {
        const value = event.target.value
        this.setState({
            textField: value
        }, () => {
            console.log(this.state)
        })
    }

    handlePlayerChange = (event) => {
        const value = event.target.value
        const name = this.state.sport
        console.log("player", event.target)
        if(name === 'cricket') {
            this.setState({
                cricket: value,
                footBall: null
            }, () => {
                console.log(this.state)
            })
        } else if (name === 'footBall') {
            this.setState({
                cricket: null,
                footBall: value
            }, () => {
                console.log(this.state)
            })
        }
    }

    handleSportChange = (event) => {
        const value = event.target.value
        this.setState({
            sport: value,
            cricket: null,
            footBall: null
        }, () => {
            console.log(this.state)
        })
    }
    hasError = (valueCheck) => {
        console.log('value..', valueCheck)
        if(!valueCheck){
            return true
        }
    }
    isTouched = (event, field) => {
        console.log('event>>', event.target)
        const result = event.target.name === field
        return result
    }
    getError = (event) => {
        if (this.isTouched(event, 'textField') && this.hasError(this.state.textField)) {
            console.log('error')
        } else if (this.isTouched(event, 'selectField') && this.hasError(this.state.sport)) {
            console.log('error')
        }else if (this.isTouched(event, event.target.name) && this.hasError(event.target.value)) {
            console.log('error')
        }
        

    }

    render() { 
        const { textField, sport, cricket, footBall } = this.state
        let option = []
        if (sport) {
            option = player[sport]
        }
        return(
            <div onBlur={this.getError}>
                <TextField
                    value={textField}
                    error=''
                    onChange={this.handleNameChange}
                />
                <SelectField
                    value={sport}
                    defaultText={GAMES_OPTIONS[0].label}
                    onChange={this.handleSportChange}
                    options={GAMES_OPTIONS}
                />
                { !sport ? '' :
                    <RadioGroup
                        value={cricket || footBall}
                        onChange={this.handlePlayerChange}
                        options={ option }
                        name={sport}
                    />
                }
            </div>
        )
    }
}

export default InputDemo