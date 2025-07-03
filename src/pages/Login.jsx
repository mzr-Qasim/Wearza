
import { Link } from "react-router"

function Login() {
    return (
        <>
            <div className="title-bar">
                <div className="container custom-container-lg">
                    <div className="title-bar-inner">
                        <Link className="title-bar-link" to={"/"}>
                            Home
                        </Link>
                        <span>account</span>
                    </div>
                </div>
            </div>
            <section className="Login">
                <div className="container custom-container-sm">
                    <div className="Page-main-heading d-flex justify-content-center pb-4">
                        <h3>My Account</h3>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="col-inner">
                                <b className="pb-3">LOGIN</b>
                                <small className="mb-4">If you have an account with us, please log in.</small>
                                <input type="text" className="mb-3 form" placeholder="Email" />
                                <input type="text" className="mb-4 form" placeholder="Password" />
                                <div className="login-info">
                                     <button className="theme-btn primary_btn" type="submit">sign in</button>
                                    <Link className="forgot-password">Forgot your password?</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="col-inner">
                                <b className="pb-3">NEW CUSTOMER?</b>
                                <small className="mb-4">Registering for this site allows you to access your order status and history. We’ll get a new account set up for you in no time. For this will only ask you for information necessary to make the purchase process faster and easier</small>
                                <Link to={"/create-account"} className="theme-btn primary_btn">create an account</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Login