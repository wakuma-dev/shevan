import React, { memo } from "react";
import Logo from "./Logo";
import SearchIcon from "./SearchIcon";

import UserIcon from "./UserIcon";
import MobileMenu from "./MobileMenu";

const Navbar = memo(function Navbar({ isScrolled }) {
  return (
    <nav
      className={`bg-white text-black relative top-0 left-0 w-full flex items-center z-[99] justify-between
       px-4 md:px-8 lg:px-12 py-3 lg:py-4 backdrop-blur-xl transition-colors duration-300 ${
         isScrolled ? "shadow-md" : ""
       }`}
    >
     
        <MobileMenu />
        <Logo />
        <div className="flex items-center gap-2">
          <SearchIcon />
          <UserIcon />
        </div>
 
    </nav>
  );
});

export default Navbar;
