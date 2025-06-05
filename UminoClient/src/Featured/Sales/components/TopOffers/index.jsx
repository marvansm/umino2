import React from "react";
import ProductCard from "../../../Home/common/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { GetStrapiData } from "../../../../services/api";
import { useCard } from "../../../../Providers/useContext";
import { Minus } from "lucide-react";

const TopOffers = () => {
  const { AddtoCard } = useCard();
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
      <div className="grid grid-cols-12 gap-9">
        <div className="col-span-2">
          <div className="">
            <ul className="flex items-center justify-between mb-3">
              <li>
                {" "}
                <h1 className="text-[18px] font-medium ">Category</h1>
              </li>
              <li>
                <Minus />
              </li>
            </ul>
            <ul className="text-[16px] text-[#848484] flex flex-col gap-2.5 w-[150px]">
              <li className="hover:text-[black] hover:pl-5 duration-300 cursor-pointer">
                Lorem, ipsum.
              </li>
              <li className="hover:text-[black] hover:pl-5 duration-300 cursor-pointer">
                Lorem, ipsum.
              </li>
              <li className="hover:text-[black] hover:pl-5 duration-300 cursor-pointer">
                Lorem, ipsum.
              </li>
              <li className="hover:text-[black] hover:pl-5 duration-300 cursor-pointer">
                Lorem, ipsum.
              </li>
              <li className="hover:text-[black] hover:pl-5 duration-300 cursor-pointer">
                Lorem, ipsum.
              </li>
            </ul>
          </div>
          <div className="mt-12">
            <ul className="flex items-center justify-between mb-3">
              <li>
                {" "}
                <h1 className="text-[18px] font-medium ">Availability</h1>
              </li>
              <li>
                <Minus />
              </li>
            </ul>
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <h2 className="text-[16px] text-[#848484] ">Lorem, ipsum.</h2>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <h2 className="text-[16px] text-[#848484] ">Lorem, ipsum.</h2>
            </div>
          </div>
          <div className="mt-12">
            <ul className="flex items-center justify-between mb-3">
              <li>
                <h1 className="text-[18px] font-medium ">Brand</h1>
              </li>
              <li>
                <Minus />
              </li>
            </ul>
            <div className="overflow-y-scroll h-[100px] flex items-start gap-2.5 flex-col">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <h2 className="text-[16px] text-[#848484] ">Lorem, ipsum.</h2>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <h2 className="text-[16px] text-[#848484] ">Lorem, ipsum.</h2>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <h2 className="text-[16px] text-[#848484] ">Lorem, ipsum.</h2>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <h2 className="text-[16px] text-[#848484] ">Lorem, ipsum.</h2>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <h2 className="text-[16px] text-[#848484] ">Lorem, ipsum.</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 ">
            {data?.data?.map((item, idx) => (
              <ProductCard
                key={idx}
                image={`http://localhost:1337${item.image.url}`}
                hoverimg={`http://localhost:1337${item.hoverimg.url}`}
                title={item?.title}
                price={item?.price}
                discountprice={item?.discoun}
                addtocard={() => AddtoCard(item)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopOffers;
