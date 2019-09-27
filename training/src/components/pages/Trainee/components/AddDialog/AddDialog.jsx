import React from 'react'
import { TextField, Button, Dialog } from '@material-ui/core'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import useStyles from './style'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'

function AddDialog(props) {
    const classes = useStyles()
    
    const {
        open, onClose, onSubmit, user,
        onFocus, onChange, onBlur, onCancel,
        error: { name, password, email, confirmPassword },
        submitButton, showIcon, handleIconClick
    } = props
    
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle> Add Trainee </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Enter your Trainee Details
                </DialogContentText>
                <form className={classes.container}>
                    <TextField
                        label='Name'
                        error={name.length ? true : false}
                        name='name'
                        helperText={name.length ? name : null}
                        onChange={onChange}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        value={user.name}
                        className={classes.textField}
                        variant='outlined'
                    />
                    <TextField
                        name='email'
                        error={email.length ? true : false}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        helperText={email.length ? email : null}
                        value={user.email}
                        onChange={onChange}
                        label='Email Address'
                        variant='outlined'
                        className={classes.textField}
                    />
                    <div className={classes.div}>
                    <TextField
                        value={user.password}
                        error={password.length ? true : false}
                        name='password'
                        helperText={password.length ? password : null}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        type={showIcon.password ? 'text' : 'password'}
                        onChange={onChange}
                        label='Password'
                        variant='outlined'
                        InputProps={{
                            startAdornment: (
                                <InputAdornment>
                                <IconButton
                                    onClick={() => handleIconClick('password')}
                                >
                                    {showIcon.password ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                                </InputAdornment>
                            )
                        }}
                        className={classes.passwordField}
                    />
                    <TextField
                        type={showIcon.confirmPassword ? 'text' : 'password'}
                        name='confirmPassword'
                        error={confirmPassword.length ? true : false}
                        helperText={confirmPassword.length ? confirmPassword : null}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onChange={onChange}
                        label='Confirm Password'
                        InputProps={{
                            startAdornment: (
                                <InputAdornment>
                                <IconButton
                                    onClick={() => handleIconClick('confirmPassword')}
                                >
                                    {showIcon.confirmPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                                </InputAdornment>
                            )
                        }}
                        variant='outlined'
                        className={classes.passwordField}
                    />
                    </div>
                </form>
            </DialogContent>
            <DialogActions>
            <Button
                onClick={onSubmit}
                variant='contained'
                disabled={submitButton.disabled}
                color={submitButton.color}
            >
                Submit
            </Button>
            <Button
                onClick={onCancel}
                variant='contained'
            >
                Cancel
            </Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddDialog