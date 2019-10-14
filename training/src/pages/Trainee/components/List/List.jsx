import React from 'react'
import { Link } from 'react-router-dom'
import { Table, TableHead, TableCell, TableBody, TableRow } from '@material-ui/core'
class TextList extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            list: this.props.list
        }
    }
    load = async () => {
        const records = await this.props.loadMore()
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
    }
    render() {
        const { list } = this.state
        return(
            list.length ? 
            <>
            <Table>
                <TableHead>
                    <TableRow>
                    <TableCell> Id </TableCell>
                    <TableCell> Name </TableCell>
                    <TableCell> Email </TableCell>
                    <TableCell> Action </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list.map((obj) => {
                        return (
                            <TableRow key={obj.originalID}>
                            <TableCell> {obj.originalID} </TableCell>
                            <TableCell> {obj.name} </TableCell>
                            <TableCell> {obj.email} </TableCell>
                            <TableCell>
                                <Link to={{
                                    pathname: '/trainee/updateTrainee',
                                    state: {
                                        id: obj.originalID,
                                        name: obj.name,
                                        email: obj.email
                                    }
                                }}> Edit 
                                </Link> | <Link to={{
                                    pathname: '/trainee/deleteTrainee',
                                    state: {
                                        id: obj.originalID
                                    }
                                }}>
                                    Delete
                                </Link>
                                
                                </TableCell>
                            </TableRow>

                        )
                    })}
                </TableBody>
            </Table>
            <button onClick={() => this.load()}>
                Load More
            </button>
            </>
            : 'No More Trainees'
        )
    }
    
}
export default TextList