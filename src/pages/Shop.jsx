import React from "react"
import { Link } from "react-router"
import { ProductCard } from "../components/product_card"
import { products } from '../productCardData'

function Shop() {
    return (
        <>
            <div className="title-bar">
                <div className="container custom-container-lg">
                    <div className="title-bar-inner">
                        <Link className="title-bar-link" to={"/"}>Home</Link>
                        <span>Collection</span>
                    </div>

                </div>
            </div>
            <div className="shop-page-inner">
                <div className="filters">
                    <h4 className="pb-4">Filters</h4>
                    <div className="categories">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" for="flexRadioDefault1">
                                   Men
                                </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                <label className="form-check-label" for="flexRadioDefault2">
                                    Women
                                </label>
                        </div>
                    </div>
                </div>
                <section className="product-cards">
                    <div className="container custom-container-lg">
                        <div className="row">
                            {
                                products.map(product => <ProductCard product={product} />)
                            }
                        </div>
                    </div>
                </section>
            </div>

        </>





    )
}


export default Shop