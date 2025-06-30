



import main_hero_img from "/images/main_hero.jpg"
import { Link } from "react-router"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import React, { useRef, useState } from 'react';

export function MainHeroSection() {
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);

    const toggleAudio = () => {
        const video = videoRef.current;
        if (video) {
            video.muted = !video.muted;
            setIsMuted(video.muted);
        }
    };

    return (
        <section className="main_hero_section">
            <div className="main_hero_inner">
                <Swiper
                    // pagination
                    modules={[Autoplay]}
                    slidesPerView={1}
                    loop={true}
                    // autoplay={{
                    //     delay: 4000,
                    //     disableOnInteraction: false,
                    // }}
                    className="hero-swiper"
                >
                    <SwiperSlide>
                        <figure>
                            {/* <img className="main_hero_asset" src={main_hero_img} alt="" /> */}
                            <video className="main_hero_asset" src="https://res.cloudinary.com/dqhzrovwe/video/upload/v1751271872/video_tlj8tp.mp4" preload="metadata" autoPlay muted loop playsInline ref={videoRef}></video>
                            <div className="video-options">
                                <div className="container custom-container-lg">
                                    <button onClick={toggleAudio} className="play-pause video-option">
                                        <i className={`${isMuted ? 'icon-video-no-sound' : "icon-video-sound " }`}></i>
                                    </button>
                                </div>
                            </div>
                            {/* <div className="main_hero_caption">
                                <div className="container custom-container-lg">
                                    <div className="caption-inner">
                                        <h2>New Arrivals</h2>
                                        <p >Delicate fabrics and a neutral colour palette are the details that give these pieces an edge.</p>
                                        <Link to={"/shop"} className="theme-btn primary_btn">shop now</Link>
                                    </div>
                                </div>
                            </div> */}
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="overlay">
                            <img className="main_hero_asset" src={main_hero_img} alt="" />
                            <div className="main_hero_caption">
                                <div className="container custom-container-lg">
                                    <div className="caption-inner">
                                        {/* <h2>AI Model Check</h2>
                                        <p>Upload your photo to see if you’ve got the features of a fashion model — powered by our smart AI engine.</p>
                                                                     <Link to={"/shop"} className="theme-btn primary_btn">try now</Link> */}
                                        <h2>New Arrivals</h2>
                                        <p >Delicate fabrics and a neutral colour palette are the details that give these pieces an edge.</p>
                                        <Link to={"/shop"} className="theme-btn primary_btn">shop now</Link>
                                    </div>
                                </div>
                            </div>
                        </figure>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}