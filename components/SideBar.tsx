import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const sidebar = () => {
  return (
    <div className='sidebar'>
        <h2 className='sidebar-header'>Workspaces</h2>
        <div className="sidebar-menu">
            <Image src="/Circled-Menu.png" height={64} width={64} alt='circled menu'/>
        </div>
        <div className="sidebar-nav">
            <Link  href="/dashboard/workspaces" className='sidebar-nav-link'>
                <Image src="/allworkspacesicon.png" height={40} width={40} alt='all workspaces'/> All Workspaces
            </Link>
            <Link href="/dashboard/sharedwithme" className='sidebar-nav-link' >
                <Image src="/sharedwithmeicon.png" height={40} width={40} alt='shared with me'/>Shared with me
            </Link>
            <Link href="/dashboard/myexports" className='sidebar-nav-link' >
                My Exports
            </Link>
        </div>
    </div>
  )
}

export default sidebar