import Link from 'next/link'
import React from 'react'

const WorkSpacesNavBar = () => {
  return (
        <ul className='workspace-nav-container'>
            <li className="workspace-nav-link">
                <Link href="/dashboard">Home</Link>
            </li>
            <li className="workspace-nav-link active">
                <Link href="/dashboard">Data Sources</Link>
            </li>
            <li className="workspace-nav-link">
                <Link href="/dashboard">Searches</Link>
            </li>
            <li className="workspace-nav-link">
                <Link href="/dashboard">Exports</Link>
            </li>
            <li className="workspace-nav-link">
                <Link href="/dashboard">Settings</Link>
            </li>
        </ul>
  )
}

export default WorkSpacesNavBar