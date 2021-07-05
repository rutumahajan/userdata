import React, { useState, useEffect } from "react";
import './listing.css';
import Pagination from '../Pagination/Pagination.js';
import FetchUser from "./FetchUser";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import { TableCell, TableRow } from '@material-ui/core';
import TableHead from '@material-ui/core/TableHead';
import { makeStyles } from '@material-ui/core/styles';
import OpenUpdate from '../UpdateUser/OpenUpdate.js'
import OpenDelete from '../DeleteUser/OpenDelete.js'
import Filter from '../Filter/Filter.js'
import OpenPopup from'../AddUser/OpenPopup';
import FilterGenderRecord from "../Filter/FilterGenderRecord";
import FilterStatusRecord from "../Filter/FilterStatusRecord";



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
    const [totalpages, setTotalPages] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    
    useEffect(() => {
      getData();
    },[]);

    async function getData() 
    {
      console.log("pageNo=");
      console.log(pageNo)
      var data = await FetchUser(pageNo)  
      setUsersData(data.data)
      setTotalPages(data.meta.pagination.pages);
    }

    async function getFilteredGenderData(gender) 
    {
      var data = await FilterGenderRecord(pageNo,gender)  
      setUsersData(data.data)
      setTotalPages(data.meta.pagination.pages);
    }
    async function getFilteredStatusData(status) 
    {
      var data = await FilterStatusRecord(pageNo,status)  
      setUsersData(data.data)
      setTotalPages(data.meta.pagination.pages);
    }
    
    const onCurrentPage = (onPage) => {
      setPageNo(onPage)
      console.log("onPage=");
      console.log(onPage);
      getData()
    }
    const RefreshData=() =>
    {
       getData()
    }
    
    const classes = useStyles()
    return (
    
      <div>
        {/* <div className="filterblock">
        <Filter
          getGenderData={getFilteredGenderData} 
          getStatusData={getFilteredStatusData}
        /></div> */}
        <div><OpenPopup/></div>
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
            <TableBody>
            {
    
            usersData && usersData.map ((user,key) =>
                <TableRow key = {user.id}>
                        <TableCell align="center">{user.id}</TableCell>
                        <TableCell align="center">{user.name}</TableCell>
                        <TableCell align="center">{user.email}</TableCell>
                        <TableCell align="center">{user.gender}</TableCell>
                        <TableCell align="center">{user.status}</TableCell>
                        <OpenUpdate user = {user} refreshData={RefreshData}/>
                        <OpenDelete user = {user} refreshData={RefreshData}/>
           </TableRow>
          ) 
      
        }
           </TableBody>
            </Table>
          </div>
          <div className="PaginationBlock">
          <Pagination
            currentPage={pageNo}
            onPage = {onCurrentPage}
            totalpage={totalpages}
          />
          </div>
      </div>
      );
    }
    
    export default Listing;