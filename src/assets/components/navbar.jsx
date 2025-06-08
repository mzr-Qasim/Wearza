
import { useState } from "react"
import main_logo from "../images/main_logo.svg"




export function Navbar() {
            const [showMenu, setShowMenu] = useState(false)
        const handleNavToggle = () =>{
            setShowMenu(!showMenu)
        }
        const [showSearchMenu, setSearchShowMenu] = useState(false)
        const handleSearchMenu = () => {
            setSearchShowMenu(!showSearchMenu)
        }
    return (
        <nav className="Navbar">
            <div className="container custom-container-lg">


                <div className="nav-inner">
                    <div className={`nav-left ${showMenu ? 'navShow' : ''}`}>
                        <ul>
                            <li><a href="">home</a></li>
                            <li><a href="">shop</a></li>
                            <li><a href="">features</a></li>
                            <li><a href="">lookbook</a></li>
                            <li><a href="">pages</a></li>
                            <li><a href="">blog</a></li>
                        </ul>
                    </div>
                    <a href="" className="main_logo"><img src={main_logo} alt="" /></a>
                    <div className="nav-right sm-hide">
                        <ul>
                            <li><button className="nav-right-items" onClick={handleSearchMenu}><i className="icon-search"></i><span>Search</span></button></li>
                            <li><a href="" className="nav-right-items"><i className="icon-user"></i><span>account</span></a></li>
                            <li><a href="" className="nav-right-items selected-items"><i className="icon-favourite"></i><span>wishlist</span></a></li>
                            <li><a href="" className="nav-right-items selected-items"><i className="icon-cart"></i><span>cart</span></a></li>
                        </ul>

                    </div>
                    <button className="nav_hambtn" onClick={handleNavToggle}><i className={showMenu ? "icon-ham_close_btn" : "icon-hamburger"}></i></button>
                </div>
            </div>
        </nav>
    )
}