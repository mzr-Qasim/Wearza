
import category_card_img from "../images/category_card_2.jpg"

export function CategoriesCard() {
    return (
        <div className="col-sm-6 col-md-6 col-lg-3 ">
            <div className="categories-card">
                    <figure>
                        <img src={category_card_img} loading="lazy" alt="" />
                        <figcaption>
                            <h4 className="pb-3">men</h4>
                            <a href="" className="theme-btn secondary_btn">shop now</a>
                        </figcaption>
                    </figure>
            </div>
        </div>

    )
}