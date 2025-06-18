import { useParams } from "react-router";
import { Link } from "react-router";
import { useState } from "react";
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

    const [productinfotabs, setProductInfoTabs] = useState(false)
    const handleProductInfoTabs = ()=>{
        setProductInfoTabs(!productinfotabs) 
    }
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
                            <div className="col-md-12 col-lg-5 view-section">
                                <div className="product-summary">
                                    <h3 className="pb-4">{foundProduct.title}</h3>
                                    <h4 className="pb-4">$ {foundProduct.price}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="productinfo">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button onClick={handleProductInfoTabs} className={`nav-link active${handleProductInfoTabs ? "active" : ""}`} id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">PRODUCT DETAILS</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button onClick={handleProductInfoTabs} className={`nav-link ${handleProductInfoTabs ? "active" : ""}`} id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">REVIEWS</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button onClick={handleProductInfoTabs} className={`nav-link active ${handleProductInfoTabs ? "active" : ""}`} id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">SHIPPING & RETURNS</button>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div className={`tab-pane fade show ${handleProductInfoTabs ? "active" : ""}`} id="home" role="tabpanel" aria-labelledby="home-tab"><p>{foundProduct.description}</p></div>
                            <div className={`tab-pane fade show ${handleProductInfoTabs ? "active" : ""}`} id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                            <div className={`tab-pane fade show ${handleProductInfoTabs ? "active" : ""}`} id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


export default ProductDetail