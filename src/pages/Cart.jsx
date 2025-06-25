import { Link } from "react-router"
import { ShopContext } from "../App"
import { useContext } from "react"

function Cart() {
    const { cart, setCart } = useContext(ShopContext)

    const handleRemoveProduct = (id) => {
        const updatedCart = cart.filter(c => c.id != id)
        setCart(updatedCart)

    }

    const handleClearCart = () => {
        setCart([])
    }
    return (
        <>
            <div className="title-bar">
                <div className="container custom-container-lg">
                    <div className="title-bar-inner">
                        <Link className="title-bar-link" to={"/"}>
                            Home
                        </Link>
                        <span>Cart</span>
                    </div>
                </div>
            </div>
            <section className="cart-products">
                <div className="container custom-container-lg">
                    {cart.length === 0 ? (
                        <div className="text-center py-5">
                            <h4 className="pb-5">You don't have any items in your cart.</h4>
                            <Link className="theme-btn primary_btn" to={"/shop"}>continue shopping</Link>
                        </div>
                    ) : (
                        <>
                            <div className="Page-main-heading d-flex justify-content-center pb-4">
                                <h3>YOUR CART</h3>
                            </div>
                            <div className="products-header mb-3">
                                <div className="product-header-inner">
                                    <div className="row">
                                        <div className="col-5">
                                            <small>PRODUCT</small>
                                        </div>
                                        <div className="col-2">
                                            <small>PRICE</small>
                                        </div>
                                        <div className="col-3">
                                            <small>QUANTITY</small>
                                        </div>
                                        <div className="col-2">
                                            <small>TOTAL</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                cart.map(cartitem => (
                                    <div className="cart-product">
                                        <div className="row">
                                            <div className="col-12 col-md-5">
                                                <div className="cart-product-info">
                                                    <figure>
                                                        <img src={cartitem.image} alt="" />
                                                    </figure>
                                                    <div className="cart-product-info">
                                                        <b>{cartitem.title}</b>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-2">
                                                <div className="product-price cart-item">
                                                    <b className="cart-md-heading">PRICE</b><small>$ {cartitem.price}</small>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-3">
                                                <div className="product-quantity cart-item">
                                                    <b className="cart-md-heading">QUANTITY</b>
                                                    <div className="qty-input">
                                                        <button className="qty-count qty-count--minus" data-action="minus" type="button">-</button>
                                                        <input className="product-qty" type="number" name="product-qty" defaultValue={1} />
                                                        <button className="qty-count qty-count--add" data-action="add" type="button">+</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-2">
                                                <div className="product-total cart-item">
                                                    <b className="cart-md-heading">TOTAL</b><small>$ 800.00</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="remove-product">
                                            <button onClick={() => handleRemoveProduct(cartitem.id)}><i className="icon-ham_close_btn"></i></button>
                                        </div>
                                    </div>
                                ))
                            }
                            <button className="theme-btn primary_btn" onClick={handleClearCart}>Clear Cart</button>
                        </>
                    )}

                </div>
            </section>
        </>
    )
}




export default Cart