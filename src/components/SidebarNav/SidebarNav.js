import React from 'react';
import './SidebarNav.css'

/** SidebarNav is used for upper navigation like Home, Search, etc
    as well as to navigate to the playlists. In case of upper navigation,
    it also has an Icon. */
function SidebarNav({Icon, title}) {
    return (
        <div className="sidebarNav">
            {Icon && <Icon className="sidebarNav__icon" />}

            {/* If icon is present, it's an upper navigation
                else it's a playlist navigation */}
            {Icon?<h4>{title}</h4>:<p>{title}</p>}
        </div>
    )
}

export default SidebarNav
