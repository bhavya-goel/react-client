import React, { Component } from 'react'
import * as yup from 'yup'
import { TextField } from '../../TextField'
import { SelectField } from '../../SelectField'
import { RadioGroup } from '../../RadioGroup'
import { Button } from '../../Button'
import { GAMES_OPTIONS, player} from '../../../configs/constants'
class InputDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textField: {
                value: '',
                isTouched: false,
                error: ''
            },
            sport: {
                value: '',
                isTouched: false,
                error: ''
            },
            cricket: {
                value: '',
                isTouched: false,
                error: ''
            },
            footBall: {
                value: '',
                isTouched: false,
                error: ''
            },
            button: {
                disabled: true,
                color: 'primary'
            }
        }
        this.textFieldCheck = yup.object().shape({
            value: yup.string()
                .required('name is required')
                .min(3, 'name too short')
        })
        this.sportCheck = yup.object().shape({
            value: yup.string()
                .required('sport is required')
        })
        this.cricketCheck = yup.object().shape({
            value: yup.string()
                .required('cricket type is required')
        })
        this.footBallCheck = yup.object().shape({
            value: yup.string()
                .required('fotBall type is required')
        })
    }

    handleNameChange = (event) => {
        const value = event.target.value
        this.setState((previousState) => ({
            textField: {
                ...previousState.textField,
                value,
                error: ''
            }
        }), () => {
            console.log(this.state)
        })
    }

    handlePlayerChange = (event) => {
        const value = event.target.value
        const name = this.state.sport.value
        this.setState((previousState) => ({
            [name]: {
                ...previousState[name],
                value,
                error: ''
            }
        }), () => {
            console.log(this.state)
        })
    }

    handleSportChange = (event) => {
        const value = event.target.value
        this.setState((previousState) => ({
            sport: {
                ...previousState.sport,
                value,
                error: ''
            },
            cricket: {
                value: '',
                isTouched: false,
                error: ''
            },
            footBall: {
                value: '',
                isTouched: false,
                error: ''
            },
        }), () => {
            console.log(this.state)
        })
    }
    
    handleOnFocus = (event) => {
        const name = event.target.name
        this.setState((previousState) => ({
            [name]: {
                ...previousState[name],
                isTouched: true
            }
        })
    )}

    isTouched = () => {
        const { textField, sport, cricket, footBall } = this.state
        if(textField.isTouched && sport.isTouched && (cricket.isTouched || footBall.isTouched)) {
            console.log('touch', this.state)
            return true
        } else {
            return false
        }
    }

    getError = (event) => {
        const field = event.target.name
        if (this.state[field].isTouched) {
            this[`${field}Check`]
            .validate({
                value: this.state[field].value
            })
            .then(() => {
                this.checkError()
            })
            .catch((errorText) => {
                errorText = errorText.errors[0]
                this.setState((previousState) => ({
                    [field]: {
                        ...previousState[field],
                        error: errorText
                    }
                }), () =>{
                    this.checkError()
                }
            )
            }) 
        }
    }

    hasError = () => {
        const stateArray = ['textField', 'sport', 'cricket', 'footBall']
        const result = stateArray.some((field) => {
            if (this.state[field].error.length) {
                return true
            } else {
                return false
            }
        })
        return result
    }

    submit = () => {
    }

    checkError = () => {
        const touchResult = this.isTouched()
        const result = this.hasError()
        if(touchResult && !result) {
            this.setState({
                button: {
                    color: 'green',
                    disabled: false
                }
            })
        } else {
            this.setState({
                button: {
                    color: 'primary',
                    disabled: true
                }
            })
        }
    }

    render() { 
        const { textField, sport, cricket, footBall, button } = this.state
        let option = []
        if (sport.value.length) {
            option = player[sport.value]
        }
        return(
            <div>
                <TextField
                    value={textField.value}
                    error={textField.error}
                    onBlur={this.getError}
                    onFocus={this.handleOnFocus}
                    onChange={this.handleNameChange}
                />
                <br/>
                <br/>
                <SelectField
                    value={sport.value}
                    error={sport.error}
                    defaultText={GAMES_OPTIONS[0].label}
                    onFocus={this.handleOnFocus}
                    onBlur={this.getError}
                    onChange={this.handleSportChange}
                    options={GAMES_OPTIONS}
                />
                { !sport.value.length ? '' :
                    <RadioGroup
                        value={cricket.value || footBall.value}
                        error={this.state[sport.value].error}
                        onFocus={this.handleOnFocus}
                        onBlur={this.getError}
                        onChange={this.handlePlayerChange}
                        options={ option }
                        name={sport.value}
                    />
                }
                <Button
                    color={button.color}
                    disabled={button.disabled}
                    style={null}
                    value={'Submit'}
                    onClick={this.submit}
                />
            </div>
        )
    }
}

export default InputDemo