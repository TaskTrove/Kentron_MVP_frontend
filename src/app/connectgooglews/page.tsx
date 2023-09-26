import React from 'react';
import "./connectgoogle.css";
import Image from 'next/image';
import logo from "../connectgooglews/googlelogo.png";

const page = () => {
  return (
    <div className='connectgoogle'>
        <form>
            <div className="googleheader">
                <Image src={logo} alt="none" className='imggoogle'/>
                <div className='headertext'>Google Workspaces</div>
            </div>
            <div className="check1">
                <div className='gwchecks'><input type="checkbox" name="Google-Drive" className='checkpoints'/><p className='checktexts'>Google Drive</p></div>
                <div className='gwchecks check2'><input type="checkbox" name="Google-Vault" className='checkpoints'/><p className='checktexts'>Google Vault</p></div>
            </div>
            <div className='gwchecks check3'><input type="checkbox" name="Gmail" className='checkpoints'/><p className='checktexts'>Gmail</p></div>
            <div className='gwchecks check3'><input type="checkbox" name="Sync" className='checkpoints'/><p className='checktexts'>Sync Drafts, Spam and Trash</p></div>
            <div className='radioclicks'><input type="radio" name="userandshared"/><p className='radiotxt'>Sync user drives and Shared drives of selected accounts</p></div>
            <div className='radioclicks radiocheck1'><input type="radio" name="onlyshared"/><p className='radiotxt'>Only sync all organizational Shared drives</p></div>
            <div className="syncmode">
                <label htmlFor="sync mode">Synchromization mode</label>
                <select name="syncmode">
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
            <button type='submit' className='btnsubmit'>Continue as srv-service-account</button>
        </form>
    </div>
  )
}

export default page