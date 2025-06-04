import React from "react";

const BlogSection = () => {
  return (
    <div>
      <div className="container mx-auto px-9 mt-16">
        <div className="flex items-center justify-center flex-col mb-7">
          <h2 className="font-normal text-[45px]">The Blog</h2>
          <p className="text-[#787777]">
            Provide you with useful knowledge about fashion trend.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4">
          <div className="box overflow-hidden">
            <div className="boximg">
              <img
                src="https://umino-demo.myshopify.com/cdn/shop/articles/furniture-blog-3.jpg?v=1682653199&width=533"
                alt=""
                className="w-full h-full overflow-hidden rounded-2xl"
              />
            </div>
            <div className="boxbody mt-4">
              <ul className="flex flex-col gap-1">
                <li className="text-[12px] font-medium uppercase">Furniture</li>
                <li className="text-[24px] font-medium">
                  Restoring Old Furniture Pieces
                </li>
                <li className="text-[14px] font-normal w-[400px] text-gray-600">
                  These are the people who make your life asier. Large tiles
                  were arranged on the counter top plate near the window of the
                  living room, they...
                </li>
                <li className="text-[14px] font-normal text-gray-600 flex items-center gap-2.5">
                  Apr 28 2023 <span>Post by Unimo Demo</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="box overflow-hidden">
            <div className="boximg">
              <img
                src="https://umino-demo.myshopify.com/cdn/shop/articles/furniture-blog-2.jpg?v=1682653170&width=533"
                alt=""
                className="w-full h-full overflow-hidden rounded-2xl"
              />
            </div>
            <div className="boxbody mt-4">
              <ul className="flex flex-col gap-1">
                <li className="text-[12px] font-medium uppercase">Furniture</li>
                <li className="text-[24px] font-medium">
                  Restoring Old Furniture Pieces
                </li>
                <li className="text-[14px] font-normal w-[400px] text-gray-600">
                  These are the people who make your life asier. Large tiles
                  were arranged on the counter top plate near the window of the
                  living room, they...
                </li>
                <li className="text-[14px] font-normal text-gray-600 flex items-center gap-2.5">
                  Apr 28 2023 <span>Post by Unimo Demo</span>
                </li>
              </ul>
            </div>
          </div> 
          <div className="box overflow-hidden">
            <div className="boximg">
              <img
                src="https://umino-demo.myshopify.com/cdn/shop/articles/furniture-blog-1.jpg?v=1682653128&width=533"
                alt=""
                className="w-full h-full overflow-hidden rounded-2xl"
              />
            </div>
            <div className="boxbody mt-4">
              <ul className="flex flex-col gap-1">
                <li className="text-[12px] font-medium uppercase">Furniture</li>
                <li className="text-[24px] font-medium">
                  Restoring Old Furniture Pieces
                </li>
                <li className="text-[14px] font-normal w-[400px] text-gray-600">
                  These are the people who make your life asier. Large tiles
                  were arranged on the counter top plate near the window of the
                  living room, they...
                </li>
                <li className="text-[14px] font-normal text-gray-600 flex items-center gap-2.5">
                  Apr 28 2023 <span>Post by Unimo Demo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
