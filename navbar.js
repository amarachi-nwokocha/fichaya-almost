import React, { useState } from 'react';
import  "./components/index.css";
 function NavBar() {
  return(
   < List />
   
  )
}
const Img = () =>{
  return <img src="./logo-white.png" alt=""/>
}
const List = () =>{
  return(
   
  <ul className ="list">
    <li><img src={Img} alt=""/></li>
    <li>DASHBOARD</li>
    <li>CUSTOMERS</li>
    <li>ASSOSIATES</li>
    <li className ='active'>REQUESTS</li>
    <li>SCHEDULES</li>
    <li>PAMENTS</li>
    <li>SETTINGS</li>
    <li className ='box1'>VscBellDot</li>
    <li className ='box'></li>
  </ul>
  
   
  )
}

export default NavBar;