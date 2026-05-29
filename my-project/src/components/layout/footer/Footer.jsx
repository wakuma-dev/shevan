import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../navbar/Logo";
import Social from "../../Social";

const Footer = () => {
  return (
    <footer className="w-full h-auto lg:min-h-[300px] flex flex-col gap-5 px-4 md:px-8 lg:px-12 py-12">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
        <div className="flex flex-col my-16 lg:mt-0 items-center lg:items-start gap-1 lg:gap-2">
          <NavLink to="/customer" className="text-[18px] font-roboto-serif hover:text-[#419338]">
            Customer Hub
          </NavLink>

          <NavLink to="/contact" className="text-[18px] font-roboto-serif hover:text-[#419338]">
            Contact Us
          </NavLink>

          <NavLink to="/terms" className="text-[18px] font-roboto-serif hover:text-[#419338]">
            Terms & Conditions
          </NavLink>
        </div>

        <Logo />

        <Social />
      </div>

      <div className="flex flex-col text-[13px] font-light font-roboto-serif text-[#030303] items-center gap-2">
        <p>2026 shevan world</p>
        <span clas>Developed by Wakuma Hailu</span>
      </div>
    </footer>
  );
};

export default Footer;
