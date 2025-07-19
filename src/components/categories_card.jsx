
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { categoryCard } from "../categoryCard"


export function CategoriesCard() {
    return (
        <Swiper
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation]}
            loop={true}
            breakpoints={{
                0: {
                    spaceBetween: 5,
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1300: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            }}
            className="hero-swiper"
        >
            {
                categoryCard.map((categorycard, index) => (
                    <SwiperSlide key={index}>
                        <div className="categories-card">
                            <figure>
                                <img src={categorycard.image} loading="lazy" alt="" />
                                <figcaption>
                                    <h4 className="pb-2">{categorycard.title}</h4>
                                    <a href="" className="theme-btn secondary_btn">shop now</a>
                                </figcaption>
                            </figure>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>



    )
}