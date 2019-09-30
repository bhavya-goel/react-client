import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { innerTheme, useStyles } from './style'
import { Toolbar, Button, Typography, AppBar } from '@material-ui/core'
function Navbar() {
    const classes = useStyles()
    return (
        <div  className={classes.root}>
            <ThemeProvider theme={innerTheme}>
                <AppBar position='static'>
                    <Toolbar>
                        <Typography variant='h6' className={classes.title}>
                            Trainee Portal
                        </Typography>
                        <Button color='inherit'>
                        Trainee
                        </Button>
                        <Button color='inherit'>
                            TextField Demo
                        </Button>
                        <Button color='inherit'>
                            Input Demo
                        </Button>
                        <Button color='inherit'>
                            Children Demo
                        </Button>
                        <Button color='inherit'>
                            Logout
                        </Button>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </div>
    )
}
export default Navbar