




export function CategoriesCard(props) {
    return (
        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 ">
            <div className="categories-card">
                    <figure>
                        <img src={props.product.image} loading="lazy" alt="" />
                        <figcaption>
                            <h4 className="pb-2">{props.product.title}</h4>
                            <a href="" className="theme-btn secondary_btn">shop now</a>
                        </figcaption>
                    </figure>
            </div>
        </div>

    )
}