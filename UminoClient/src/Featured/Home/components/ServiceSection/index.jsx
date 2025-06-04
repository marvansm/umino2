import React from "react";

const ServiceSection = () => {
  return (
    <div className="container mx-auto px-9 py-[50px] border-b border-gray-300">
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4">
        <div className="box flex flex-col items-center justify-center overflow-hidden">
          <div className="img">
            <img
              src="	https://umino-demo.myshopify.com/cdn/shop/files/icon_box1_d1.png?v=1682404972"
              alt=""
              className="w-[42px] h-[52px] object-contain"
            />
          </div>
          <h2 className="text-[20px] font-medium mb-3">Free Shipping</h2>
          <p className="w-[350px] text-[16px] text-[#915555] text-center">
            Get complimentary ground shipping on every order. Don't love it?
            Send it back, on us.
          </p>
        </div>
        <div className="box flex flex-col items-center justify-center overflow-hidden">
          <div className="img">
            <img
              src="	https://umino-demo.myshopify.com/cdn/shop/files/icon_box3_d1.png?v=1682404972"
              alt=""
              className="w-[42px] h-[52px] object-contain"
            />
          </div>
          <h2 className="text-[20px] font-medium mb-3">Support Online</h2>
          <p className="w-[350px] text-[16px] text-[#915555] text-center">
            We support customers 24/7, send questions we will solve for you
            immediately.
          </p>
        </div>
        <div className="box flex flex-col items-center justify-center overflow-hidden">
          <div className="img">
            <img
              src="	https://umino-demo.myshopify.com/cdn/shop/files/icon_box2_d1.png?v=1682404972"
              alt=""
              className="w-[42px] h-[52px] object-contain"
            />
          </div>
          <h2 className="text-[20px] font-medium mb-3">Free Returns</h2>
          <p className="w-[350px] text-[16px] text-[#915555] text-center">
            Free returns within 10 days, please make sure the items are in
            undamaged condition.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
