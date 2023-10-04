import Image from "next/image";
import React from "react";

const WebPageNav = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <button className="left-button">
          <Image
            height={50}
            width={55}
            src="/Circled-Menu.png"
            alt="Menu Bar"
            className="menu-bar-icon"
          />
        </button>
      </div>
      <div className="navbar-middle">Kentron</div>
      <div className="navbar-right">
        <button className="right-button">
          <Image
            height={100}
            width={150}
            src="/newtopic.png"
            alt="Button Icon"
            className="button-icon"
          />
        </button>
      </div>
    </div>
  );
};

export default WebPageNav;
