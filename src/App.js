import React from 'react'
import './App.css';
import './Listing/listing.css'
import Listing from'./Listing/listing'
import OpenPopup from'../src/AddUser/OpenPopup';
function App() {
  return (
    <div>
      <div className="container"></div>
          <div className="header">
          <h1>User Registry</h1>
          </div>
            <OpenPopup/>
            <Listing/>
  </div>
  );
}

export default App;
