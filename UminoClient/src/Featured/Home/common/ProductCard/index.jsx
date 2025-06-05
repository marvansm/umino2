import {
  Eye,
  Flame,
  Heart,
  Menu,
  Minus,
  PanelsLeftRightIcon,
  Plus,
  Star,
  Trash,
  X,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { clsx } from "clsx";
import { useCard } from "../../../../Providers/useContext";
import { data } from "react-router";

const ProductCard = ({
  image,
  hoverimg,
  title,
  price,
  discountprice,
  preorder,
  addtocard,
  preorderStatus,
  preordername,
}) => {
  const [OpenDetail, Setopendetail] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [BasketModal, SetBasketModal] = useState(false);
  const {
    AddtoCard,
    RemoveCard,
    ClearCard,
    IncreaseCard,
    TotalPrice,
    Card,
    DecreaseCard,
  } = useCard();
  const OpenModals = (product) => {
    Setopendetail(true);
    setSelectedProduct(product);
  };
  const CloseModal = () => {
    Setopendetail(false);
    setSelectedProduct(null);
  };

  const OpenBasket = () => {
    SetBasketModal(true);
    Setopendetail(false);
  };
  const CloseBasket = () => {
    SetBasketModal(false);
  };

  return (
    <div>
      <div className="box">
        <div className={clsx(styles.boxImg, "boxImg relative rounded-2xl")}>
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="discount flex flex-col items-start absolute top-2.5 left-2.5 z-50">
            {preorderStatus ? (
              <div className="flex flex-col  ">
                <button className="rounded-[12px] mb-[5px] py-[6px] px-[12px] text-[13px] bg-[#D73F0F] text-[#fff] ">
                  {preorderStatus}
                </button>
                <button className="rounded-[12px] mb-[5px] py-[6px] px-[12px] text-[13px] bg-[#177983] text-[#fff] ">
                  {preordername}
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className={clsx(styles.hoverImg, "hoverImg absolute inset-0")}>
            <img
              src={hoverimg}
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div
            className={clsx(styles.icons, "icons absolute top-2.5 right-2.5")}
          >
            <ul className="flex flex-col items-center gap-3">
              <li className="w-[40px] h-[40px] bg-[#fff] rounded-full flex items-center justify-center hover:bg-[#000] hover:text-[#fff] duration-300 cursor-pointer">
                <Heart size={18} />
              </li>
              <li className="w-[40px] h-[40px] bg-[#fff] rounded-full flex items-center justify-center hover:bg-[#000] hover:text-[#fff] duration-300 cursor-pointer">
                <PanelsLeftRightIcon size={18} />
              </li>
              <li
                onClick={() =>
                  OpenModals({
                    image,
                    hoverimg,
                    title,
                    price,
                    discountprice,
                    preorder,
                    addtocard,
                    preorderStatus,
                    preordername,
                  })
                }
                className="w-[40px] h-[40px] bg-[#fff] rounded-full flex items-center justify-center hover:bg-[#000] hover:text-[#fff] duration-300 cursor-pointer"
              >
                <Eye size={18} />
              </li>
            </ul>
          </div>
          <div
            className={clsx(
              styles.addtocard,
              "absolute bottom-2.5 w-full flex items-center justify-center"
            )}
          >
            {addtocard ? (
              <button
                onClick={(() => OpenBasket(), addtocard)}
                className="bg-white w-[95%] rounded-3xl py-2.5 hover:bg-black duration-300 cursor-pointer hover:text-white text-[15px] uppercase font-medium"
              >
                Add To Card
                {addtocard}
              </button>
            ) : (
              <button className="bg-white w-[95%] rounded-3xl py-2.5 hover:bg-black duration-300 cursor-pointer hover:text-white text-[15px] uppercase font-medium">
                {preorder}
              </button>
            )}
          </div>
        </div>
        <div className="boxBody flex flex-col gap-1.5 mt-3 text-left">
          <h2 className="text-[16px] font-normal">{title}</h2>
          <div className="rating flex items-center">
            <Star fill="black" color="black" size={12} />
            <Star fill="black" color="black" size={12} />
            <Star fill="black" color="black" size={12} />
            <Star fill="black" color="black" size={12} />
            <Star fill="black" color="black" size={12} />
          </div>
          <div className="price font-medium text-[14px] flex items-center gap-1.5">
            {price && (
              <span className="line-through text-[#a3a0a0]">$ {price}</span>
            )}
            {discountprice && <span>$ {discountprice}</span>}
          </div>
        </div>
      </div>
      {OpenDetail && selectedProduct && (
        <div className="fixed inset-0 z-[999] bg-[#02020250] w-full h-full ">
          <div className="absolute inset-1 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] w-[1000px] h-[700px] ">
            <div onClick={CloseModal} className="absolute top-2.5 right-2.5">
              <X />
            </div>
            <div className="grid grid-cols-12">
              <div className="col-span-6">
                <div className="w-full h-[700px]">
                  <img
                    src={image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="col-span-6 p-[30px]">
                <div>
                  <h1 className="font-medium text-[#111111] text-[30px]">
                    {title}
                  </h1>
                  <ul className="flex items-center gap-3.5 text-[16px] ">
                    <li className="flex items-center">
                      <Star fill="black" color="black" size={12} />
                      <Star fill="black" color="black" size={12} />
                      <Star fill="black" color="black" size={12} />
                      <Star fill="black" color="black" size={12} />
                      <Star fill="black" color="black" size={12} />
                    </li>
                    <li className="text-[#333]">2 reviews</li>
                    <li className="flex items-center gap-3">
                      <Flame size={12} color="orange" fill="orange" /> 22 sold
                      in last 17 hours
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="font-medium text-[#111111] text-[30px] my-5">
                    ${price}
                  </h2>
                  <p className="text-[16px] text-[#333]">
                    The garments labelled as committed are products that have
                    been produced using sustainable fibres or processes,
                    reducing their environmental impact.
                  </p>
                  <div className="mt-5">
                    <h2>Color: Black</h2>
                    <ul className="flex items-center gap-2 mt-2">
                      <li className="bg-black w-[20px] h-[20px] rounded-full"></li>
                      <li className="bg-amber-800 w-[20px] h-[20px] rounded-full"></li>
                      <li className="bg-blue-800 w-[20px] h-[20px] rounded-full"></li>
                    </ul>
                  </div>
                  <div className="mt-5">
                    <h2>Size: L</h2>
                    <ul className="flex items-center gap-1.5 mt-3">
                      <li className="bg-[#f5f5f5] text-[#999] px-[22px] py-[3px] border-gray-300 shadow-md hover:bg-[black] hover:text-[white] duration-300">
                        S
                      </li>
                      <li className="bg-[#f5f5f5] text-[#999] px-[22px] py-[3px] border-gray-300 shadow-md hover:bg-[black] hover:text-[white] duration-300">
                        L
                      </li>
                    </ul>
                  </div>
                  <div className="mt-5">
                    {Card &&
                      Card.map((item, idx) => (
                        <ul key={idx} className="flex items-center gap-3">
                          <li>
                            <ul className="flex items-center justify-between border border-gray-300 rounded-[30px] px-[8px] h-[48px] w-[109px]">
                              <li onClick={() => DecreaseCard(item?.id)}>
                                <Minus size={17} />
                              </li>
                              <li>{item?.count}</li>
                              <li onClick={() => IncreaseCard(item?.id)}>
                                <Plus size={17} />
                              </li>
                            </ul>
                          </li>
                          <li>
                            <button
                              onClick={() => {
                                OpenBasket();
                                CloseModal();
                                addtocard;
                              }}
                              className="px-[20px] py-[5px] bg-[#111111] text-white rounded-3xl h-[48px] w-[200px] hover:bg-white hover:text-black duration-300 border"
                            >
                              Add To Card
                            </button>
                          </li>
                          <li className="border border-gray-300 rounded-full h-[40px] w-[40px] flex items-center justify-center">
                            <Heart size={22} />
                          </li>
                          <li className="border border-gray-300 rounded-full h-[40px] w-[40px] flex items-center justify-center">
                            <Menu size={22} />
                          </li>
                        </ul>
                      ))}
                  </div>
                  <div className="flex flex-col mt-5">
                    <div className="flex  gap-2">
                      <input type="checkbox" />
                      <p>I agree with Terms & Conditions</p>
                    </div>
                    <button className="bg-[#ffc439] flex items-center justify-center h-[48px] rounded-3xl gap-1 text-[16px] mt-2">
                      Pay with
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAxcHgiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAxMDEgMzIiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHhtbG5zPSJodHRwOiYjeDJGOyYjeDJGO3d3dy53My5vcmcmI3gyRjsyMDAwJiN4MkY7c3ZnIj48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDEyLjIzNyAyLjggTCA0LjQzNyAyLjggQyAzLjkzNyAyLjggMy40MzcgMy4yIDMuMzM3IDMuNyBMIDAuMjM3IDIzLjcgQyAwLjEzNyAyNC4xIDAuNDM3IDI0LjQgMC44MzcgMjQuNCBMIDQuNTM3IDI0LjQgQyA1LjAzNyAyNC40IDUuNTM3IDI0IDUuNjM3IDIzLjUgTCA2LjQzNyAxOC4xIEMgNi41MzcgMTcuNiA2LjkzNyAxNy4yIDcuNTM3IDE3LjIgTCAxMC4wMzcgMTcuMiBDIDE1LjEzNyAxNy4yIDE4LjEzNyAxNC43IDE4LjkzNyA5LjggQyAxOS4yMzcgNy43IDE4LjkzNyA2IDE3LjkzNyA0LjggQyAxNi44MzcgMy41IDE0LjgzNyAyLjggMTIuMjM3IDIuOCBaIE0gMTMuMTM3IDEwLjEgQyAxMi43MzcgMTIuOSAxMC41MzcgMTIuOSA4LjUzNyAxMi45IEwgNy4zMzcgMTIuOSBMIDguMTM3IDcuNyBDIDguMTM3IDcuNCA4LjQzNyA3LjIgOC43MzcgNy4yIEwgOS4yMzcgNy4yIEMgMTAuNjM3IDcuMiAxMS45MzcgNy4yIDEyLjYzNyA4IEMgMTMuMTM3IDguNCAxMy4zMzcgOS4xIDEzLjEzNyAxMC4xIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDM1LjQzNyAxMCBMIDMxLjczNyAxMCBDIDMxLjQzNyAxMCAzMS4xMzcgMTAuMiAzMS4xMzcgMTAuNSBMIDMwLjkzNyAxMS41IEwgMzAuNjM3IDExLjEgQyAyOS44MzcgOS45IDI4LjAzNyA5LjUgMjYuMjM3IDkuNSBDIDIyLjEzNyA5LjUgMTguNjM3IDEyLjYgMTcuOTM3IDE3IEMgMTcuNTM3IDE5LjIgMTguMDM3IDIxLjMgMTkuMzM3IDIyLjcgQyAyMC40MzcgMjQgMjIuMTM3IDI0LjYgMjQuMDM3IDI0LjYgQyAyNy4zMzcgMjQuNiAyOS4yMzcgMjIuNSAyOS4yMzcgMjIuNSBMIDI5LjAzNyAyMy41IEMgMjguOTM3IDIzLjkgMjkuMjM3IDI0LjMgMjkuNjM3IDI0LjMgTCAzMy4wMzcgMjQuMyBDIDMzLjUzNyAyNC4zIDM0LjAzNyAyMy45IDM0LjEzNyAyMy40IEwgMzYuMTM3IDEwLjYgQyAzNi4yMzcgMTAuNCAzNS44MzcgMTAgMzUuNDM3IDEwIFogTSAzMC4zMzcgMTcuMiBDIDI5LjkzNyAxOS4zIDI4LjMzNyAyMC44IDI2LjEzNyAyMC44IEMgMjUuMDM3IDIwLjggMjQuMjM3IDIwLjUgMjMuNjM3IDE5LjggQyAyMy4wMzcgMTkuMSAyMi44MzcgMTguMiAyMy4wMzcgMTcuMiBDIDIzLjMzNyAxNS4xIDI1LjEzNyAxMy42IDI3LjIzNyAxMy42IEMgMjguMzM3IDEzLjYgMjkuMTM3IDE0IDI5LjczNyAxNC42IEMgMzAuMjM3IDE1LjMgMzAuNDM3IDE2LjIgMzAuMzM3IDE3LjIgWiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMwMDMwODciIGQ9Ik0gNTUuMzM3IDEwIEwgNTEuNjM3IDEwIEMgNTEuMjM3IDEwIDUwLjkzNyAxMC4yIDUwLjczNyAxMC41IEwgNDUuNTM3IDE4LjEgTCA0My4zMzcgMTAuOCBDIDQzLjIzNyAxMC4zIDQyLjczNyAxMCA0Mi4zMzcgMTAgTCAzOC42MzcgMTAgQyAzOC4yMzcgMTAgMzcuODM3IDEwLjQgMzguMDM3IDEwLjkgTCA0Mi4xMzcgMjMgTCAzOC4yMzcgMjguNCBDIDM3LjkzNyAyOC44IDM4LjIzNyAyOS40IDM4LjczNyAyOS40IEwgNDIuNDM3IDI5LjQgQyA0Mi44MzcgMjkuNCA0My4xMzcgMjkuMiA0My4zMzcgMjguOSBMIDU1LjgzNyAxMC45IEMgNTYuMTM3IDEwLjYgNTUuODM3IDEwIDU1LjMzNyAxMCBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA2Ny43MzcgMi44IEwgNTkuOTM3IDIuOCBDIDU5LjQzNyAyLjggNTguOTM3IDMuMiA1OC44MzcgMy43IEwgNTUuNzM3IDIzLjYgQyA1NS42MzcgMjQgNTUuOTM3IDI0LjMgNTYuMzM3IDI0LjMgTCA2MC4zMzcgMjQuMyBDIDYwLjczNyAyNC4zIDYxLjAzNyAyNCA2MS4wMzcgMjMuNyBMIDYxLjkzNyAxOCBDIDYyLjAzNyAxNy41IDYyLjQzNyAxNy4xIDYzLjAzNyAxNy4xIEwgNjUuNTM3IDE3LjEgQyA3MC42MzcgMTcuMSA3My42MzcgMTQuNiA3NC40MzcgOS43IEMgNzQuNzM3IDcuNiA3NC40MzcgNS45IDczLjQzNyA0LjcgQyA3Mi4yMzcgMy41IDcwLjMzNyAyLjggNjcuNzM3IDIuOCBaIE0gNjguNjM3IDEwLjEgQyA2OC4yMzcgMTIuOSA2Ni4wMzcgMTIuOSA2NC4wMzcgMTIuOSBMIDYyLjgzNyAxMi45IEwgNjMuNjM3IDcuNyBDIDYzLjYzNyA3LjQgNjMuOTM3IDcuMiA2NC4yMzcgNy4yIEwgNjQuNzM3IDcuMiBDIDY2LjEzNyA3LjIgNjcuNDM3IDcuMiA2OC4xMzcgOCBDIDY4LjYzNyA4LjQgNjguNzM3IDkuMSA2OC42MzcgMTAuMSBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5MC45MzcgMTAgTCA4Ny4yMzcgMTAgQyA4Ni45MzcgMTAgODYuNjM3IDEwLjIgODYuNjM3IDEwLjUgTCA4Ni40MzcgMTEuNSBMIDg2LjEzNyAxMS4xIEMgODUuMzM3IDkuOSA4My41MzcgOS41IDgxLjczNyA5LjUgQyA3Ny42MzcgOS41IDc0LjEzNyAxMi42IDczLjQzNyAxNyBDIDczLjAzNyAxOS4yIDczLjUzNyAyMS4zIDc0LjgzNyAyMi43IEMgNzUuOTM3IDI0IDc3LjYzNyAyNC42IDc5LjUzNyAyNC42IEMgODIuODM3IDI0LjYgODQuNzM3IDIyLjUgODQuNzM3IDIyLjUgTCA4NC41MzcgMjMuNSBDIDg0LjQzNyAyMy45IDg0LjczNyAyNC4zIDg1LjEzNyAyNC4zIEwgODguNTM3IDI0LjMgQyA4OS4wMzcgMjQuMyA4OS41MzcgMjMuOSA4OS42MzcgMjMuNCBMIDkxLjYzNyAxMC42IEMgOTEuNjM3IDEwLjQgOTEuMzM3IDEwIDkwLjkzNyAxMCBaIE0gODUuNzM3IDE3LjIgQyA4NS4zMzcgMTkuMyA4My43MzcgMjAuOCA4MS41MzcgMjAuOCBDIDgwLjQzNyAyMC44IDc5LjYzNyAyMC41IDc5LjAzNyAxOS44IEMgNzguNDM3IDE5LjEgNzguMjM3IDE4LjIgNzguNDM3IDE3LjIgQyA3OC43MzcgMTUuMSA4MC41MzcgMTMuNiA4Mi42MzcgMTMuNiBDIDgzLjczNyAxMy42IDg0LjUzNyAxNCA4NS4xMzcgMTQuNiBDIDg1LjczNyAxNS4zIDg1LjkzNyAxNi4yIDg1LjczNyAxNy4yIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDA5Y2RlIiBkPSJNIDk1LjMzNyAzLjMgTCA5Mi4xMzcgMjMuNiBDIDkyLjAzNyAyNCA5Mi4zMzcgMjQuMyA5Mi43MzcgMjQuMyBMIDk1LjkzNyAyNC4zIEMgOTYuNDM3IDI0LjMgOTYuOTM3IDIzLjkgOTcuMDM3IDIzLjQgTCAxMDAuMjM3IDMuNSBDIDEwMC4zMzcgMy4xIDEwMC4wMzcgMi44IDk5LjYzNyAyLjggTCA5Ni4wMzcgMi44IEMgOTUuNjM3IDIuOCA5NS40MzcgMyA5NS4zMzcgMy4zIFoiPjwvcGF0aD48L3N2Zz4"
                        alt=""
                        className="w-[90px] h-[20px]"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {BasketModal && (
        <div className="fixed inset-0 bg-[#0000004a]  h-full w-full z-[999999]">
          <div className="absolute bg-white w-[500px] h-full right-0 p-10">
            <div>
              <div className="mb-15">
                <ul className="flex items-center justify-between">
                  <li className="text-2xl font-medium ">Shopping Cart </li>
                  <li>
                    <X onClick={CloseBasket} />
                  </li>
                </ul>
              </div>
              <div className="h-[260px] overflow-hidden overflow-y-scroll">
                {Card &&
                  Card.map((item, idx) => (
                    <div key={idx}>
                      <div className="flex items-start gap-4 mb-5 ">
                        <div className="w-[120px] h-[120px]">
                          <img
                            src={`http://localhost:1337${item.image.url}`}
                            alt=""
                            className="w-full h-full object-contain rounded-2xl"
                          />
                        </div>
                        <div className="flex flex-col justify-between w-full gap-1.5">
                          <h1 className="text-[20px] font-medium">
                            {item?.title}
                          </h1>
                          <ul className="flex items-center gap-2">
                            <li className="text-[15px] font-medium text-amber-900">
                              ${item?.discount}
                            </li>
                            <li className="text-[15px] line-through text-[#333]">
                              {" "}
                              $ {item?.price}
                            </li>
                          </ul>
                          <div className="flex gap-2.5 items-center">
                            <ul className="flex items-center justify-between border border-gray-300 rounded-[30px] px-[8px] h-[28px] w-[70px]">
                              <li onClick={() => DecreaseCard(item?.id)}>
                                <Minus size={17} />
                              </li>
                              <li>{item?.count}</li>
                              <li onClick={() => IncreaseCard(item?.id)}>
                                <Plus size={17} />
                              </li>
                            </ul>
                            <div
                              onClick={() => RemoveCard(item?.id)}
                              className="border border-gray-300 rounded-[30px] flex items-center justify-center p-[8px] h-[30px] w-[30px] hover:bg-[#e0dede] duration-300 cursor-pointer"
                            >
                              <Trash size={18} color="red" />
                            </div>
                          </div>
                          <ul className="flex items-center justify-between border-b-1">
                            <li className="font-medium ">Total:</li>
                            <li className="text-1xl font-medium">
                              $ {TotalPrice()}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
