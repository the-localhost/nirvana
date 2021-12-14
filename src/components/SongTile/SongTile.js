import React from 'react'
import './SongTile.css'

function SongTile( {track} ) {
    return (
        <div className = 'songTile'>
            {/* Song album pictue */}
            <img className='songTile__album'
                src={track.album.images[0].url} 
                alt="" 
            />
            {/*  */}
            <div className="songTile__info">
                {/* Song name */}
                <h1>{track.name}</h1>
                {/* Artists */}
                <p>
                    {track.artists.map((artist)=> artist.name).join(", ")} {" "} - {" "} {track.album.name}
                </p>
            </div>
        </div>
    )
}

export default SongTile