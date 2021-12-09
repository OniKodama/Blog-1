import React from 'react'
import './Settings.css'
import Sidebar from './Sidebar'
import Img6 from '../images/img-6.jpg';

const Settings = () => {
    return (
        <div className = "settings">
            <div className = "settingsWrapper">
                <div className = "settingsTitle">
                    <span className = "settingsTitleUpdate">Update Your Account</span>
                    <span className = "settingsTitleDelete">Delete Your Account</span>
                </div>
                <form className = "settingsForm">
                    <label>Profile Picture</label>
                    <div className = "settingsPP">
                        <img src = {Img6} alt = ""/>
                        <label htmlFor = "fileInput">
                            <i className="settingsPPIcon far fa-user"></i>
                        </label>
                        <input type = "file" id = "fileInput" style = {{display: "none"}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Name" name="name" />
                    <label>Email</label>
                    <input type="email" placeholder="example@gmail.com" name="email" />
                    <label>Password</label>
                    <input type="password" placeholder="Password" name="password" />
                    <button className="settingsSubmitButton" type="submit">
                        Update
                    </button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Settings
