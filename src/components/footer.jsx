
import { Link } from "react-router"

function Footer() {
    return (
        <footer className="footer mt-5">
            <div className="container custom-container-lg">
                <div className="footer-wrapper">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3">
                            <ul className="footer-col-links">
                                <li className="pb-2"><b>INFORMATION</b></li>
                                <li><Link to={"#"}>About us</Link></li>
                                <li><Link to={"#"}>Contact Us</Link></li>
                                <li><Link to={"#"}>Career</Link></li>
                                <li><Link to={"#"}>My Account</Link></li>
                                <li><Link to={"#"}>Orders and Returns</Link></li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <ul className="footer-col-links">
                                <li className="pb-2"><b>QUICK SHOP</b></li>
                                <li><Link to={"#"}>Fashion</Link></li>
                                <li><Link to={"#"}>Men</Link></li>
                                <li><Link to={"#"}>Furniture</Link></li>
                                <li><Link to={"#"}>Home Decor</Link></li>
                                <li><Link to={"#"}>Shoes</Link></li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <ul className="footer-col-links">
                                <li className="pb-2"><b>CUSTOMER SERVICES</b></li>
                                <li><Link to={"#"}>Help & FAQs</Link></li>
                                <li><Link to={"#"}>Returns Policy</Link></li>
                                <li><Link to={"#"}>Terms & Conditions</Link></li>
                                <li><Link to={"#"}>Privacy Policy</Link></li>
                                <li><Link to={"#"}>Support Center</Link></li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <ul className="footer-col-links">
                                <li className="pb-2"><b>NEWSLETTER</b></li>
                                <li><p>Enter your email to receive daily news and get 20% off coupon for all items.</p></li>
                                <li><input type="text" className="form" placeholder="Email address" /></li>
                                <li><button className="theme-btn primary_btn">SUBMIT</button></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container custom-container-lg">
                    <p>© 2025 WAIRZ. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer