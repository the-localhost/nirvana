import React from 'react'
import SidebarNav from '../SidebarNav/SidebarNav'
import './SideBar.css'

// this contains our icon, playlists, & navigation options
function SideBar() {
    return (
        <div className="sidebar">
            <img className="sidebar_logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
                alt="Spotify" 
            />
            <SidebarNav />
        </div>
    )
}

export default SideBar
