import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

import "../App.scss";
import slider2 from "../assets/img/mainslide/slide2.jpg";
import slider3 from "../assets/img/mainslide/slide3.jpg";
import slider4 from "../assets/img/mainslide/slide4.jpg";
import slider5 from "../assets/img/mainslide/slide5.jpg";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const MainSlider = () => {
    return (
        <>
            <Swiper
                navigation={true}
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                className="mySwiper"
                pagination={{
                  type: 'progressbar',
                }}
                loop={true}
                style={{
                  "--swiper-pagination-color": "lavender",
                  "--swiper-navigation-color": "black",
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            >
                <SwiperSlide>
                    <div>
                        <img src={slider2} alt="slider2" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={slider3} alt="slider3" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={slider4} alt="slider4" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={slider5} alt="slider5" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default MainSlider;
