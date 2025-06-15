

import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'




export function ProductCard(props) {
    const [showquickview, setShowQuickView] = useState(false)
    const handleQuickView = () => {
        setShowQuickView(!showquickview)
    }
    return (
        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
            <div className="product-card">
                <figure >
                    <img className="main_img" src={props.product.image} loading="lazy" alt="" />
                    <img className="hover_img" src={props.product.hover_img} loading="lazy" alt="" />
                    <div className="product-rating">
                        <Rating emptyColor={"white"} fillColor={"#F5C518"} size={19} readonly={true} allowFraction={true} initialValue={props.product.rating.rate} />
                    </div>

                    <ul className="product-actions">
                        <li><button><i className="icon-favourite"></i></button></li>
                        <li><button><i className="icon-quick-shop"></i></button></li>
                        <li><button onClick={handleQuickView}><i className="icon-quick-view"></i></button></li>
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
                    <a href="" className="product-title">{props.product.title}</a>
                    <small className="product-price pt-1">${props.product.price}</small>
                </div>
                <div className={`quick-view ${showquickview ? "show-quick-view" : ""}`}>
                    <button className="menu_close" onClick={handleQuickView}><i className="icon-ham_close_btn"></i></button>
                </div>
            </div>
        </div>
    )
}