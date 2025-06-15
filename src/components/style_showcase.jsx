


export function StyleShowCaseCard(props) {
    return (
        <div className="col-md-6 col-lg-6">
            <figure>
                <video src={props.product.video}
                    preload="metadata" autoPlay muted loop playsInline></video>
            </figure>
        </div>
    )



}
