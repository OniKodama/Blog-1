import React from 'react'
import './NavBar.css'
import Img1 from '../images/img-1.jpg';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="top">
            <div className="topLeft">
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-pinterest"></i>
                <i className="fab fa-instagram"></i>
            </div>
            <div className="topCenter">
            <ul className="topList">
                <li className="topListItem"><Link to = "/" className = "link">HOME</Link></li>
                <li className="topListItem"><Link to = "/" className = "link">ABOUT</Link></li>
                <li className="topListItem"><Link to = "/" className = "link">CONTACT</Link></li>
                <li className="topListItem"><Link to = "/write" className = "link">WRITE</Link></li>
            </ul>
            </div>
            <div className="topRight">
                <img className = "topImg" src={Img1} alt = "" />
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}

export default NavBar
