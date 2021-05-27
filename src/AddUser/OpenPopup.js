import React from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
import './AddUser.css'
import AddUser from'./AddUser.js';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';

const useStyles = makeStyles({
    root: {
      background:'#565761',
      color: 'white'
    }
    
    
})
function OpenPopup(){
    const classes = useStyles()
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleCloseButton = (closeBut) => {
        setOpen(closeBut);
    }
    
    return (
        <div>
            <div className="addbutblock">
            <Button variant ="contained" className={classes.root} onClick={handleOpen}><AddIcon />Add User</Button>
            </div>
       <Modal
        
         open = {open}
         onClose={handleClose}
         aria-labelledby="simple-modal-title"
         aria-describedby="simple-modal-description"
        >
            <AddUser closeBut = {handleCloseButton}/>
       </Modal>
        </div>
    )
}
export default OpenPopup