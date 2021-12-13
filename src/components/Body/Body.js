import React from 'react'
import Header from '../Header/Header'
import './Body.css'

function Body() {
    return (
        <div className="body">
            <Header />
            <div className="body__info">
                <img src="https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/wxbtkeD8kGNV7uDBykUPTEutmT9zPs5qC_Ex1nnxaOF9SybbfeuiDvuyvM835BtbImxfo1nV8mYzUjYfSs-rISFQV2zr9KxpQBfBMeh-Mds=/NzU6NzM6OTBUMzItMjEtMQ==" alt="" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>decription...</p>
                </div>
            </div>
        </div>
    )
}

export default Body
