import React, { Component } from 'react'
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
            footBall: null
        }
        this.handleNameChange= this.handleNameChange.bind(this)
        this.handlePlayerChange= this.handlePlayerChange.bind(this)
        this.handleSportChange= this.handleSportChange.bind(this)
    }

    handleNameChange(event) {
        const value = event.target.value
        this.setState({
            textField: value
        }, () => {
            console.log(this.state)
        })
    }
    handlePlayerChange(event) {
        const value = event.target.value
        const name = this.state.sport
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
    handleSportChange(event) {
        const value = event.target.value
        this.setState({
            sport: value,
            cricket: null,
            footBall: null
        }, () => {
            console.log(this.state)
        })
    }

    render() { 
        const { textField, sport, cricket, footBall } = this.state
        let option = []
        if (sport) {
            option = player[sport]
        }
        return(
            <div>
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
                    />
                }
            </div>
        )
    }
}

export default InputDemo