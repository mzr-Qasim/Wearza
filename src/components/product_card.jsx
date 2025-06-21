

import { useState } from 'react'
import { Link } from 'react-router'
import { Rating } from 'react-simple-star-rating'
import { countContext } from '../App'
import { useContext } from 'react'



export function ProductCard(props) {

    const {count, setCount} = useContext(countContext)

    const addToCart = () =>{
        setCount(count + 1)
    }

    const [showquickview, setShowQuickView] = useState(false)
    const handleQuickView = () => {
        setShowQuickView(!showquickview)
    }
    return (
        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
            <div className="product-card">
                <figure >
                    <Link to={`/products/${props.product.id}`}>
                        <img className="main_img" src={props.product.image} loading="lazy" alt="" />
                        <img className="hover_img" src={props.product.hover_img} loading="lazy" alt="" />
                    </Link>
                    <div className="product-rating">
                        <Rating emptyColor={"white"} fillColor={"#F5C518"} size={19} readonly={true} allowFraction={true} initialValue={props.product.rating.rate} />
                    </div>
{/* #F5C518 */}
                    <ul className="product-actions">
                        <li><button><i className="icon-favourite"></i></button></li>
                        <li><button onClick={handleQuickView}><i className="icon-quick-view"></i></button></li>
                        <li><button onClick={addToCart}><i className="icon-quick-shop"></i></button></li>
                    </ul>
                    <div className="added-to-cart">
                        <h4>ADDED TO CART</h4>
                    </div>
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