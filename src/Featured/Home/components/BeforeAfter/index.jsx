import React from "react";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

const BeforeAfter = () => {
  const FIRST_IMAGE = {
    imageUrl:
      "https://umino-demo.myshopify.com/cdn/shop/files/before.jpg?v=1682657655&",
  };
  const SECOND_IMAGE = {
    imageUrl:
      "https://umino-demo.myshopify.com/cdn/shop/files/after.jpg?v=1682657665&",
  };

  return (
    <div className="container mx-auto px-9">
      <div className="w-full h-[500px] rounded-[10px] overflow-hidden">
        <ReactBeforeSliderComponent
          firstImage={FIRST_IMAGE}
          secondImage={SECOND_IMAGE}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default BeforeAfter;
