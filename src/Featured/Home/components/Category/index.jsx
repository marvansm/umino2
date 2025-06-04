import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
const CategorySection = () => {
  return (
    <div className="bg-[#F5F5F5] my-18 flex items-center justify-center flex-col">
      <div className="container mx-auto px-9">
        <div className="py-[50px] flex flex-col items-center justify-center h-[600px]">
          <div className="flex items-center justify-center flex-col mb-7">
            <h2 className="font-normal text-[45px]">You Might Like</h2>
            <p className="text-[#787777]">
              Our products are designed for everyone, environmentally friendly.
            </p>
          </div>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            slidesPerView={3}
            spaceBetween={30}
            className="mySwiper mt-5 h-full"
            loop={true}
               breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            <SwiperSlide className="">
              <div className="max-auto">
                <div className="box w-[450px] h-[350px] overflow-hidden rounded-2xl relative">
                  <div>
                    <img
                      src="https://umino-demo.myshopify.com/cdn/shop/files/st1_d1.jpg?v=1682592918"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <button className="absolute bottom-5.5 bg-white py-[1rem] px-[5.5rem] rounded-full">
                      Sofa
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="max-auto">
                <div className="box w-[450px] h-[350px] overflow-hidden rounded-2xl relative">
                  <div className="">
                    <img
                      src="https://umino-demo.myshopify.com/cdn/shop/files/st5_d1.jpg?v=1682592918"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <button className="absolute bottom-5.5 bg-white py-[1rem] px-[5.5rem] rounded-full">
                      Sofa
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="mx-auto">
                <div className="box w-[450px] h-[350px] overflow-hidden rounded-2xl relative">
                  <div>
                    <img
                      src="https://umino-demo.myshopify.com/cdn/shop/files/furniture-cate-3.jpg?v=1682650045&width=1500"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <button className="absolute bottom-5.5 bg-white py-[1rem] px-[5.5rem] rounded-full">
                      Sofa
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="mx-auto">
                <div className="box w-[450px] h-[350px] overflow-hidden rounded-2xl relative">
                  <div>
                    <img
                      src="https://umino-demo.myshopify.com/cdn/shop/files/furniture-cate-4.jpg?v=1682650052&width=1500"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <button className="absolute bottom-5.5 bg-white py-[1rem] px-[5.5rem] rounded-full">
                      Sofa
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
