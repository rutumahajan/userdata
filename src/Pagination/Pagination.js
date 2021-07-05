import React, { useState} from "react";
import './Pagination.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';



function Pagination({ currentPage,onPage,totalpage}) {
    
    let pageLimit = 5
    let dataLimit = 20
    const getPage = () => {
            onPage(currentPage);
    }
    function goToNextPage() {
        //setCurrentPage((page) => page + 1);
        onPage(currentPage+1);
    }
  
    function goToPreviousPage() 
    {
        //setCurrentPage((page) => page - 1);
        onPage(currentPage-1);
    }
  
    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        onPage(pageNumber);
    }
  
  
    const getPaginationGroup = () => {
       
           
            let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
            if (currentPage>=totalpage - 4){
              return new Array(pageLimit).fill().map((_, idx) => idx + totalpage-4);
            }
            else if(currentPage >5)
            return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
      
            else{
              return new Array(pageLimit).fill().map((_, idx) => 1 + idx);
            }
        
        
    };
  
    return (
        <div>
    
      
      <div className="pagination">
        {/* previous button */}
        <ArrowBackIosIcon id="backward-button" 
          onClick={goToPreviousPage}
          className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
          />
  
        {/* show page numbers */}
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${currentPage === item ? 'active' : null}`}
          >
            <span>{item}</span>
          </button>
        ))}
  
        {/* next button */}
        <ArrowForwardIosIcon id="forward-button" 
          onClick={goToNextPage}
          className={`next ${currentPage === totalpage ? 'disabled' : ''}`}
          />
         <button className = "root" onClick = {getPage}>
                    skip to 
                </button>
                <input type = "number" className="skiptoinput" onChange = { (e) => onPage(e.target.value)} ></input>
                <label>of {totalpage}</label>
      </div>
    </div>
    );
} 
export default Pagination;