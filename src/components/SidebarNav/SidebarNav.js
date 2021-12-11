import React from 'react';
import './SidebarNav.css'

// this is the navigation option in sidebar (like Home, Library, etc.)
// it has an icon and a name
function SidebarNav({Icon, title}) {
    return (
        <div className="sidebarNav">
            <p>{title}</p>
        </div>
    )
}

export default SidebarNav
