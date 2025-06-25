
import { Link } from "react-router"




function Favorites(){
    return (
        <div className="title-bar">
                <div className="container custom-container-lg">
                    <div className="title-bar-inner">
                        <Link className="title-bar-link" to={"/"}>
                            Home
                        </Link>
                        <span>My Wishlist</span>
                    </div>
                </div>
            </div>
    )
}

export default Favorites