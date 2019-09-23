import React, { Component } from 'react'
import { TextField } from '../../TextField'
import { SelectField } from '../../SelectField'
import { RadioGroup } from '../../RadioGroup'
import { GAMES_OPTIONS, PLAYERS} from '../../../configs/constants'
class InputDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textField: '',
            selectField: GAMES_OPTIONS[0],
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
    }
    handleSportChange(event) {
        const value = event.target.value
        if (value !== ''){
            document.getElementById('radio').style.display = 'block'
        } else {
            document.getElementById('radio').style.display = 'none'
        }

        this.setState({
            selectField: value
        }, () => {
            console.log(this.state)
        })
    }

    render() {
        return(
            <div>
                <TextField
                    value={this.state.textField}
                    onChange={this.handleNameChange}
                />
                <SelectField
                    value={this.state.selectField.value}
                    defaultText={this.state.selectField.label}
                    onChange={this.handleSportChange}
                    options={GAMES_OPTIONS}
                />
                <div id = 'radio' style={{display: 'none'}}>
                    
                    <RadioGroup
                        value={this.state.RadioGroup}
                        onChange={this.handlePlayerChange}
                        options={PLAYERS}
                    />
                </div>
            </div>
        )
    }
}

export default InputDemo