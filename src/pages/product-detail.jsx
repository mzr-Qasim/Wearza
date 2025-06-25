import { useParams } from "react-router";
import { Link } from "react-router";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { products } from "../productCardData"
import Zoom from 'react-medium-image-zoom';




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
                    <div className="product-detail-inner pb-3">
                        <div className="row">
                            <div className="col-md-12 col-lg-7">
                                <div className="product-gallery view-section">
                                    <Swiper className="gallery-swiper"
                                        // spaceBetween={10}
                                        navigation
                                        // loop={true}
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
                                            <Zoom>
                                                <figure>
                                                    <img
                                                        src={foundProduct.image}
                                                        alt="Product 1"
                                                        style={{
                                                            width: '100%',
                                                            objectFit: 'cover',
                                                            cursor: 'pointer',

                                                        }}
                                                    />
                                                        <i className="zoom-in icon-zoom-in"></i>
                                                </figure>
                                            </Zoom>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Zoom>
                                                <figure>
                                                    <img
                                                        src={foundProduct.hover_img}
                                                        alt="Product 2"
                                                        style={{
                                                            width: '100%',
                                                            objectFit: 'cover',
                                                            cursor: 'pointer',

                                                        }}
                                                    />
                                                    <i className="zoom-in icon-zoom-in"></i>
                                                </figure>
                                            </Zoom>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-5 view-section">
                                <div className="product-summary">
                                    <h4>{foundProduct.title}</h4>
                                    <small>Availability : <span>In Stock</span></small>
                                    <h4>$ {foundProduct.price}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="productinfo">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">PRODUCT DETAILS</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">REVIEWS</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">SHIPPING & RETURNS</button>
                            </li>
                        </ul>
                        <div className="tab-content py-3" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><p>{foundProduct.description}</p></div>
                            <div className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                            <div className="tab-pane fade show" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                <div className="returns-policy pb-3">
                                    <b>Returns Policy</b>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eros justo, accumsan non dui sit amet. Phasellus semper volutpat mi sed imperdiet. Ut odio lectus, vulputate non ex non, mattis sollicitudin purus. Mauris consequat justo a enim interdum, in consequat dolor accumsan. Nulla iaculis diam purus, ut vehicula leo efficitur at.</p>
                                </div>
                                <div className="shipping">
                                    <b>Shipping</b>
                                    <p>Pellentesque ultrices ut sem sit amet lacinia. Sed nisi dui, ultrices ut turpis pulvinar. Sed fringilla ex eget lorem consectetur, consectetur blandit lacus varius. Duis vel scelerisque elit, et vestibulum metus. Integer sit amet tincidunt tortor. Ut lacinia ullamcorper massa, a fermentum arcu vehicula ut. Ut efficitur faucibus dui Nullam tristique dolor eget turpis consequat varius. Quisque a interdum augue. Nam ut nibh mauris.</p>
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