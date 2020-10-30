import React, { useContext } from 'react'
import "./App.css";
//import { FaRegUserCircle } from 'react-icons/fa';
import { FaSearch, FaUserCircle } from "react-icons/fa";
import {FaHome } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaRegCompass } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";

//import { auth } from '../config';
const Navbar = () => {
 
  
    return (
      <div className="navbar">
       <div className="paa">
         <div className="navbarF">
             <div className="navbarFlogo">
              <img src="/instagramlogo.png" alt="instagram"/>
               
              </div>
              </div>
            <div className="navbarM">
            <div className="navbarSer">
              <input type="text" className="navbarS" placeholder="search"/>
               <FaSearch className="searchIcon" />
            </div>
            </div>
             <div className="navbarL">
              <li>
                  <FaHome className="navI" />
              </li>
              <li>
                  <FaRegPaperPlane className="navI" />
              </li>
              <li>
                  <FaRegCompass className="navI" />
              </li>
              <li>
                  <FaRegHeart className="navI" />
              </li> 
              <li>
                  <FaUserCircle className="navI" />
              </li>

              
            
            
              {/* { {user ? (
                  <button onClick={()=>auth.signOut() }>Logout</button>
              ): (
                  <button onClick={()=>{setOpen(true)}}>SinUp</button>
              )}  */}
         </div> 
        </div>   
      </div>
    
 
    )
}
export default Navbar;
