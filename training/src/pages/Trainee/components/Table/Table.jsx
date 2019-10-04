import React from 'react'
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
export default (props) => {
    const rows = props.data
    return (
        <Table>
            <TableHead>
                <TableRow>
                    {props.columns.map((column) => (
                        <TableCell key={column.field} align={column.align}>
                            {column.label}
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map(row => (
                    <TableRow key={row.name}>
                    <TableCell align='center'>
                        {row.name}
                    </TableCell>
                    <TableCell align='center'>
                        {row.email}
                    </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}