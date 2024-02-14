import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Autoplay } from 'swiper/modules';
import React from "react";
import "swiper/css";
import "swiper/css/navigation";

const Product = () => {
  return (
    <div className="bg-white m-3">
      <div className="text-2xl font-semibold p-3">Best Sellers</div>
      <Swiper
        slidesPerView={7}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        {Array.from({ length: 9 }, (_, i) => (
          <SwiperSlide key={i}>
            
              <img className=" cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
                src={`../images/product_${i}_small.jpg`}
                alt="Carousel product"
              />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Product
