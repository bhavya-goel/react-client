import React from 'react'
import { useStyles } from './style'
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import trainees, { getDateFormatted } from './data/trainee'
import { NoMatch } from '../NoMatch'
import { Card, CardHeader, CardContent, Typography, Button } from '@material-ui/core'
function TraineeDetail({computedMatch: { params }}) {
    const list = trainees.find((obj) => {
        return obj.id === params.id
    })
    const classes = useStyles()
    return (
        list ?
        (<div className={classes.container}>
            <div className={classes.main}>
                <div className={classes.title}>
                    Thumbnail
                </div>
                <Card className={classes.card}>
                    <CardHeader
                        title={list.name}
                        subheader={getDateFormatted(list.createdAt)}
                    />
                    <CardContent>
                        <Typography>
                            {list.email}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <Button
                className={classes.button}
                variant='contained'
            >
                <Link to='/trainee' className={classes.link}>Back</Link>
            </Button>
        </div>) :
        (<Router>
            <Switch>
                <Route component={NoMatch} />
            </Switch>
        </Router>)
    )
}
export default TraineeDetail