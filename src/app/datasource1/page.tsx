import React from 'react';
import "./datasource1.css";
import Image from 'next/image';
import google from "./googlelogo.png";
import slack from "./slack.png";
import jira from "./Jira.png";
import confluence from "./confluence.png";
import microsoft from "./microsoft365.png";

const page = () => {
  return (
    <div className='datasource1'>
        <div className="datasrccont">
            <div className="services">
              <Image src={slack} alt="none" className='imglogo'/>
              <p className='s0'>Slack Enterprise</p>
              <button>connect</button>
            </div>
            <div className="services">
              <Image src={google} alt="none" className='imglogo'/>
              <p className='s1'>Google Workspace</p>
              <button>connect</button>
            </div>
            <div className="services">
              <Image src={jira} alt="none" className='imglogo'/>
              <p className='s2'>Jira</p>
              <button>connect</button>
            </div>
            <div className="services">
              <Image src={confluence} alt="none" className='imglogo'/>
              <p className='s3'>Confluence</p>
              <button>connect</button>
            </div>
            <div className="services">
              <Image src={microsoft} alt="none" className='imglogo'/>
              <p className='s4'>Microsoft 365</p>
              <button>connect</button>
            </div>
        </div>
    </div>
  )
}

export default page