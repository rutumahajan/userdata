import React, { useState, useEffect } from "react";
import axios from "axios";
import './listing.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import { TableCell, TableRow } from '@material-ui/core';
import TableHead from '@material-ui/core/TableHead';
import { makeStyles } from '@material-ui/core/styles';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
const Url = "https://gorest.co.in/public-api/users";

function Listing() 
{
    const useStyles = makeStyles({
        root: {
          background: '#565761',
          color: 'white',
          fontWeight:'900'
        }
      });
    
    const [usersData, setUsersData] = useState([]);
  
    useEffect(() => {
      axios.get(Url)
      .then(response => {
        setUsersData(response.data["data"]);
      })
      .catch(error => {
        setUsersData([]);
      })
      
    }, []);
  
    let content=null;
    <TableBody>
    {
    
      content= usersData.map ((user,key) =>
      <TableRow key = {user.id}>
                        <TableCell align="center">{user.id}</TableCell>
                        <TableCell align="center">{user.name}</TableCell>
                        <TableCell align="center">{user.email}</TableCell>
                        <TableCell align="center">{user.gender}</TableCell>
                        <TableCell align="center">{user.status}</TableCell>
                        <TableCell align="center"><EditRoundedIcon className="icon"/></TableCell>
                        <TableCell align="center"><DeleteOutlineRoundedIcon className = "icon"/></TableCell>
     </TableRow>
      ) 
    }
    </TableBody>
    const classes = useStyles()
    return (
    
        <div>
          <div className="container"></div>
          <div className="header">
          <h1>User Registry</h1>
          </div>
          <div className="display">
          <Table stickyHeader className={classes.roundborder}>
          <TableHead>
            <TableRow>
                <TableCell className = {classes.root} align="center">Id</TableCell>
                <TableCell className = {classes.root} align="center">Name</TableCell>
                <TableCell className = {classes.root} align="center">Email</TableCell>
                <TableCell className = {classes.root} align="center">Gender</TableCell>
                <TableCell className = {classes.root} align="center">Status</TableCell>
                <TableCell className = {classes.root} align="center"> </TableCell>
                <TableCell className = {classes.root} align="center"> </TableCell>
            </TableRow>
            
        </TableHead>  
        {content}
        </Table>
          </div>
        </div>
      );
    }
    
    export default Listing;   