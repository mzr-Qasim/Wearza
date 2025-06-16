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

export function ProductDetail() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

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
                            <div className="col-md-7 col-lg-7">
                                <div className="product-gallery view-section">
                                    <Swiper className="gallery-swiper"
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
                                                    src={img}
                                                    alt="Product 1"
                                                />
                                            </figure>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <figure>
                                                <img
                                                    src={img2}
                                                    alt="Product 1"
                                                />
                                            </figure>
                                        </SwiperSlide>                       
                                        <SwiperSlide>
                                            <figure>
                                                <img
                                                    src={img}
                                                    alt="Product 1"
                                                />
                                            </figure>
                                        </SwiperSlide>                       
                                    </Swiper>
                                    {/* Thumbnail Swiper */}
                                    <Swiper className="swiper-thumbnails"
                                        onSwiper={setThumbsSwiper}
                                        spaceBetween={10}
                                        slidesPerView={3}
                                        watchSlidesProgress
                                        modules={[Thumbs]}
                                        style={{ marginTop: "10px" }}
                                    >
                                        <SwiperSlide>
                                            <img
                                                src={img}
                                                alt="Thumb 1"
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img
                                                src={img2}
                                                alt="Thumb 2"
                                            />
                                        </SwiperSlide>                                     
                                        <SwiperSlide>
                                            <img
                                                src={img}
                                                alt="Thumb 2"
                                            />
                                        </SwiperSlide>                                     
                                    </Swiper>
                                </div>
                            </div>
                            <div className="col-md-5 col-lg-5 view-section">
                                <div className="product-summary">
                                    <h3 className="pb-4">Cropped Ribbed T-shirt</h3>
                                    <h4 className="pb-4">$ 200.00</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
