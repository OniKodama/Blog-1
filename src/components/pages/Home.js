import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Posts from '../Posts'

const Home = () => {
    return (
        <>
            <Header /> 
            <div className = "home">
             <Posts />
             <Sidebar />
            </div>
        </>
    )
}

export default Home
