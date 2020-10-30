import React from "react";
import "./App.css";
import Ppp from "./Ppp";
const Navl=()=>{
    return(
        <div className="navl">
            <div className="navl1">
               <div className="navlimg">
                <img src="/images/images3.png" alt="imggggg" />
               </div>
                <span><a>dibyajyotio</a></span>
            </div>
            <div className="navl2">
                <h4>suggesoin for you</h4>
                <p>see all</p>
            </div>
            <Ppp /><Ppp />
            <Ppp />
            <Ppp />
            <Ppp />
            <Ppp />
        
        </div>
    );
}
export default Navl;