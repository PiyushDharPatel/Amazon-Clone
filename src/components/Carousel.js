import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";
const Carousel = () => {
  return (
    <div className="h-[640px] bg-white">
      <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 5000,
        }}
        className="h-[70%]"
      >
        <SwiperSlide>
          <img src={"../images/echo.jpg"} alt="Carousel POR" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/flights.jpg"} alt="Carousel POR" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/karigar.jpg"} alt="Carousel POR" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/movie.jpg"} alt="Carousel POR" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/watch.jpg"} alt="Carousel POR" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/seller.jpg"} alt="Carousel POR" />
        </SwiperSlide>
      </Swiper>
      <div className="h-[100%] bg-gradient-to-b from-slate-400" />
    </div>
  )
}

export default Carousel
