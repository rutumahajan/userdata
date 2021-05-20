import React, { useState} from "react";
import Listing from'../Listing/listing'
import './Pagination.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';



function Pagination({ data, pageLimit, dataLimit ,totalpage}) {
    const [currentPage, setCurrentPage] = useState(1);
    //console.log(totalpage);
    const getPage = () => {
            setCurrentPage(currentPage);
    }
    function goToNextPage() {
        setCurrentPage((page) => page + 1);
    }
  
    function goToPreviousPage() 
    {
        setCurrentPage((page) => page - 1);
    }
  
    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }
  
  
    const getPaginationGroup = () => {
       
           // return new Array(totalpage%pageLimit).fill().map((_, idx) => null);
        
            let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
            return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
        
        
    };
  
    return (
        <div>
    
        {/* <div> 
        <Listing pageNo = {currentPage}/>
         </div>  
   */}
      
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
                <input type = "number" className = "skiptoinput" onChange = { (e) => setCurrentPage(e.target.value)}></input>
      </div>
    </div>
    );
} 
export default Pagination;