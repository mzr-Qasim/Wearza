import React from "react"
import { Link } from "react-router"

function AboutUs() {
    return (
        <div className="title-bar">
            <div className="container custom-container-lg">
                <div className="title-bar-inner">
                            <Link className="title-bar-link" to={"/"}>Home</Link>    
                            <span>About us</span>
                </div>    

            </div>
        </div>



    )
}


export default AboutUs


