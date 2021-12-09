import React from 'react'
import './Sidebar.css'
import Img3 from '../images/img-3.jpg';

const Sidebar = () => {
    return (
        <div className = "sidebar">
            <div className = "sidebarItem">
                <span className = "sidebarTitle">ABOUT ME</span>
                <img className = "sidebarImg" src = {Img3} alt= ""/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut hendrerit turpis. Ut mattis, urna sagittis venenatis fermentum, elit justo iaculis lorem.</p>
            </div>
            <div className = "sidebarItem">
                <span className = "sidebarTitle">CATEGORIES</span>
                <ul className = "sidebarList">
                    <li className = "sidebarListItem">Life</li>
                    <li className = "sidebarListItem">Music</li>
                    <li className = "sidebarListItem">Style</li>
                    <li className = "sidebarListItem">Sport</li>
                    <li className = "sidebarListItem">Tech</li>
                    <li className = "sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className = "sidebarItem">
                <span className = "sidebarTitle">FOLLOW US</span>
                <div className = "sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter"></i>
                    <i className="sidebarIcon fab fa-pinterest"></i>
                    <i className="sidebarIcon fab fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
