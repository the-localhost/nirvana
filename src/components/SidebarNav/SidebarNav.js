import React from 'react'

// this is the navigation option in sidebar (like Home, Library, etc.)
// it has an icon and a name
function SidebarNav({Icon, title}) {
    return (
        <div>
            <p>{title}</p>
        </div>
    )
}

export default SidebarNav
