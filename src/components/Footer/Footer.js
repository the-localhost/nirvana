import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import {Grid, Slider} from '@mui/material';

function Footer() {
    return (
        <div className="footer">
            {/* Left Part */}
            <div className="footer__left">
                {/* Song Image */}
                <img 
                    className="footer__albumLogo"
                    src="https://yt3.ggpht.com/ytc/AKedOLSB2Y0kx4m8yrfqbUyQoJnr_hGSR1mDtBjVD66eLg=s900-c-k-c0x00ffffff-no-rj" 
                    alt="" 
                />
                {/* Song & Artist */}
                <div className="footer__songInfo">
                    <h4>Hello</h4>
                    <p>Adelle</p>
                </div>
            </div>
            {/* Center Part */}
            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>
            {/* Right Part */}
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        {/* Volume control slider */}
                        <Slider aria-labelledby="continuous-slider" />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
