
import { Link } from "react-router"

function Login() {
    return (
        <div className="title-bar">
            <div className="container custom-container-lg">
                <div className="title-bar-inner">
                    <Link className="title-bar-link" to={"/"}>
                        Home
                    </Link>
                    <span>login</span>
                </div>
            </div>
        </div>
    )
}


export default Login