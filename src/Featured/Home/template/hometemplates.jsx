import React from "react";
import SliderSection from "../components/sliderSection";
import NewArrivals from "../components/NewArrivals";
import CategorySection from "../components/Category";
import TrendsSection from "../components/Trends";
import BeforeAfter from "../components/BeforeAfter";
import ServiceSection from "../components/ServiceSection";
import BlogSection from "../components/Blog";

const Hometemplates = () => {
  return (
    <div>
      <SliderSection />
      <NewArrivals />
      <CategorySection />
      <TrendsSection />
      <BeforeAfter />
      <ServiceSection />
      <BlogSection />
    </div>
  );
};

export default Hometemplates;
