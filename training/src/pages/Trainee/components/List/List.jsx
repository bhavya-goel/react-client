import React from 'react'
import { List, ListItem, ListItemText, Typography } from '@material-ui/core'
class TextList extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            list: this.props.list
        }
    }
    load = () => {
        this.props.loadMore()
        .then(({data: { getTrainee: { data: { records }}}}) => {
            if (!records.length) {
                this.setState({
                    list: []
                })
            }
            else {
                this.setState({
                    list: records
                })
            }
        })
    }
    render() {
        const { list } = this.state
        return(
            list.length ? 
            <>
            <List>
                {   
                    list.map((obj) => (
                    <ListItem>
                        <ListItemText primary={
                            <>
                                <Typography
                                    variant='subtitle2'
                                >
                                    {obj.name}
                                </Typography>
                            </>
                        } />
                    </ListItem>
                ))
                }
            </List>
            <button onClick={() => this.load()}>
                Load More
            </button>
            </>
            : 'No More Trainees'
        )
    }
    
}
export default TextList