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
                        <span>Product</span>
                    </div>
                </div>
            </div>
            <section className="product-detail-wrapper">
                <div className="container custom-container-lg">
                    <div className="product-detail-inner">
                        <div className="row">
                            <div className="col-md-12 col-lg-8">
                                <div className="product-gallery view-section">
                                    <div className="row">
                                        <div className="col-md-6 col-lg-6">
                                            <div className="product-card">
                                                <figure>
                                                    <img src={foundProduct.image} alt="" />
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6">
                                            <div className="product-card">
                                                <figure>
                                                    <img src={foundProduct.hover_img} alt="" />
                                                </figure>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <Swiper className="gallery-swiper"
                                        // spaceBetween={10}
                                        navigation
                                        loop={true}
                                        thumbs={{ swiper: thumbsSwiper }}
                                        modules={[Navigation, Thumbs]}
                                        style={{ width: "100%" }}
                                        autoHeight={true}
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
                                    <Swiper className="swiper-thumbnails"
                                        onSwiper={setThumbsSwiper}
                                        spaceBetween={10}
                                        slidesPerView={2}
                                        watchSlidesProgress
                                        modules={[Thumbs]}
                                        style={{ marginTop: "10px" }}
                                    >
                                        <SwiperSlide>
                                            <img
                                                src={foundProduct.image}
                                                alt="Thumb 1"
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img
                                                src={foundProduct.hover_img}
                                                alt="Thumb 2"
                                            />
                                        </SwiperSlide>
                                    </Swiper> */}
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