import React, { useState } from "react";
import {
  FaSearch,
  FaUserAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { RiMenu4Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [collectionOpen, setCollectionOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      {/* Top Banner + Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
        <div className="text-center text-[10px] text-white font-medium py-2 bg-[#E65100]">
          Free shipping on orders above ₹999
        </div>

        <nav className="flex justify-between items-center px-4 md:px-8 py-4 bg-white relative">
          {/* Logo */}
          <a href="#" className="font-bold text-[#b21919] text-xl sm:text-2xl">
            Zingari
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="#" className="text-[#5D4037] font-medium">Home</a>

            {/* Collections Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDesktopDropdown(!desktopDropdown)}
                className="text-[#5D4037] font-medium flex items-center gap-1"
              >
                Collections{" "}
                {desktopDropdown ? <FiChevronUp className="text-sm" /> : <FiChevronDown className="text-sm" />}
              </button>

              {desktopDropdown && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md min-w-[180px] z-50">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 text-[#5D4037]"
                    onClick={() => setDesktopDropdown(false)}
                  >
                    Spices
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 text-[#5D4037]"
                    onClick={() => setDesktopDropdown(false)}
                  >
                    Masala Mixes
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 text-[#5D4037]"
                    onClick={() => setDesktopDropdown(false)}
                  >
                    Specialty Packs
                  </a>
                </div>
              )}
            </div>

            <a href="#" className="text-[#5D4037] font-medium">About</a>
            <a href="#" className="text-[#5D4037] font-medium">Recipes</a>
            <a href="#" className="text-[#5D4037] font-medium">Contact</a>
          </div>

          {/* Desktop Icons */}
          <div className="hidden lg:flex items-center gap-6">
            <FaSearch className="text-[#5D4037] text-xl cursor-pointer" onClick={() => setShowSearch(!showSearch)} />
            <FaCartShopping className="text-[#5D4037] text-xl cursor-pointer" />
            <FaUserAlt className="text-[#5D4037] text-xl cursor-pointer" />
          </div>

          {/* Hamburger for Mobile */}
          <button onClick={() => setOpen(true)} className="lg:hidden text-2xl text-[#333]">
            <RiMenu4Line />
          </button>
        </nav>

        {/* Optional Desktop Search Bar */}
        {showSearch && (
          <div className="w-full px-4 md:px-8 py-2 bg-gray-100">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 rounded-md outline-none text-sm"
            />
          </div>
        )}
      </div>

      {/* Spacer */}
      <div className="h-[90px]" />

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 ${open ? "left-0" : "-left-full"} w-full h-full bg-white z-50 transition-all duration-500 ease-in-out`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)}>
            <IoClose className="text-3xl text-[#5D4037]" />
          </button>
        </div>

        {/* Mobile Menu Items */}
        <div className="flex flex-col justify-center items-center gap-6 text-lg font-semibold text-[#5D4037] mt-10">
          <a href="#" onClick={() => setOpen(false)}>Home</a>

          {/* Mobile Dropdown */}
          <div className="w-full text-center px-6">
            <button
              onClick={() => setCollectionOpen(!collectionOpen)}
              className="w-full flex justify-center items-center gap-2 font-semibold text-[#5D4037]"
            >
              Collections {collectionOpen ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            {collectionOpen && (
              <div className="flex flex-col gap-2 mt-2 text-base text-[#5D4037]">
                <a href="#" onClick={() => setOpen(false)}>Spices</a>
                <a href="#" onClick={() => setOpen(false)}>Masala Mixes</a>
                <a href="#" onClick={() => setOpen(false)}>Specialty Packs</a>
              </div>
            )}
          </div>

          <a href="#" onClick={() => setOpen(false)}>About</a>
          <a href="#" onClick={() => setOpen(false)}>Recipes</a>
          <a href="#" onClick={() => setOpen(false)}>Contact</a>

          {/* Action Icons */}
          <div className="flex justify-center gap-6 mt-6">
            <FaSearch className="text-xl" />
            <FaCartShopping className="text-xl" />
            <FaUserAlt className="text-xl" />
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="absolute bottom-6 left-0 w-full flex justify-center gap-6 text-xl text-[#5D4037]">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaPinterest /></a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
