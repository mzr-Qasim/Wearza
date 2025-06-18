import { Link } from "react-router"
import img from "/images/product-card-2.jpg"


function Cart() {
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
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cart-product">
                                <div className="row">
                                    <div className="col-9 col-md-5">
                                        <div className="cart-product-info cart-item">
                                            <figure>
                                                <img src={img} alt="" />
                                            </figure>
                                            <div className="cart-product-info">
                                                <b>Lace-sleeved traditional suit</b>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 col-md-2">
                                        <div className="product-quantity cart-item">
                                            <small>$ 400.00</small>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-3">
                                        <div className="product-quantity cart-item">
                                            <small>$ 400.00</small>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-2">
                                        <div className="product-quantity cart-item">
                                            <small>$ 400.00</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cart-product">
                                <div className="row">
                                    <div className="col-9 col-md-5">
                                        <div className="cart-product-info cart-item">
                                            <figure>
                                                <img src={img} alt="" />
                                            </figure>
                                            <div className="cart-product-info">
                                                <b>Lace-sleeved traditional suit</b>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 col-md-2">
                                        <div className="product-quantity cart-item">
                                            <small>$ 400.00</small>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-3">
                                        <div className="product-quantity cart-item">
                                            <small>$ 400.00</small>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-2">
                                        <div className="product-quantity cart-item">
                                            <small>$ 400.00</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}




export default Cart