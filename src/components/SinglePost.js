import React from 'react'
import Img5 from '../images/img-5.jpg';
import './SinglePost.css'

const SinglePost = () => {
    return (
        <div className = "singlePost">
            <div className = "singlePostWrapper">
                <img className = "singlePostImg" src = {Img5} alt =""/>
                <h1 className = "singlePostTitle">
                    Lorem ipsum dolor
                    <div className = "singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className = "singlePostInfo">
                    <span className = "singlePostAuthor">Author: <b>Julian</b></span>
                    <span className = "singlePostDate">1 hour ago</span>
                </div>
                <p className = "singlePostDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et mi ut libero accumsan consequat. Fusce massa felis, posuere eget lorem quis, finibus viverra sapien. Donec convallis ante venenatis dapibus placerat. Maecenas eget tellus sed ante aliquet dapibus vel in massa. Nunc finibus ut urna et bibendum. Aenean elit leo, hendrerit eget consequat sit amet, tristique id leo. In sed maximus est.
                Suspendisse mauris nisl, tristique nec turpis nec, convallis sodales metus. Cras gravida mauris vel sem ultrices euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque quis libero arcu. Vestibulum bibendum sapien sed sodales lacinia. Fusce risus lorem, pellentesque a urna quis, dictum viverra leo. Curabitur tincidunt massa eget lectus elementum, in laoreet elit dictum. Donec eu dolor non tellus viverra placerat. Phasellus pretium sapien id turpis vehicula dignissim. Donec finibus eros nisi, in cursus dolor malesuada eget. Morbi in placerat ex. Nulla velit ex, auctor rutrum commodo id, tempor in quam. Pellentesque cursus ipsum sem. Nunc ut ex aliquam, mollis sem eget, condimentum ligula.
                </p>
            </div>
        </div>
    )
}

export default SinglePost
