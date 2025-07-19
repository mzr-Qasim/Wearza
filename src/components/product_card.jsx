

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
                        <li><button data-bs-toggle="offcanvas" data-bs-target="#genieBot" aria-controls="offcanvasTop"><i className="icon-quick-view"></i></button></li>
                        <li><button onClick={() => addToCart(props.product)}><i className="icon-quick-shop"></i></button></li>
                    </ul>
                    <div className={cart.find((i) => i.id == props.product.id) ? "added-to-cart" : "d-none"}>
                        <h4>ADDED TO CART</h4>
                    </div>
                </figure>
                <div className="product-details pt-3">
                    <div className="color-swatches">
                        <ul>
                            {
                                props.product.colors.map((product_color, index) => (
                                    <li key={index}>
                                        <button className="swatch" style={{backgroundColor:product_color}}></button>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <Link className="product-title" to={`/products/${props.product.id}`}>{props.product.title}</Link>
                    <small className="product-price pt-1">${props.product.price}</small>
                </div>
                <div className="offcanvas quick-view" tabIndex="-1" id="genieBot">
                    <div className="offcanvas-header">
                        <button className="menu_close" data-bs-dismiss="offcanvas" aria-label="Close"><i className="icon-ham_close_btn"></i></button>
                    </div>
                    <div className="offcanvas-body">
                    </div>
                </div>
            </div>
        </div>
    )
}