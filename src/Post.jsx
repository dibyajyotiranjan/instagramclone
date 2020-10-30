import React from "react";
import "./App.css";
import { FaRegHeart } from 'react-icons/fa';
import { FaRegComment } from 'react-icons/fa';
import { FaRegPaperPlane } from 'react-icons/fa';
import { FaRegBookmark } from 'react-icons/fa';
const Post = ()=>{
    return(
        <div className="post">
            <div>
                <div className="postF">
                  <div className="postFF">
                    <div className="postimg">
                      <img src="/images/images.png" placeholder="img" />
                     </div>
                      <a>dibya aaaaaaaaaaaaaaaaaaaaaaa</a>
                  </div>
                  <div className="postf">
                  ...
                  </div>
                </div>
                <div className="postM">
                    <img src="/images/images.png" placeholder="im" />
                </div>
                <div className="postL">
                    <div className="pol1">
                    <div className="pof">
                       <FaRegHeart className="pi"/>
                       <FaRegComment  className="pi"/>
                       <FaRegPaperPlane  className="pi"/> 
                    </div>
                    <div className='poff'>
                       <FaRegBookmark  className="pi"/>
                    </div>
                    </div>
                    <div className="pol2">
                    <form>
                        <input type="text" placeholder="post a comment" className="pii" />
                        <button type="subit" value="post" className="piii">post </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Post;