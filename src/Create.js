import React from 'react';
import { FaCamera } from 'react-icons/fa';
import "./App.css";  
const Create = ()=>{
    return (
        <div className="create">
            <form >
              <div className="create__input">
                  <input type="text" className="createinput" placeholder="post a photo"  />
              </div>
            
            <div className="create__second">
                <div className="create__second_a">
                    <label htmlFor="file">
                        <FaCamera className="camera" />
                    </label>
                    <input type="file" className="file" id="file" />
                </div>
                <div className="create__second_b">
                   <input type="submit" value="create" className="btn-submit" />
                </div>
            </div>
            </form>
        </div>
    )
};

export default Create;



