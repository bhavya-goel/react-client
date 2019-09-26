import React from 'react'
import * as yup from 'yup'
import { AddDialog } from './components'
import { Button } from '@material-ui/core'

class Trainee extends React.Component {
    constructor(props) {
        super(props)
        this.FieldCheck = yup.object().shape({
            name: yup.string()
                .required('name is required')
                .min(3, 'name too short'),
            email: yup.string()
                .required('email is required'),
            password: yup.string()
                .required('password is required'),
            confirmPassword: yup.string()
                .required('re- enter password')
                .test('match',
                'password does not match',
                (passwordCheck) => {
                    return passwordCheck === this.state.user.password
                })
        })
        this.state= {
            user: {
                name: '',
                email: '',
                password: ''
            },
            open: false,
            button: {
                disabled: true,
                color: 'primary'
            },
            isTouched: {
                name: false,
                email: false,
                password: false,
                confirmPassword: false
            },
            error: {
                name: '',
                email: '',
                password: '',
                confirmPassword:''
            }
        }
        this.initialState = this.state
    }
    addTrainee = () => {
        this.setState({
            ...this.initialState,
            open: true
        })
        
    }
    addTraineeClose = () => {
        this.setState({
            ...this.initialState,
            open: false
        })
    }
    submit = () => {
        this.setState({
            open: false
        }, () => {
            console.log(this.state.user)
        })
        
    }
    handleTouch = (event) => {
        const name = event.target.name
        this.setState((previousState) => ({
            isTouched: {
                ...previousState.isTouched,
                [name]: true
            }
        }))

    }
    handleChange = (event) => {
        let { target: { name, value } } = event
        this.setState((previousState) => ({
            error: {
                ...previousState.error,
                [name]: ''
            }
        }))
        name !== 'confirmPassword' && this.setState((previousState) => ({
            user: {
                ...previousState.user,
                [name]: value
            }
        }))

    }
    validate = (event) => {
        const { target: { name, value } } = event
        if (this.state.isTouched[name]) {
            this.FieldCheck
            .validateAt(name, {
                [name]: value
            })
            .then(() => {
                this.finalCheck()
            })
            .catch((errorText) => {
                errorText = errorText.errors[0]
                this.setState((previousState) => ({
                    error: {
                        ...previousState.error,
                        [name]: errorText
                    }
                }), () => {
                    this.finalCheck()
                })
            })
        }
    }
    finalCheck = () => {
        const touchResult = Object.values(this.state.isTouched).every((value) => value)
        const errorResult = Object.values(this.state.error).some((value) => value.length > 0)
        if(touchResult && !errorResult) {
            this.setState({
                button: {
                    color: 'secondary',
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
        return (
            <>
                <AddDialog
                onFocus={this.handleTouch}
                error={this.state.error}
                submitButton={this.state.button}
                open={this.state.open}
                onClose={this.addTraineeClose}
                onChange={this.handleChange}
                onBlur={this.validate}
                onSubmit={this.submit}
                user={this.state.user}
                >
                </AddDialog>
                <Button
                    onClick={this.addTrainee}
                    variant='contained'
                >
                    Add Trainee
                </Button>
            </>
        )
    }
}

export default Trainee