import React from "react";
import Image from "next/image";

const WorkSpacesBody = () => {
  return (
    <div className="workspace-body-container">
      <h2 className="workspace-body-header">
        <Image src="/Google.png" height={60} width={60} alt="google" />
        Google Workspaces
      </h2>
      
    </div>
  );
};

export default WorkSpacesBody;
