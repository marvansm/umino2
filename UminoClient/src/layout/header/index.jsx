import {
  ChevronDown,
  Clock,
  Facebook,
  Heart,
  Instagram,
  Linkedin,
  ListIcon,
  MenuIcon,
  Minus,
  Plus,
  Search,
  ShoppingCart,
  Trash,
  Twitter,
  User2,
  X,
  Youtube,
} from "lucide-react";
import React, { useState } from "react";
import styles from "./style.module.scss";
import { clsx } from "clsx";
import { useNavigate } from "react-router";
import { useCard } from "../../Providers/useContext";

const Header = () => {
  const [OpenModal, SetOpenModal] = useState(false);
  const navigate = useNavigate();
  const {
    AddtoCard,
    RemoveCard,
    ClearCard,
    IncreaseCard,
    TotalPrice,
    Card,
    DecreaseCard,
  } = useCard();
  const [BasketModal, SetBasketModal] = useState(false);

  const OpenBasket = () => {
    SetBasketModal(true);
  };
  const CloseBasket = () => {
    SetBasketModal(false);
  };
  return (
    <div className="">
      <div className="container mx-auto px-9 py-[20px]">
        <div className="flex items-center justify-between">
          <div className="left w-[100px]">
            <img
              src="https://umino-demo.myshopify.com/cdn/shop/files/lgh_f6.png?v=1702781851&width=165"
              alt=""
              className="w-full h-full object-contain "
            />
          </div>
          <div className={clsx(styles.pagination, "navigation")}>
            <ul className="flex items-center gap-6 font-semibold text-[13px] text-[#111111] uppercase">
              <li className="flex items-center hover:text-[#9c6d3a] duration-300 cursor-pointer ">
                Home <ChevronDown size={14} />
              </li>
              <li className="flex items-center hover:text-[#9c6d3a] duration-300 cursor-pointer">
                Shop <ChevronDown size={14} />
              </li>
              <li className="flex items-center hover:text-[#9c6d3a] duration-300 cursor-pointer">
                Product <ChevronDown size={14} />
              </li>
              <li className="flex items-center hover:text-[#9c6d3a] duration-300 cursor-pointer">
                Blog <ChevronDown size={14} />
              </li>
              <li className="flex items-center hover:text-[#9c6d3a] duration-300 cursor-pointer">
                Page <ChevronDown size={14} />
              </li>
              <li
                onClick={() => {
                  navigate("/sales");
                }}
                className="hover:text-[#9c6d3a] duration-300 cursor-pointer relative"
              >
                Sale
                <div className="absolute -top-4 bg-[#9c6d3a] rounded-[2px] -right-6 text-[#fff] text-[9px] w-[30px] flex items-center justify-center">
                  <span>Hot</span>
                </div>
              </li>
              <li className="hover:text-[#9c6d3a] duration-300 cursor-pointer">
                BUY UMINO!
              </li>
            </ul>
          </div>
          <div className={clsx(styles.icons)}>
            <ul className="flex items-center gap-5 ">
              <li className="hover:text-[#9c6d3a] duration-300 cursor-pointer">
                <Search size={20} />
              </li>
              <li className="hover:text-[#9c6d3a] duration-300 cursor-pointer">
                <User2 size={20} />
              </li>
              <li className="hover:text-[#9c6d3a] duration-300 cursor-pointer">
                <Clock size={20} />
              </li>
              <li className="hover:text-[#9c6d3a] duration-300 cursor-pointer relative">
                <Heart size={20} />
                <div className="absolute -top-2 -right-2 bg-[#9c6d3a]  w-[18px] h-[18px] rounded-full flex items-center justify-center text-[#fff] text-[13px]">
                  <span>0</span>
                </div>
              </li>
              <li
                onClick={() => OpenBasket()}
                className="hover:text-[#9c6d3a] duration-300 cursor-pointer relative"
              >
                <ShoppingCart size={20} />
                <div className="absolute -top-2 -right-2 bg-[#9c6d3a]  w-[18px] h-[18px] rounded-full flex items-center justify-center text-[#fff] text-[13px]">
                  <span>{Card?.length > 0 ? Card.length : 0}</span>
                </div>
              </li>
            </ul>
          </div>
          <div
            onClick={() => {
              SetOpenModal(true);
            }}
            className={clsx(styles.burgerIcon)}
          >
            <MenuIcon />
          </div>
        </div>
      </div>
      {OpenModal && (
        <div className="fixed w-ful inset-0 h-full z-[9999] bg-[#00000063]">
          <div className="absolute left-0 bg-[#444] h-full w-[400px] p-5 overflow-y-scroll z-[9999999]">
            <p className="text-[15px] font-normal leading-[1.74] text-[#fff] mb-5">
              We are open with limited hours and staff.
            </p>
            <div className="flex items-center border border-gray-200 rounded-full text-[15px] min-h-[52px] w-full justify-between px-[20px] bg-[#fff] ">
              <input
                type="search"
                placeholder="Search our store"
                className="outline-none "
              />
              <Search color="#e52e06" />
            </div>
            <div className="w-full mt-10">
              <ul className="text-[#fff] flex flex-col gap-5">
                <li className="flex items-center justify-between">
                  Home <Plus strokeWidth={1} />
                </li>
                <li className="flex items-center justify-between">
                  Electronics <Plus strokeWidth={1} />
                </li>
                <li className="flex items-center justify-between">
                  Blog <Plus strokeWidth={1} />
                </li>
                <li className="flex items-center justify-between">
                  Pages <Plus strokeWidth={1} />
                </li>
                <li>Contact </li>
              </ul>
            </div>
            <div className="my-5 border-b border-white/20 py-5 w-full">
              <button className="flex items-center py-[20px] px-[45px] bg-[#e52e06] text-[#fff] uppercase rounded-[5px] font-semibold gap-1 w-full justify-between">
                <ListIcon /> All Categories
                <ChevronDown />
              </button>
            </div>
            <div className="my-5 border-b border-white/20 py-5">
              <ul className="text-[#fff]">
                <li>Store location</li>
                <li>Log In / Sign Up</li>
                <li>(08)123 456 7890</li>
                <li>currency:USD</li>
              </ul>
            </div>
            <div>
              <ul className="flex items-center gap-1.5">
                <li className="w-[40px] h-[40px] bg-[#fff] p-2 rounded-full flex items-center justify-center">
                  <Facebook size={18} />
                </li>
                <li className="w-[40px] h-[40px] bg-[#fff] p-2 rounded-full flex items-center justify-center">
                  <Instagram size={18} />
                </li>
                <li className="w-[40px] h-[40px] bg-[#fff] p-2 rounded-full flex items-center justify-center">
                  <Linkedin size={18} />
                </li>
                <li className="w-[40px] h-[40px] bg-[#fff] p-2 rounded-full flex items-center justify-center">
                  <Youtube size={18} />
                </li>
                <li className="w-[40px] h-[40px] bg-[#fff] p-2 rounded-full flex items-center justify-center">
                  <Twitter size={18} />
                </li>
              </ul>
            </div>
            <div
              onClick={() => SetOpenModal(false)}
              className="bg-[#1f1f1f] absolute top-0 right-0 w-[40px] h-[40px] flex items-center justify-center"
            >
              <X color="white" />
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
                    <div>
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
                      <div>salamsa</div>
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

export default Header;
