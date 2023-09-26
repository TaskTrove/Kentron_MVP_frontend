import React from 'react';
import "./connectslack1.css";
import Image from 'next/image';
import slacklogo from "./slack.png";

const page = () => {
  return (
    <div className='connectslack1'>
        <form>
            <div className="slackheader">
                <Image src={slacklogo} alt="none" className='imgslack'/>
                <div className='headertext'>Slack Enterprise Sources</div>
            </div>
            <div className="namebox">
              <p className='nametxt'>Name <span>*</span></p>
              <input type="text"/>
            </div>

            <div className="syncmodes">
                <label htmlFor="syncmode">Synchromization mode</label>
                <select name="syncmodeslack">
                    <option value="none">Select any mode</option>
                    <option value="One-time sync">One-time sync</option>
                </select>
            </div>

            <div className="date">
                <div className="dates">
                    <p className="text">Start date</p>
                    <input type="date" name="startdate" />
                </div>
                <div className="dates finish">
                    <p className="text">Finish date</p>
                    <input type="date" name="finishdate" />
                </div>
            </div>

            <div className="btnbox">
                  <button className='servicebtn'>Continue as srv-service-account</button>
                  <button className='cancelbtn'>Cancel</button>
            </div>
        </form>
    </div>
  )
}

export default page