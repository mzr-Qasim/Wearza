
import { useState } from "react"
import { Link } from "react-router"
import main_logo from "/images/main_logo.svg"
import { ShopContext } from "../App"
import { useContext } from "react"


function Navbar() {
    const { cart, setCart } = useContext(ShopContext)


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
                            <li><Link to={"AI-Stylist"}>ai stylist</Link></li>
                            <li><Link to={"lookbook"}>lookbook</Link></li>
                            <li><Link to={"blog"}>blogs</Link></li>
                            <li><Link to={"about-us"}>about us</Link></li>
                        </ul>
                    </div>
                    <Link to={"/"}><img className="main_logo" src={main_logo} alt="" /></Link>
                    <div className="nav-right sm-hide">
                        <ul>
                            {/* <li><button onClick={handleSearchBar} className="nav-right-items"><i className="icon-search"></i><span className="right-items-title">Search</span></button></li> */}
                            <li><button class="nav-right-items" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"><i className="icon-search"></i><span className="right-items-title">Search</span></button></li>
                            <li><Link className="nav-right-items" to={"login"}><i className="icon-user"></i><span className="right-items-title">account</span></Link></li>
                            <li><Link className="nav-right-items selected-items" to={"favorites"}><i className="icon-favourite"></i><span className="right-items-title">wishlist</span><span className="count">0</span></Link></li>
                            <li><Link className="nav-right-items selected-items" to={"cart"}><i className="icon-cart"></i><span className="right-items-title">cart</span><span className="count">{cart.length}</span></Link></li>
                        </ul>

                    </div>

                    {/* <button className="nav_hambtn" onClick={handleNavToggle}><i className={showMenu ? "icon-ham_close_btn" : "icon-hamburger"}></i></button> */}
                    <div className="navbar-offcanvas d-none">
                        <button className="nav_hambtn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" ><i className={showMenu ? "icon-ham_close_btn" : "icon-hamburger"}></i></button>

                        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                            <div className="offcanvas-header">
                                <button className="menu_close" data-bs-dismiss="offcanvas" aria-label="Close"><i className="icon-ham_close_btn"></i></button>
                            </div>
                            <div className="offcanvas-body">
                                <div className="nav-left-md">
                                    <ul>
                                        <li><Link to={"/"}>home</Link></li>
                                        <li><Link to={"shop"}>shop</Link></li>
                                        <li><Link to={"AI-Stylist"}>ai stylist</Link></li>
                                        <li><Link to={"lookbook"}>lookbook</Link></li>
                                        <li><Link to={"blog"}>blogs</Link></li>
                                        <li><Link to={"about-us"}>about us</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className={`searchMenu ${showSearchbar ? "searchbarshow" : ""}`}>
                <button className="menu_close" onClick={handleSearchBar}><i className="icon-ham_close_btn"></i></button>
                <div className="search-bar-inner">
                    <div className="container">
                        <div className="search-input-inner">
                            <input className="searchInput" placeholder="Search for products, brands and more" type="text" name="search" />
                            <button className="search_query"><i className="icon-search"></i></button>
                        </div>
                    </div>
                </div>
            </div> */}
            <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                <div class="offcanvas-header">
                    <button class="menu_close" data-bs-dismiss="offcanvas" aria-label="Close"><i className="icon-ham_close_btn"></i></button>
                </div>
                <div class="offcanvas-body d-flex flex-colum align-items-center">
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

export default Navbar