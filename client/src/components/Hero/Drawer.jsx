import React, {useState} from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton} from '@mui/material'
import { Link } from 'react-router-dom'

export default function DrawerEl(){
    const [open, setOpen]= useState(false)
return(
<>
    <Drawer open={open} onClose={()=> setOpen(false)}>
        <List>
    <ListItem>
        <Link to='/'>Home</Link>
    </ListItem>
        </List>
    </Drawer>
    <IconButton onClick={()=>setOpen(!open)} >
        "Click"
        </IconButton>
    </>
)
}