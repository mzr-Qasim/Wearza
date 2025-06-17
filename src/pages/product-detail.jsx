import { useParams } from "react-router";
import { Link } from "react-router";
import img from "/images/card-hover-4.jpg";
import img2 from "/images/product-card-4.jpg";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { products } from "../productCardData"






function ProductDetail() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const { id } = useParams();

    const foundProduct = products.find(item => item.id == id);
    return (
        <>
            <div className="title-bar">
                <div className="container custom-container-lg">
                    <div className="title-bar-inner">
                        <Link className="title-bar-link" to={"/"}>
                            Home
                        </Link>
                        <span>{foundProduct.title}</span>
                    </div>
                </div>
            </div>
            <section className="product-detail-wrapper">
                <div className="container custom-container-xl">
                    <div className="product-detail-inner">
                        <div className="row">
                            <div className="col-md-12 col-lg-8">
                                <div className="product-gallery view-section">   
                                    <Swiper className="gallery-swiper"
                                        // spaceBetween={10}
                                        navigation
                                        loop={true}
                                        thumbs={{ swiper: thumbsSwiper }}
                                        modules={[Navigation]}
                                        spaceBetween={10}
                                        slidesPerView={2}
                                        style={{ width: "100%" }}
                                        autoHeight={true}
                                        breakpoints={{
                                            0: {
                                                slidesPerView: 1, // For screens from 0px to 575px
                                            },
                                            576: {
                                                slidesPerView: 2, // Default value or larger screens
                                            },
                                        }}
                                    >
                                        <SwiperSlide>
                                            <figure>
                                                <img
                                                    src={foundProduct.image}
                                                    alt="Product 1"
                                                />
                                            </figure>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <figure>
                                                <img
                                                    src={foundProduct.hover_img}
                                                    alt="Product 1"
                                                />
                                            </figure>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-4 view-section">
                                <div className="product-summary">
                                    <h3 className="pb-4">{foundProduct.title}</h3>
                                    <h4 className="pb-4">$ {foundProduct.price}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


export default ProductDetail