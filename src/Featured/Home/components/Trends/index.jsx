import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductCard from "../../common/ProductCard";

const TrendsSection = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/products");
      return res.data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div className="my-18 flex flex-col">
        <div className="container mx-auto px-9">
          <div className="flex flex-col items-center justify-start ">
            <div className="flex items-center justify-center flex-col mb-7">
              <h2 className="font-normal text-[45px]">Top Trending</h2>
              <p className="text-[#787777]">
                Here’s some of our most popular products people are in love
                with.
              </p>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-6 sm:h-[full]">
                <div className="box sticky top-0">
                  <div className="boximg h-full">
                    <img
                      src="https://umino-demo.myshopify.com/cdn/shop/files/banner-furnitured.jpg?v=1682650550&width=940"
                      alt=""
                      className="w-full h-full object-cover rounded-[10px]"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data &&
                    data
                      .slice(0, 6)
                      .map((item, idx) => (
                        <ProductCard
                          key={idx}
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
                      ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendsSection;
