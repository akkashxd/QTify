import React, { useEffect } from "react";
import styles from "./Carousel.module.css";
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

const Controls = ({ data }) => {
    const swiper = useSwiper();
    useEffect(() => {
        swiper.slideTo(0);
    }, [data]);
    return <></>;
}

export default function Carousel({ data, renderComponent }){
    return (<div className={styles.wrapper}>
        <Swiper
            // install Swiper modules
            modules={[Navigation]}
            spaceBetween={40}
            style={{padding: "0px 20px"}}
            initialState={0}
            slidesPerView={"auto"}
            allowTouchMove
            >
                <Controls data={data} />
                <CarouselLeftNavigation />
                <CarouselRightNavigation />
                {data.map((ele, idx) => (
                    <SwiperSlide key={idx}>{renderComponent(ele)}</SwiperSlide>
                ))}
    </Swiper>
    </div>
);
}