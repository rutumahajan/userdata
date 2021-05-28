import React from 'react'
import { useState, useEffect } from 'react';
import './AddUser.css'
import AddIcon from '@material-ui/icons/Add';
import { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import addrecord from './addrecord'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
      background:'#565761',
      color: 'white'
    }
    
    
})
const AddUser=({closeBut})=>
{
    const classes = useStyles()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('Male')
    const [status, setStatus] = useState('Inactive')
    

    const cancel = () => {
        closeBut(false);
    }

    const submit = async () => {
        const user = {name, email, gender, status}
        var data = await addrecord(user)
        if( parseInt(data.code/100) === 2 ) {
            closeBut(false)
        }
    }
  return (
      <div>
        <div className = "form">
            <h1 className="header">Add User Form</h1>
            <div className = "inputtext">
                <label className = "input">Name:</label>
                <input type='text' className="name" placeholder='Enter your name'
                onChange = {(e) => setName(e.target.value)}
                value = {name}
                />
            </div>
            <br/>
            <div className = "inputtext">
                <label className = "input">Email:</label>
                <input type='text' className="email" placeholder='Enter your email'
                onChange = {(e) => setEmail(e.target.value)}
                value = {email}
                />
            </div>
            <br/>
            <div className = "inputtext">
                <label className = "input">Gender:</label>
                <select className="gender"
                        value={gender} 
                        onChange={(e) => setGender(e.target.value)}                 
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                </select>
            </div>
            <br/>
            <div className = "inputtext">
                <label className = "input">Status:</label>
                <select className="status"
                        value={status} 
                        onChange={(e) => setStatus(e.target.value)} 
                    >
                        <option value="Inactive">Inactive</option>
                        <option value="Active">Active</option>
                </select>
            </div>
            <div className="submitbut">
            <Button variant ="contained" className={classes.root} onClick={submit}>Submit</Button>
            </div>
            <div className="cancelbut">
            <Button variant ="contained" className={classes.root} onClick={cancel}>Cancel</Button>
           </div>     
        </div>
      </div>
    );
}
export default AddUser  
