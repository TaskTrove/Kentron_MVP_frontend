import React from 'react'
import SideBar from '../../../components/SideBar'
import WorkSpacesNavBar from '../../../components/WorkSpacesNavBar'
import './index.css'
import WorkSpacesBody from '../../../components/WorkSpacesBody'

const page = () => {
  return (
    <div className='dashboard-container'>
        <SideBar />
        <div className="dashboard-body">
            <WorkSpacesNavBar />
            <WorkSpacesBody />
        </div>
    </div>
  )
}

export default page