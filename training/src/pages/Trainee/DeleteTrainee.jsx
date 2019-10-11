import React from 'react'
import { Redirect } from 'react-router-dom'
import { Mutation } from 'react-apollo'
import { query } from './data/query'
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';

class DeleteTrainee extends React.Component {
    
    render() {
        let id
        if(this.props.location.state)
        id = this.props.location.state
        else id = null
        return(
            <>
            {
                !id ? <Redirect to='/trainee/getTrainee' /> :
            <Mutation mutation={query.deleteTrainee} >
                {(deleteTrainee) => (
                    <Dialog
                    open={true}
                    >
                        <DialogTitle> Delete Trainee </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Do You Want To Delete This Trainee ?
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button
                                onClick= {(e) => {
                                    e.preventDefault()
                                    deleteTrainee({
                                        variables: {id}
                                    }).then(() => {
                                        console.log('trainee deleted successfully')
                                        this.props.history.push('/trainee/getTrainee')
                                    })
                                    .catch((err) => {
                                        console.log(err.message)
                                        this.props.history.push('/trainee/getTrainee')
                                    })
                                }}
                                autoFocus
                            >
                                Yes
                            </Button>
                            <Button onClick={() => {this.props.history.push('/trainee/getTrainee')}}>
                                No
                            </Button>

                        </DialogActions>
                    </Dialog>                    
                )}
            </Mutation>
            }
            </>
        )
    }
}

export default DeleteTrainee