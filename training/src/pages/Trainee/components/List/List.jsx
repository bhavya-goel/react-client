import React from 'react'
import { List, ListItem, ListItemText, Typography } from '@material-ui/core'
function TextList ({list}) {
    return(
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
            ))}
        </List>
    )
}
export default TextList