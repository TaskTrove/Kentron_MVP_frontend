import React from 'react';
import "./connectslacks2.css";
import Image from 'next/image';
import slacklogo from "./slack.png";
import image1 from "./checks1.png";
import image2 from "./checks2.png";
import image3 from "./checks3.png";
import image4 from "./checks4.png";


const page = () => {
  return (
    <div className='connectslack2'>
        <form>
            <div className="slackheader">
                <Image src={slacklogo} alt="none" className='imgslack'/>
                <div className='headertext'>Slack Enterprise Sources</div>
            </div>
            <p className='chooseopt'>Select data sources</p>
            
            <div className="slackcheckbox slackscheck1">
                <input type="checkbox" name="check1"/>
                <Image src={image1} alt="none" className='imgico'/>
                <p>Direct messages</p>
            </div>
            <div className="slackcheckbox">
                <input type="checkbox" name="check1"/>
                <Image src={image2} alt="none" className='imgico'/>
                <p>Group messages</p>
            </div>
            <div className="slackcheckbox">
                <input type="checkbox" name="check1"/>
                <Image src={image3} alt="none" className='imgico'/>
                <p>Private channels</p>
            </div>
            <div className="slackcheckbox">
                <input type="checkbox" name="check1"/>
                <Image src={image4} alt="none" className='imgico'/>
                <p>Public channels</p>
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