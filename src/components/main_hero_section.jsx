




import { Link } from "react-router"
import { mainHeroSlide } from "../mainHero";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';

import { useRef, useState } from 'react';

export function MainHeroSection() {
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);

    const toggleAudio = () => {
        const video = videoRef.current;
        if (video) {
            video.muted = !video.muted;
            setIsMuted(video.muted);
        }
    };

    const togglePlayPause = () => {
        const video = videoRef.current;
        if (video) {
            if (video.paused) {
                video.play();
                setIsPlaying(true);
            } else {
                video.pause();
                setIsPlaying(false);
            }
        }
    };

    return (
        <section className="main_hero_section">
            <div className="main_hero_inner">
                <Swiper
                    pagination={{
                        clickable: true,
                        el: '.custom-pagination', // Target your wrapper
                    }}
                    modules={[Pagination]}
                    slidesPerView={1}
                    loop={true}
                    className="hero-swiper"
                    onSlideChange={(swiper) => {
                        const currentSlide = mainHeroSlide[swiper.realIndex];
                        if (videoRef.current && currentSlide.type !== "video") {
                            videoRef.current.pause();
                            setIsPlaying(false);
                        }
                    }}
                >
                    {
                        mainHeroSlide.map((heroSlide, index) => (
                            <SwiperSlide key={index}>
                                {heroSlide.type === "video" ? (
                                    <figure>
                                        <video
                                            className="main_hero_asset"
                                            src={heroSlide.video}
                                            preload="metadata"
                                            autoPlay
                                            muted={isMuted}
                                            loop
                                            playsInline
                                            ref={videoRef}
                                        ></video>
                                        <div className="video-options">
                                            <div className="container custom-container-lg">
                                                <div className="video-options-inner">
                                                    <button className="video-option" onClick={togglePlayPause}>
                                                        <i className={`${isPlaying ? 'icon-pause-btn' : 'icon-play-btn'}`}></i>
                                                    </button>
                                                    <button onClick={toggleAudio} className="video-option">
                                                        <i className={`${isMuted ? 'icon-video-no-sound' : 'icon-video-sound'}`}></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                ) : (
                                    <figure className="overlay">
                                        <img className="main_hero_asset" src={heroSlide.image} alt="" />
                                        <div className="main_hero_caption">
                                            <div className="container custom-container-lg">
                                                <div className="caption-inner">
                                                    <h2>{heroSlide.title}</h2>
                                                    <p>{heroSlide.description}</p>
                                                    <Link to={heroSlide.link} className="theme-btn primary_btn">{heroSlide.link_title}</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                )}
                            </SwiperSlide>
                        ))
                    }
                    <div className="custom-pagination-wrapper">
                        <div className="custom-pagination"></div>
                    </div>
                </Swiper>


            </div>
        </section>
    )
}