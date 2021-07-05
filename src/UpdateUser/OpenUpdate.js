import React from 'react'
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import './UpdateUser.css'
import UpdateUser from'./UpdateUser.js';
import { TableCell, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import EditRoundedIcon from '@material-ui/icons/EditRounded';

const useStyles = makeStyles({
    root: {
      background:'#565761',
      color: 'white'
    }
    
    
})
function OpenUpdate({user,refreshData}){
    const classes = useStyles()
    const [userToUp, setUserToUp] = useState()
    const [open, setOpen] = useState(false);

    const handleUpdate = () => {
        setUserToUp(user)
        setOpen(true);
        
    }

    const handleCloseButton = (closeBut) => {
        setOpen(closeBut);
    }
    
    return (
        <div>
            <TableCell align="center"><EditRoundedIcon className="icon" onClick = {() => handleUpdate()}/></TableCell>
       <Modal
        
         open = {open}
         onClose={handleCloseButton}
         aria-labelledby="simple-modal-title"
         aria-describedby="simple-modal-description"
        >
            <UpdateUser closeBut = {handleCloseButton} user = {userToUp} refreshData={refreshData}/>
       </Modal>
        </div>
    )
}
export default OpenUpdate