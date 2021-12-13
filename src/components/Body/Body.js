import React from 'react'
import Header from '../Header/Header'
import { useStateContextValue } from '../StateProvider'
import './Body.css'

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
        </div>
    )
}

export default Body
