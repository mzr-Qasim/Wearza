

import { useState } from 'react'
import { Link } from 'react-router'
import { Rating } from 'react-simple-star-rating'
import { ShopContext } from '../App'
import { useContext } from 'react';



export function ProductCard(props) {
    const { cart, setCart } = useContext(ShopContext)


    const addToCart = (p) => {
        const matchedProduct = cart.find((i) => i.id == p.id)
        if (!matchedProduct) {
            p.qty = 1
            setCart([...cart, p])
        }
    }

    const [showquickview, setShowQuickView] = useState(false)
    const handleQuickView = () => {
        setShowQuickView(!showquickview)
    }
    return (
        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
            <div className="product-card">
                <figure className={cart.find((i) => i.id == props.product.id) ? "addedCart" : ""}>
                    <Link to={`/products/${props.product.id}`}>
                        <img className="main_img" src={props.product.image} loading="lazy" alt="" />
                        <img className="hover_img" src={props.product.hover_img} loading="lazy" alt="" />
                    </Link>
                    <div className="product-rating">
                        <Rating emptyColor={"white"} fillColor={"#F5C518"} size={19} readonly={true} allowFraction={true} initialValue={props.product.rating.rate} />
                    </div>
                    <ul className="product-actions">
                        <li><button><i className="icon-favourite"></i></button></li>
                        <li><button onClick={handleQuickView}><i className="icon-quick-view"></i></button></li>
                        <li><button onClick={() => addToCart(props.product)}><i className="icon-quick-shop"></i></button></li>
                    </ul>
                    <div className={cart.find((i) => i.id == props.product.id) ? "added-to-cart" : "d-none"}>
                        <h4>ADDED TO CART</h4>
                    </div>
                </figure>
                <div className="product-details pt-3">
                    <div className="color-swatches">
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
                    <Link className="product-title" to={`/products/${props.product.id}`}>{props.product.title}</Link>
                    <small className="product-price pt-1">${props.product.price}</small>
                </div>
                <div className={`quick-view ${showquickview ? "show-quick-view" : ""}`}>
                    <button className="menu_close" onClick={handleQuickView}><i className="icon-ham_close_btn"></i></button>
                </div>
            </div>
        </div>
    )
}