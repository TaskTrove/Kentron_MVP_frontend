import React from 'react';
import "./newsearch.css";

const page = () => {
  return (
    <div className='newsearch'>
        <form>
            <div className="namebox">
              <p className='nametxt'>Name</p>
              <input type="text"/>
            </div>

            <div className="namebox boxes2">
              <p className='nametxt'>Description</p>
              <input type="text"/>
            </div>

            <div className="btnbox">
                  <button className='nextbtn'>Next</button>
                  <button className='cancelbtn'>Cancel</button>
            </div>
        </form>
    </div>
  )
}

export default page