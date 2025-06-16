


export function StyleShowCaseCard(props) {
    return (
        <div className="col-md-6 col-lg-6">
            <div className="showcasecard">
                <figure className="pb-4">
                    <video src={props.product.video}
                        preload="metadata" autoPlay muted loop playsInline></video>
                </figure>
                <figcaption>
                    <h4 className="pb-3">{props.product.title}</h4>
                    <p className="pb-3">{props.product.caption}</p>
                    <div className="shop-all-btn">
                        <a href="" className="theme-btn tertiary_btn">shop now</a>
                    </div>
                </figcaption>
            </div>
        </div>
    )



}
