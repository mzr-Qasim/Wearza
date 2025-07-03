
import { Link } from "react-router"

export function StyleShowCaseCard(props) {
    return (
        <div className="col-md-6 col-lg-6">
            <div className="showcasecard">
                <figure className="pb-3">
                    {/* <video src={props.product.video}
                        preload="metadata" autoPlay muted loop playsInline></video> */}
                        <img src={props.product.image} alt="" />
                </figure>
                <figcaption>
                    <h4 className="pb-3">{props.product.title}</h4>
                    <p className="pb-3">{props.product.caption}</p>
                    <div className="shop-all-btn">
                        <Link to={"/shop"} className="theme-btn tertiary_btn">shop now</Link>
                    </div>
                </figcaption>
            </div>
        </div>
    )



}
