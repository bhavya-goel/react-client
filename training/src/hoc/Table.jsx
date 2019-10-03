import React from 'react'
import PropTypes from 'prop-types'
import withHeader from './HocComponent'
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
function TableData(props) {
    const rows = props.data
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => {
                    return (
                        <TableRow key={row.name}>
                            <TableCell>
                                    {row.name}
                            </TableCell>
                            <TableCell>
                                {row.email}
                            </TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
}
Table.defaultProps = {
    data: [{
        id: '5c6c47af7740654f0915fac9',
        name: 'Sachin Tendulkar',
        email: 'sachin@gmail.com'
    }]
}
Table.propTypes = {
    data: PropTypes.array.isRequired
}
export default withHeader(TableData)