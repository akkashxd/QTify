import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import React, { useEffect } from "react";
import { useSwiper } from "swiper/react"; // Import useSwiper to control swiper instance
import styles from "./Carousel.module.css";

import 'swiper/css';
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

// Controls component to reset swiper position
const Controls = ({ data }) => {
  const swiper = useSwiper();  // Access the swiper instance
  useEffect(() => {
    swiper.slideTo(0);  // Reset swiper to the first slide whenever `data` changes
  }, [data]);  // Dependency on data to trigger when it changes
  return <></>;
}

export default function Carousel({ data, renderComponent }) {
  return (
    <div className={styles.wrapper}>
      <Swiper
        modules={[Navigation]} // Using the Navigation module for next/prev buttons
        spaceBetween={40} // Space between slides
        style={{ padding: "0px 20px" }} // Padding style for swiper container
        slidesPerView={"auto"} // Auto-adjust the number of visible slides
        allowTouchMove={true} // Allow touch to move the slides
      >
        {/* Controls to reset the swiper position */}
        <Controls data={data} />
        {/* Left and right navigation buttons */}
        <CarouselLeftNavigation />
        <CarouselRightNavigation />
        {/* Render each slide using `renderComponent` for each `ele` in data */}
        {data.map((ele, idx) => (
          <SwiperSlide key={idx}>
            {renderComponent(ele)}  {/* Render component passed as prop for each data item */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
