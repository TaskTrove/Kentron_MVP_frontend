import React from 'react';
import "./addusers.css";
import Image from 'next/image';
import slacklogo from "./slack.png";

const page = () => {
  return (
    <div className='connectslack2'>
        <form>
          <div className="slackheader">
            <Image src={slacklogo} alt="none" className='imgslack'/>
            <div className='headertext'>Slack Enterprise Sources</div>
          </div>
          <div className="adduserbox">
            <p>Add users</p>
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