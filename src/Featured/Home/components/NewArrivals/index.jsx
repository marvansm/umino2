import React from "react";
import ProductCard from "../../common/ProductCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
const NewArrivals = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/products");
      return res.data;
    },
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  const Category = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 12,
      name: "LIGHTING",
    },
    {
      id: 13,
      name: "OUTDOOR",
    },
    {
      id: 121,
      name: "DECOR",
    },
    {
      id: 1211,
      name: "ACCESSORIES",
    },
  ];
  return (
    <div className="container mx-auto px-9 mt-16">
      <div className="flex flex-col items-center justify-center gap-6.5">
        <h2 className="font-normal text-[40px]">New Arrivals</h2>
        <ul className="flex items-center gap-3">
          {Category &&
            Category.map((item, idx) => (
              <li
                key={idx}
                className=" cursor-pointer py-2 px-4 rounded-2xl font-medium text-[15px] hover:bg-[#f3f2f2] duration-300"
              >
                {item?.name}
              </li>
            ))}
        </ul>
      </div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={4}
        className="mySwiper mt-5 "
        loop={true}
        spaceBetween={30}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {data &&
          data.map((item, idx) => (
            <SwiperSlide className="">
              <div key={idx} className="">
                <ProductCard
                  image={item?.image}
                  hoverimg={item?.hoverImg}
                  title={item?.title}
                  price={item?.price}
                  discountprice={item?.discountPrice}
                  addtocard={item?.addtocard}
                  preorder={item?.preorder}
                  preorderStatus={item?.preorderStatus}
                  preordername={item?.preOrdername}
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default NewArrivals;
