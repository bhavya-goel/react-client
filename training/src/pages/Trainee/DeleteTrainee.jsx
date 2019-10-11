import React from 'react'
import { Mutation } from 'react-apollo'
import { query } from './data/query'

class DeleteTrainee extends React.Component {
    state = {
        id: ''
    }
    handleChange = ({target: { value }}) => {
        this.setState({
            id: value
        })
    }
    submit = () => {
    }
    render() {
        const { id } = this.state
        return(
            <Mutation mutation={query.deleteTrainee} >
                {(deleteTrainee) => (
                    <form>
                        <label>
                            Id :
                        </label>
                        <input type="text" name="Id" value={id} onChange={this.handleChange} />
                        <br/>
                        <br/>
                        <button onClick={(e) => {
                            e.preventDefault()
                            deleteTrainee({
                                variables: {id}
                            }).then(() => console.log('trainee deleted successfully'))
                            .catch((err) => {console.log(err.message)})
                            }} >
                            Delete
                        </button>
                    </form>
                    
                )}
            </Mutation>
        )
    }
}

export default DeleteTrainee