import {
  ChevronDown,
  Clock,
  Facebook,
  Heart,
  Instagram,
  Linkedin,
  ListIcon,
  MenuIcon,
  Plus,
  Search,
  ShoppingCart,
  Twitter,
  User2,
  X,
  Youtube,
} from "lucide-react";
import React, { useState } from "react";
import styles from "./style.module.scss";
import { clsx } from "clsx";
import { useNavigate } from "react-router";

const Header = () => {
  const [OpenModal, SetOpenModal] = useState(false);
  const navigate = useNavigate();
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
              <li onClick={()=>{
                navigate("/sales")
              }} className="hover:text-[#9c6d3a] duration-300 cursor-pointer relative">
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
              <li className="hover:text-[#9c6d3a] duration-300 cursor-pointer relative">
                <ShoppingCart size={20} />
                <div className="absolute -top-2 -right-2 bg-[#9c6d3a]  w-[18px] h-[18px] rounded-full flex items-center justify-center text-[#fff] text-[13px]">
                  <span>0</span>
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
    </div>
  );
};

export default Header;
