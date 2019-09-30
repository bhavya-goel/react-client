import React from 'react'
import * as yup from 'yup'
import { Navbar } from '../../layouts'
import { AddDialog } from './components'
import { Button } from '@material-ui/core'

class Trainee extends React.Component {
    constructor(props) {
        super(props)
        const passwordError = 'must contain minimum 8 characters, atleast one uppercase, atleast one lowercase, atleast one digit'
        this.FieldCheck = yup.object().shape({
            name: yup.string()
                .required('name is required')
                .min(3, 'name too short'),
            email: yup.string()
                .required('email is required')
                .matches(/^[a-zA-Z0-9.]+@gmail\.com$/, 'enter a valid email'),
            password: yup.string()
                .required('password is required')
                .min(8, passwordError)
                .matches(/(.*[a-z].*)/, passwordError)
                .matches(/(.*[A-Z].*)/, passwordError)
                .matches(/(.*[0-9].*)/, passwordError),
            confirmPassword: yup.string()
                .required('confirm password is required')
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
            showIcon: {
                password: false,
                confirmPassword: false
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
        const { target: { name } } = event
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
        const { isTouched } = this.state
        const { target: { name, value } } = event

        if (isTouched[name]) {
            this.FieldCheck
            .validateAt(name, {
                [name]: value
            }, {abortEarly: true})
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
        const { isTouched, error } = this.state

        const touchResult = Object.values(isTouched)
            .every((value) => value)
        const errorResult = Object.values(error)
            .some((value) => value.length > 0)

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
    cancel = () => {
        this.setState({
            ...this.initialState
        })
    }
    handleIconClick = (name) => {
        this.setState((previousState) => ({
            showIcon: {
                ...previousState.showIcon,
                [name]: !previousState.showIcon[name]
            }
        }))
    }
    render() {
        const { error, button, open, user, showIcon } = this.state
        return (
            <>
                <Navbar/>
                <AddDialog
                onFocus={this.handleTouch}
                error={error}
                showIcon={showIcon}
                submitButton={button}
                open={open}
                handleIconClick={this.handleIconClick}
                onClose={this.addTraineeClose}
                onChange={this.handleChange}
                onBlur={this.validate}
                onSubmit={this.submit}
                onCancel={this.cancel}
                user={user}
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