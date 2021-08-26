import React from 'react'
import './sidebar.css';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className='sidebarMenu'>
                    <div className='sidebarTitle'>
                        
                    </div>
                    <div className='sidebarList'>
                        <div className='sidebarlistItem'>
                            Home
                        </div>
                        <div className='sidebarlistItem'>
                            Products
                        </div>
                        <div className='sidebarlistItem'>
                            Employees
                        </div>
                        <div className='sidebarlistItem'>
                            Analytics
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
