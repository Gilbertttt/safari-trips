import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import imageLogo from "../Images/Safari Trips Logo Design.png";

const NavLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home Page", key: "home" },
    { name: "About Us", key: "aboutUs" },
    { name: "Contact Us", key: "contact" },
    { name: "Travel Packages", key: "packages" },
  ];

  return (
    <nav className="w-full z-10 bg-stone-900 shadow-sm inset-x-0 absolute top-0 opacity-70">
      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <img src={imageLogo} alt="logo" className="h-20" />

        {/* Desktop Menu */}
        <ul className="hidden md:block md:flex space-x-6">
          {navItems.map((item) => (
            <li
              key={item.key}
              // className="text-black hover:text-red-500 transition cursor-pointer py-2"
              // className="bg-white/10 backdrop-blur-sm p-3 text-white rounded-lg border border-white/20 hover:bg-white/20 transition-all"
              className="text-white cursor-pointer"
            ><a href=""> {item.name}</a>
            
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-red-500 focus:outline-none"
          aria-label="Toggle menu"
        >
          <GiHamburgerMenu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-75 z-50">
          <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-lg">
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-700 hover:text-red-500"
                aria-label="Close menu"
              >
                <AiOutlineClose className="w-6 h-6" />
              </button>
            </div>

            <ul className="px-4 py-2 space-y-4">
              {navItems.map((item) => (
                <li key={item.key} className="border-b border-gray-100">
                  <a
                    href="#"
                    className=" py-3 text-gray-800 hover:text-red-500 transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavLinks;
