import Link from "next/link";
import React from "react";

const WorkSpaceFormStep2 = () => {
  return (
    <form className="workspace-form workspace-body-container">
      <div>
        <label htmlFor="name" className="input-label">
          Name*
        </label>
        <input type="text" id="name" className="input" />
      </div>
      <div>
        <label htmlFor="syncMode" className="dropdown-label">
          Sync mode:
        </label>
        <select id="syncMode" className="dropdown">
          <option value="oneTimeSync">One-time sync</option>
        </select>
      </div>
      <div className="date-section">
        <div className="date-section-containers">
        <label htmlFor="startDate" className="input-label">
          Start date
        </label>
        <input type="date" id="startDate" className="input" />
        </div>
      <div className="date-section-containers">
        <label htmlFor="endDate" className="input-label">
          End date
        </label>
        <input type="date" id="endDate" className="input" />
        </div>
      </div>
      <div className="btn-section">
        <button type="button" className="continue-button">
          Next
        </button>
        <button className="cancel-button">
          {" "}
          <Link href="/dashboard">Cancel </Link>
        </button>
      </div>
    </form>
  );
};

export default WorkSpaceFormStep2;
