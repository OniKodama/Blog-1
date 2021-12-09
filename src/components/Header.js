import React from 'react'
import './Header.css'
import Img2 from '../images/img-2.jpg';

const Header = () => {
    return (
        <div className = "header">
            <div className = "headerTitles">
                <span className = "headerTitleSm">React & Node</span>
                <span className = "headerTitleLg">Blog</span>
            </div>
            <img className = "headerImg" src= {Img2} alt= "" />
        </div>
    )
}

export default Header
