import React from "react";
import ProductCard from "../../../Home/common/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { GetStrapiData } from "../../../../services/api";

const TopOffers = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: () => GetStrapiData("products?populate=*"),
  });
  console.warn(data);

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
      <div className="flex flex-col items-center justify-center gap-4.5">
        <h2 className="font-normal text-[40px]">Top Offers</h2>
        <p className="text-[16px] text-[#333]">
          Our products are designed for everyone, environmentally friendly.
        </p>
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
      <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 ">
        {data?.data?.map((item, idx) => (
          <ProductCard
            key={idx}
            image={`http://localhost:1337${item.image.url}`}
            hoverimg={`http://localhost:1337${item.hoverimg.url}`}
            title={item?.title}
            price={item?.price}
            discountprice={item?.discoun}
          />
        ))}
      </div>
    </div>
  );
};

export default TopOffers;
