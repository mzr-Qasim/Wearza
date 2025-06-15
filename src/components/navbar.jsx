
import { useState } from "react"
import { Link } from "react-router"
import main_logo from "/images/main_logo.svg"




export function Navbar() {
    const [showSearchbar, setShowSearchBar] = useState(false)
    const handleSearchBar = () => {
        setShowSearchBar(!showSearchbar)
    }

    const [showMenu, setShowMenu] = useState(false)
    const handleNavToggle = () => {
        setShowMenu(!showMenu)
    }

    return (
        <nav className="Navbar">
            <div className="container custom-container-lg">


                <div className="nav-inner">
                    <div className={`nav-left ${showMenu ? 'navShow' : ''}`}>
                        <ul>
                            <li><Link to={"/"}>home</Link></li>
                            <li><Link to={"shop"}>shop</Link></li>
                            <li><a href="">features</a></li>
                            <li><a href="">lookbook</a></li>
                            <li><Link to={"about-us"}>about us</Link></li>
                            <li><a href="">blog</a></li>
                        </ul>
                    </div>
                    <a href="" className="main_logo"><img src={main_logo} alt="" /></a>
                    <div className="nav-right sm-hide">
                        <ul>
                            <li><button onClick={handleSearchBar} className="nav-right-items"><i className="icon-search"></i><span>Search</span></button></li>
                            <li><a href="" className="nav-right-items"><i className="icon-user"></i><span>account</span></a></li>
                            <li><a href="" className="nav-right-items selected-items"><i className="icon-favourite"></i><span>wishlist</span></a></li>
                            <li><a href="" className="nav-right-items selected-items"><i className="icon-cart"></i><span>cart</span></a></li>
                        </ul>

                    </div>
                    <button className="nav_hambtn" onClick={handleNavToggle}><i className={showMenu ? "icon-ham_close_btn" : "icon-hamburger"}></i></button>
                </div>
            </div>
            <div className={`searchMenu ${showSearchbar ? "searchbarshow" : ""}`}>
                <button className="menu_close" onClick={handleSearchBar}><i className="icon-ham_close_btn"></i></button>
                <div className="search-bar-inner">
                    <div className="container">
                        <div className="search-input-inner">
                            <input className="searchInput" placeholder="Search for products, brands and more" type="text" name="search" />
                            <button className="search_query"><i className="icon-search"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}