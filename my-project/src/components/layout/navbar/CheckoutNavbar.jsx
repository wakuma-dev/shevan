import React from 'react';
import Logo from './Logo';
import { TbShoppingBag } from "react-icons/tb";
export default function CheckoutNavbar({isScrolled}) {
    return (
         <nav
      className={`bg-white text-black fixed top-0 left-0 w-full z-[99] 
       px-4 md:px-8 lg:px-12 py-5 lg:py-8 backdrop-blur-xl transition-colors duration-300 
       flex items-center relative ${
         isScrolled ? "shadow-md" : ""
       }`}
    >
        <Logo />
        <div className="flex items-center ml-auto">
            <TbShoppingBag size={20} className="cursor-pointer text-[#00459e]" />
        </div>
    </nav>
    )
}