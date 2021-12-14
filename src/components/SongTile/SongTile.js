import React from 'react'

function SongTile( {track} ) {
    return (
        <div className = 'songTile'>
            {/* Song album pictue */}
            <img className='songTile__album'
                src={track.album.images[0].url} 
                alt="" 
            />
            {/*  */}
            <div className="songTile__info"></div>

            {/* Artists */}
            <p>
                {track.artists.map((artist)=> artist.name).join(", ")} {" "} - {" "} {track.album.name}
            </p>
        </div>
    )
}

export default SongTile