import React from 'react'
import Image from 'next/image'

const WorkSpacesBody = () => {
  return (
    <div className='workspace-body-container'>
        <h2 className="workspace-body-header">
            <Image src="/Google.png" height={60} width={60} alt="google" />
            Google Workspaces
        </h2>

        <form className='workspace-form'>
      <div className='checkbox1'>
        <label htmlFor="googleDrive" className="checkbox-label">
          <input type="checkbox" id="googleDrive" className="checkbox" />
          Google Drive
        </label>
        <label htmlFor="googleVault" className="checkbox-label">
          <input type="checkbox" id="googleVault" className="checkbox" />
          Google Vault
        </label>
      </div>
      <div className='checkbox2'>
        <label htmlFor="gmail" className="checkbox-label">
          <input type="checkbox" id="gmail" className="checkbox" />
          Gmail
        </label>
        <label htmlFor="sharedDrive" className="checkbox-label">
          <input type="checkbox" id="sharedDrive" className="checkbox" />
          Shared Drive
        </label>
      </div>
      <div>
        <label htmlFor="syncDraftsSpamTrash" className="checkbox-label">
          <input type="checkbox" id="syncDraftsSpamTrash" className="checkbox" />
          Sync Drafts, Spam, and Trash
        </label>
      </div>
      <div>
        <label className="radio-label">
          <input type="radio" id="syncUserDrives" name="syncOption" className="radio" />
          Sync user drives and Shared drives of selected accounts
        </label>
        <br />
        <label className="radio-label">
          <input type="radio" id="syncOrgSharedDrives" name="syncOption" className="radio" />
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
      <button type="button" className="continue-button">
        Continue as srv-service-account
      </button>
      <p className='ending-para'>Next screen: Select account(s) or Load users list</p>
    </form>
    </div>
  )
}

export default WorkSpacesBody