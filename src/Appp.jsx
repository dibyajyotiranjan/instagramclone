import React from "react";
import "./App.css";
import Storis from "./Stories";
import Create from "./Create";
import Post from "./Post";
import NavL from "./NavL";
const Appp =()=>{
    return(
        <div className="margin">
        <div className="navright">
            
            <Storis />
            <Create />
            <Post />
        </div>
        <div className="navleft">
         <NavL />
        </div>
        
    
    </div>
    )
}
export default Appp;