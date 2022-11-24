import React from 'react'
import { images } from '../constants/Index'
import './Header.css';
export const Header = () => {
    return (
        <div className="app__header" id="home">
            <div >
                <h1 className="app__header-h1">Will Serve Your Cravings</h1>
                <button type="button" className="custom__button">Explore Menu</button>
            </div>

            <div className="app__header_img">
                <img src={images.header} alt="header_img" />
            </div>
        </div>
    )
}
