import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { innerTheme, useStyles } from './style'
import { Link } from 'react-router-dom'
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
                            <Link to='/trainee' className={classes.link}>Trainee</Link>
                        </Button>
                        <Button color='inherit'>
                            <Link to='/textField-demo' className={classes.link}>TextField Demo</Link>
                        </Button>
                        <Button color='inherit'>
                            <Link to='/Input-demo' className={classes.link}>Input Demo</Link>
                        </Button>
                        <Button color='inherit'>
                            <Link to='/children-demo' className={classes.link}>Children Demo</Link>
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