import Link from "next/link";
import React from "react";

const WorkSpaceFormStep1 = () => {
  return (
    <div>
      {" "}
      <form className="workspace-form">
        <div className="checkbox-container">
          <div className="checkbox-group">
            <label htmlFor="googleDrive" className="checkbox-label">
              <input type="checkbox" id="googleDrive" className="checkbox" />
              Google Drive
            </label>
            <label htmlFor="googleVault" className="checkbox-label">
              <input type="checkbox" id="googleVault" className="checkbox" />
              Google Vault
            </label>
          </div>
          <div className="checkbox-group">
            <label htmlFor="gmail" className="checkbox-label">
              <input type="checkbox" id="gmail" className="checkbox" />
              Gmail
            </label>
            <label htmlFor="sharedDrive" className="checkbox-label">
              <input type="checkbox" id="sharedDrive" className="checkbox" />
              Shared Drive
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="syncDraftsSpamTrash" className="checkbox-label">
            <input
              type="checkbox"
              id="syncDraftsSpamTrash"
              className="checkbox"
            />
            Sync Drafts, Spam, and Trash
          </label>
        </div>
        <div>
          <label className="radio-label">
            <input
              type="radio"
              id="syncUserDrives"
              name="syncOption"
              className="radio"
            />
            Sync user drives and Shared drives of selected accounts
          </label>
          <label className="radio-label">
            <input
              type="radio"
              id="syncOrgSharedDrives"
              name="syncOption"
              className="radio"
            />
            Only sync all organizational Shared drives
          </label>
        </div>
        <div>
          <label htmlFor="syncMode" className="dropdown-label">
            Synchronization mode:
            <select id="syncMode" className="dropdown">
              <option value="oneTimeSync">One-time sync</option>
            </select>
          </label>
        </div>
        <Link href="/dashboard/step-2">
        <button className="continue-button">Next</button>
        </Link>
        <p className="ending-para">
          Next screen: Select account(s) or Load users list
        </p>
      </form>
    </div>
  );
};

export default WorkSpaceFormStep1;
