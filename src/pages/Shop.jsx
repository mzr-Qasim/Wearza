import React, { useState } from "react"
import { Link } from "react-router"
import { ProductCard } from "../components/product_card"
import { products } from '../productCardData'



function Shop() {
    const [showFilter, setShowFilter] = useState(false)
   

    const handleFilter = () => {
        setShowFilter(!showFilter)
    }
    let allColors = [];
    products.map(product => {
        allColors = allColors.concat(product.colors);
    });
    const uniqueColors = allColors.filter((color, index) => {
        return allColors.indexOf(color) === index;
    });
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
                <div className={`filters ${showFilter ? 'navShow' : ''}`}>
                    <button className="menu_close" onClick={handleFilter}><i className="icon-ham_close_btn"></i></button>
                    <strong className="filter-title">Color</strong>
                    <div className="colors-inner pb-4">
                        <div className="Colors Varaint pt-3">
                            {
                                uniqueColors.map((color_variants, index) =>
                                    <div key={index} className="form-check categories-filter">
                                        <input className="form-check-input color_theme_radio theme-radio-checked" type="radio" name="flexRadioDefault1" id="flexRadioDefault1" style={{backgroundColor:color_variants}}/>
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <div className="Price-filter pb-4">
                        <strong className="filter-title">price</strong>
                        <input type="range" className="form-range" min="0" max="5" id="customRange2" />
                    </div>



                    <div className="categories Varaint pb-4">
                        <strong className="filter-title">product type</strong>
                        <div className="form-check categories-filter pt-3">
                            <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault8" />
                            <label className="form-check-label" htmlFor="flexRadioDefault8">
                                Accessories
                            </label>
                        </div>
                        <div className="form-check categories-filter">
                            <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault9" />
                            <label className="form-check-label" htmlFor="flexRadioDefault9">
                                Dress
                            </label>
                        </div>
                        <div className="form-check categories-filter">
                            <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault10" />
                            <label className="form-check-label" htmlFor="flexRadioDefault10">
                                Jacket
                            </label>
                        </div>
                        <div className="form-check categories-filter">
                            <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault11" />
                            <label className="form-check-label" htmlFor="flexRadioDefault11">
                                Shirts
                            </label>
                        </div>
                    </div>
                    <div className="categories Varaint pb-4">
                        <strong className="filter-title">Categories</strong>
                        <div className="form-check categories-filter pt-3">
                            <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault12" />
                            <label className="form-check-label" htmlFor="flexRadioDefault12">
                                Men
                            </label>
                        </div>
                        <div className="form-check categories-filter">
                            <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault13" />
                            <label className="form-check-label" htmlFor="flexRadioDefault13">
                                Women
                            </label>
                        </div>
                        <div className="form-check categories-filter">
                            <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault14" />
                            <label className="form-check-label" htmlFor="flexRadioDefault14">
                                Wedding
                            </label>
                        </div>
                        <div className="form-check categories-filter">
                            <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault15" />
                            <label className="form-check-label" htmlFor="flexRadioDefault15">
                                Accessories
                            </label>
                        </div>
                    </div>
                    <div className="categories Varaint Sizes">
                        <strong className="filter-title">size</strong>
                        <div className="form-check categories-filter pt-3">
                            <input className="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault16" />
                            <label className="form-check-label" htmlFor="flexRadioDefault16">
                                XS
                            </label>
                        </div>
                        <div className="form-check categories-filter">
                            <input className="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault17" />
                            <label className="form-check-label" htmlFor="flexRadioDefault17">
                                S
                            </label>
                        </div>
                        <div className="form-check categories-filter">
                            <input className="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault18" />
                            <label className="form-check-label" htmlFor="flexRadioDefault18">
                                M
                            </label>
                        </div>
                        <div className="form-check categories-filter">
                            <input className="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault19" />
                            <label className="form-check-label" htmlFor="flexRadioDefault19">
                                L
                            </label>
                        </div>
                        <div className="form-check categories-filter">
                            <input className="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault20" />
                            <label className="form-check-label" htmlFor="flexRadioDefault20">
                                XL
                            </label>
                        </div>
                    </div>
                </div>
                <section className="product-cards">
                    <div className="container custom-container-lg">
                        <button className="theme-btn primary_btn filter_btn mb-4" onClick={handleFilter}>FILTER</button>
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




