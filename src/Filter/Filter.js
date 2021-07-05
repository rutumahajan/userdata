import React from 'react';
import { useState, useEffect } from 'react';
import {FaFilter} from 'react-icons/fa';
import FilterRecord from "./FilterGenderRecord";
import './Filter.css';

class Filter extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      gender: ""
    };

    this.handleGender = this.handleGender.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
  }

 async handleGender(e) {
   const gender = e.target.value;
   this.props.getGenderData(gender);
  }
  async handleStatus(e) {
    const status = e.target.value;
    this.props.getStatusData(status);
   }
   

 render()
 {
  return (
      <div>
         <b style={{color: "#565761"}}>Filter</b><FaFilter color="#565761" fontSize="13px"/><b style={{color: "#565761"}}>:</b>
         <select className="dropdown" onChange={this.handleGender}>
            <option value="" disabled selected hidden>Filter By Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
        <select className="dropdown" onChange={this.handleStatus}>
            <option value="" disabled selected hidden>Filter By Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
        </select>
                    
  </div>
    );
}
}
export default Filter
