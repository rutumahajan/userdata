import React from 'react'
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import './DeleteUser.css'
import DeleteUser from'./DeleteUser.js';
import { TableCell, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';

const useStyles = makeStyles({
    root: {
      background:'#565761',
      color: 'white'
    }
    
    
})
function OpenDelete({user}){
    const classes = useStyles()
    const [userToDelete, setUserToDelete] = useState()
    const [open, setOpen] = useState(false);

    const handleDelete = () => {
        setUserToDelete(user)
        setOpen(true);
    }

    const handleCloseButton = (closeBut) => {
        setOpen(closeBut);
    }
    
    return (
            <TableCell align="center"><DeleteOutlineRoundedIcon className = "icon" onClick = {() => handleDelete()}/>
       <Modal
        
         open = {open}
         onClose={handleCloseButton}
         aria-labelledby="simple-modal-title"
         aria-describedby="simple-modal-description"
        >
            <DeleteUser closeBut = {handleCloseButton} user = {userToDelete}/>
       </Modal>
       </TableCell>
        
    )
}
export default OpenDelete