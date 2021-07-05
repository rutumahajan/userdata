import React from 'react'
import { useState, useEffect } from 'react';
import './UpdateUser.css'
import AddIcon from '@material-ui/icons/Add';
import { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import updaterecord from './updaterecord'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
      background:'#565761',
      color: 'white'
    }
    
    
})
const UpdateUser=({closeBut,user,refreshData})=>
{
    const classes = useStyles()
    const [id, setUserId] = useState(user.id)
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [gender, setGender] = useState(user.gender)
    const [status, setStatus] = useState(user.status)
    

    const cancel = () => {
        closeBut(false);
    }

    const submit = async () => {
        const user = {id,name, email, gender, status}
        var data = await updaterecord(user)
        if( parseInt(data.code/100) === 2 ) {
            closeBut(false)
            refreshData()
        }
    }
  return (
      <div>
        <div className = "form">
            <h1 className="header">Update User Form</h1>
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
            <Button variant ="contained" className={classes.root} onClick={submit}>Update</Button>
            </div>
            <div className="cancelbut">
            <Button variant ="contained" className={classes.root} onClick={cancel}>Cancel</Button>
           </div>     
        </div>
      </div>
    );
}
export default UpdateUser  
