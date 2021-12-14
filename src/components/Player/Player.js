import React from 'react'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'
import SideBar from '../SideBar/SideBar'
import './Player.css'

// This is the component which will be rendered 
// when login is successful
function Player() {
    return (
        <div className="player">
            <div className="player__body">
                {/* SideBar */}
                <SideBar />
                {/* Body */}
                <Body />
            </div>
            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Player
