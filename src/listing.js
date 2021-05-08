import React, { useState, useEffect } from "react";
import axios from "axios";
import './listing.css';
const Url = "https://gorest.co.in/public-api/users";

function Listing() {
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
  
    let content=null
    if(usersData)
    {
      content= usersData.map ((user,key) =>
      <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.gender}</td>
      <td>{user.status}</td>
      </tr>
      )
    }
    return (
    
        <div>
          <div class="container"></div>
          <div class="header">
          <h1>User Registry</h1>
          </div>
          <table>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Status</th>
                    </tr>
                    <tbody>
                    {content}
                    </tbody>
            </table>
        
    
        </div>
      );
    }
    
    export default Listing;   