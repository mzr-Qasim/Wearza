import product_card_img from "../images/product-card-2.jpg"
import card_hover_img from "../images/card-hover-2.jpg"





export function ProductCard() {

    return (
        <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="product-card">
                <figure >
                    <img className="main_img" src={product_card_img} loading="lazy" alt="" />
                    <img className="hover_img" src={card_hover_img} loading="lazy" alt="" />

                    <ul className="product-actions">
                        <li><button><i className="icon-favourite"></i></button></li>
                        <li><button><i className="icon-quick-shop"></i></button></li>
                        <li><button><i className="icon-quick-view"></i></button></li>
                    </ul>
                </figure>
                <div className="color-swatches py-2">
                    <ul>
                        <li>
                            <button
                                className="swatch black active"></button>
                        </li>
                        <li>
                            <button
                                className="swatch brown"></button>
                        </li>
                        <li>
                            <button
                                className="swatch grey"></button>
                        </li>
                    </ul>

                </div>
                <div className="product-details">
                        <a href="" className="product-title">brown leather jacket</a>
                <small className="product-price pt-1">$ 800.00</small>
                </div>
            </div>
        </div>
    )
}