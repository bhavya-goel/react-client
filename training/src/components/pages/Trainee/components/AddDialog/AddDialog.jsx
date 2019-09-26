import React from 'react'
import { TextField, Button, Dialog } from '@material-ui/core'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import useStyles from './style'

function AddDialog(props) {
    const classes = useStyles()
    
    const { open, onClose, onSubmit, user, onFocus, onChange, onBlur, error, submitButton } = props
    
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
                        error={error.name.length ? true : false}
                        name='name'
                        helperText={error.name.length ? error.name : null}
                        onChange={onChange}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        value={user.name}
                        className={classes.textField}
                        variant='outlined'
                    />
                    <TextField
                        name='email'
                        error={error.email.length ? true : false}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        helperText={error.email.length ? error.email : null}
                        value={user.email}
                        onChange={onChange}
                        label='Email Address'
                        variant='outlined'
                        className={classes.textField}
                    />
                    <div className={classes.div}>
                    <TextField
                        value={user.password}
                        error={error.password.length ? true : false}
                        name='password'
                        helperText={error.password.length ? error.password : null}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        type='password'
                        onChange={onChange}
                        label='Password'
                        variant='outlined'
                        className={classes.passwordField}
                    />
                    <TextField
                        type='password'
                        name='confirmPassword'
                        error={error.confirmPassword.length ? true : false}
                        helperText={error.confirmPassword.length ? error.confirmPassword : null}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onChange={onChange}
                        label='Confirm Password'
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
            </DialogActions>
        </Dialog>
    )
}

export default AddDialog