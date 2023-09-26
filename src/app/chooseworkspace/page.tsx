import React from 'react';
import "./choose.css";
import Image from 'next/image';
import slacklogo from "./slack.png";
import folders from "./folderoverlap.png";

const page = () => {
  return (
    <div className='choosework'>
      <form>
          <div className="slackheader">
              <Image src={slacklogo} alt="none" className='imgslack'/>
              <div className='headertext'>Slack Enterprise Sources</div>
          </div>
          <p className='chooseopt'>Select workspaces to sync (3 selected)</p>

          <div className="slackcheckbox">
            <input type="checkbox" name="check1"/>
            <Image src={folders} alt="none" className='imgico'/>
            <p>Private channels</p>
          </div>
          <div className="slackcheckbox">
            <input type="checkbox" name="check1"/>
            <Image src={folders} alt="none" className='imgico'/>
            <p>Private channels</p>
          </div>
          <div className="slackcheckbox">
            <input type="checkbox" name="check1"/>
            <Image src={folders} alt="none" className='imgico'/>
            <p>Private channels</p>
          </div>

          <div className="btnbox">
                <button className='syncbtn'>Sync data</button>
                <button className='cancelbtn'>Cancel</button>
          </div>
      </form>
    </div>
  )
}

export default page