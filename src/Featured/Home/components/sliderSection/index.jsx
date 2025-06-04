import React from "react";
import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
const SliderSection = () => {
  return (
    <div>
      <div className="container mx-auto px-6">
        <Swiper
          navigation={true}
          loop={true}
          pagination={true}
          modules={[Navigation, Pagination]}
          className="mySwiper rounded-2xl "
        >
          <SwiperSlide>
            <div className="bg-[url(https://umino-demo.myshopify.com/cdn/shop/files/slide-furinture-1.jpg?v=1682649036&width=2000)] bg-cover bg-center bg-no-repeat h-[600px] rounded-2xl overflow-hidden flex items-center justify-center">
              <div className="text-[#fff]">
                <h2 className="text-[14px] font-semibold mb-[15px]">
                  BEAUTIFUL & ELEGANT
                </h2>
                <h3 className="text-[80px] font-normal mb-[15px]">
                  Bedroom Textiles
                </h3>
                <h4 className="text-[16px] font-normal mb-[15px]">
                  Discount 50% On Products & Free Shipping.
                </h4>
                <button className="font-semibold bg-white text-[#000] uppercase text-[12px] rounded-[30px] py-[20px] px-[60px] mt-[15px]">
                  Explore Now
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[url(https://umino-demo.myshopify.com/cdn/shop/files/slide-furinture-2.jpg?v=1682649136&width=2000)] bg-cover bg-center bg-no-repeat h-[600px] rounded-2xl overflow-hidden flex items-center justify-center">
              <div className="text-[#fff]">
                <h2 className="text-[14px] font-semibold mb-[15px]">
                  KITCHEN TOOLS
                </h2>
                <h3 className="text-[80px] font-normal mb-[15px]">
                  Pendant Light
                </h3>
                <h4 className="text-[16px] font-normal mb-[15px]">
                  Discount 50% On Products & Free Shipping.
                </h4>
                <button className="font-semibold bg-white text-[#000] uppercase text-[12px] rounded-[30px] py-[20px] px-[60px] mt-[15px]">
                  Explore Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SliderSection;
