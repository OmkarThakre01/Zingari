import React, { useState } from "react";
import { Link } from "react-router-dom";
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
          <Link to="/" className="font-bold text-[#b21919] text-xl sm:text-2xl">
            Zingari
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            <Link to="/" className="text-[#5D4037] font-medium">Home</Link>

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
                  <Link
                    to="/collections/spices"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 text-[#5D4037]"
                    onClick={() => setDesktopDropdown(false)}
                  >
                    Spices
                  </Link>
                  <Link
                    to="/collections/masala-mixes"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 text-[#5D4037]"
                    onClick={() => setDesktopDropdown(false)}
                  >
                    Masala Mixes
                  </Link>
                  <Link
                    to="/collections/specialty-packs"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 text-[#5D4037]"
                    onClick={() => setDesktopDropdown(false)}
                  >
                    Specialty Packs
                  </Link>
                </div>
              )}
            </div>

            <Link to="/about" className="text-[#5D4037] font-medium">About</Link>
            <Link to="/recipes" className="text-[#5D4037] font-medium">Recipes</Link>
            <Link to="/contact" className="text-[#5D4037] font-medium">Contact</Link>
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
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>

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
                <Link to="/collections/spices" onClick={() => setOpen(false)}>Spices</Link>
                <Link to="/collections/masala-mixes" onClick={() => setOpen(false)}>Masala Mixes</Link>
                <Link to="/collections/specialty-packs" onClick={() => setOpen(false)}>Specialty Packs</Link>
              </div>
            )}
          </div>

          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/recipes" onClick={() => setOpen(false)}>Recipes</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>

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
