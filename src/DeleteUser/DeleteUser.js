import React from 'react'
import { useState, useEffect } from 'react';
import './DeleteUser.css'
import AddIcon from '@material-ui/icons/Add';
import { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import deleterecord from './deleterecord'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
      background:'#565761',
      color: 'white'
    }
    
    
})
const DeleteUser=({closeBut,user,refreshData})=>
{
    const classes = useStyles()
    const [id, setUserId] = useState(user.id)
    
    

    const cancel = () => {
        closeBut(false);
    }

    const submit = (id) => {
        
        deleterecord(id)
        closeBut(false)
        refreshData();
    }
  return (
      <div>
        <div className = "formdisplay">
        <h4 align="center">Are you sure you want to permanently delete the selected record?<br/>(ID = {id})</h4>
            <div className="deletebut">
            <Button variant ="contained" className={classes.root} onClick={() => submit(user.id)}>Delete</Button>
            </div>
            <div className="cancel">
            <Button variant ="contained" className={classes.root} onClick={cancel}>Cancel</Button>
           </div>     
           </div>
     </div>
    );
}
export default DeleteUser  
