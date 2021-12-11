import React from 'react'
import SidebarNav from '../SidebarNav/SidebarNav'
import './SideBar.css'
// importing material-UI icons
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useStateContextValue } from '../StateProvider';

// this contains our icon, playlists, & navigation options
function SideBar() {
    const [{playlists}, dispatch] = useStateContextValue();
    return (
        <div className="sidebar">
            <img className="sidebar__logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
                alt="Spotify" 
            />
            {/* Upper navigation (Home, Search, Library) */}
            <SidebarNav Icon={HomeIcon} title="Home"/>
            <SidebarNav Icon={SearchIcon} title="Search"/>
            <SidebarNav Icon={LibraryMusicIcon} title="Your Library"/>
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
            {/* Navigate to the playlists. */}
            {playlists?.items?.map((playlist, id) => (
                <SidebarNav key={id} title={playlist.name} />
            ))}
        </div>
    )
}

export default SideBar
