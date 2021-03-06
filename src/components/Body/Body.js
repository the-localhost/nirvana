import React from 'react'
import Header from '../Header/Header'
import { useStateContextValue } from '../StateProvider'
import './Body.css'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongTile from '../SongTile/SongTile';

function Body() {
    const [{discover_weekly}, dispatch] = useStateContextValue();

    return (
        <div className="body">
            <Header />
            <div className="body__info">
                <img src={discover_weekly?.images[0]?.url} alt="" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="body__songs">
                {/* Icons */}
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body__shuffle" />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
                {/* List of Songs */}
                {discover_weekly?.tracks.items.map((item, id)=> 
                    <SongTile key={id} track={item.track} />
                )}
            </div>
        </div>
    )
}

export default Body
