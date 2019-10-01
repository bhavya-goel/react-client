import React from 'react'
import { formStyle } from './style'
import { TextField, Button, Paper, Avatar } from '@material-ui/core'
import { LockOpen } from '@material-ui/icons'
import * as yup from 'yup'
import { Footer } from '../../layouts/components'
import Email from '@material-ui/icons/Email'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'


class Login extends React.Component {
    constructor() {
        super()
        this.FieldCheck = yup.object().shape({
            email: yup.string()
                .required('email is required')
                .matches(/^[a-zA-Z0-9.]+@gmail\.com$/, 'enter a valid email'),
            password: yup.string()
                .required('password is required')
        })
        this.state= {
            user: {
                email: '',
                password: ''
            },
            showIcon: false,
            button: {
                disabled: true,
                color: 'primary'
            },
            isTouched: {
                email: false,
                password: false,
            },
            error: {
                email: '',
                password: '',
            }
        }
    }
    handleChange = (event) => {
        let { target: { name, value } } = event
        this.setState((previousState) => ({
            error: {
                ...previousState.error,
                [name]: ''
            }
        }))
        this.setState((previousState) => ({
            user: {
                ...previousState.user,
                [name]: value
            }
        }))

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
    handleIconClick = () => {
        this.setState((previousState) => ({
            showIcon: !previousState.showIcon
        }))
    }
    render() {
        const { user: { email, password }, button, error, showIcon } = this.state
        return (
            <Paper style={formStyle.form}>
                <Avatar style={formStyle.pinkAvatar}>
                    <LockOpen />
                </Avatar>
                <label style={formStyle.label}>
                    <h1>
                        Login
                    </h1>
                </label>
                <TextField
                    label='Email Address'
                    style={formStyle.field}
                    name='email'
                    error={error.email.length ? true : false}
                    onBlur={this.validate}
                    onFocus={this.handleTouch}
                    helperText={error.email.length ? error.email : null}
                    value={email}
                    onChange={this.handleChange}
                    variant='outlined'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment>
                                <IconButton>
                                    <Email />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
                <TextField
                    label='Password'
                    style={formStyle.field}
                    name='password'
                    variant='outlined'
                    value={password}
                    error={error.password.length ? true : false}
                    helperText={error.password.length ? error.password : null}
                    onFocus={this.handleTouch}
                    onBlur={this.validate}
                    type={showIcon ? 'text' : 'password'}
                    onChange={this.handleChange}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment>
                            <IconButton
                                onClick={this.handleIconClick}
                            >
                                {showIcon ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
                <Button
                    variant='contained'
                    disabled={button.disabled}
                    color={button.color}
                    style={formStyle.field}
                >
                    Sign In
                </Button>
                <Footer />
            </Paper>
        )
    }
}
export default Login