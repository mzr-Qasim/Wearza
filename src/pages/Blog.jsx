import { Link } from "react-router"

function Blog() {
    return (
        <>
            <div className="title-bar">
                <div className="container custom-container-lg">
                    <div className="title-bar-inner">
                        <Link className="title-bar-link" to={"/"}>Home</Link>
                        <span>blogs</span>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Blog