import React from 'react'
import './pagination.css'
import { useState, useEffect } from 'react';
import fetchUsers from '../server-conn/fetchUsers'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      background: '#4856FD',
      color: 'white',
      width:100,
      fontWeight:'900',
      fontSize:'13px',
      marginLeft:10,
      marginTop : -3
    },
    backwardicon : {
        opacity: '0.7',
        cursor:'pointer',
        display: 'inline',
        marginTop: 10,
        marginLeft:500,
        height:15
    },
    forwardicon : {
        opacity: '0.6',
        cursor:'pointer',
        display: 'inline',
        marginTop: 10,
        height:15
    }

  });

const Pagination = ({onPage, currentPage, totalPages}) => {

    const [page, setPage] = useState(1)
    const classes = useStyles()

    const getPage = () => {
        if(isNaN(page))
            page = 1
        onPage(parseInt(page))
    }

    const moveBackward = (e) => {
        if(currentPage!==1)
            currentPage = currentPage - 1;
        onPage(parseInt(currentPage))
    }

    const moveForward = (e) => {
        if(currentPage!== totalPages)
            currentPage = currentPage + 1;
        onPage(parseInt(currentPage))
    }

    return (
        <div>
            <div className = "pagination">    
                <ArrowBackIosIcon className = {classes.backwardicon} onClick = { (e) =>   moveBackward(e)}/>
                   <div className = "pagelabel"> page {currentPage} of {totalPages}</div>
                <ArrowForwardIosIcon className = {classes.forwardicon} onClick = { (e) => moveForward(e)}/>
                <Button variant="contained" color = "primary" className = {classes.root} onClick = {getPage}>
                    skip to
                </Button>
                <input type = "text" className = "skiptoinput" onChange = { (e) => setPage(e.target.value)}></input>
            </div>
        </div>
    )
}

export default Pagination