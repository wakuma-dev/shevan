import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from '../navbar/Logo';
import Social from '../../Social';

const Footer = () => {
  return (
    <div className="w-screen h-auto lg:min-h-[500px] flex flex-col  gap-5 px-4 md:px-8 lg:px-12 py-5">
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start gap-2">
          <NavLink
            to="/customer"
            className="text-[16px] leading-[26px] text-black hover:text-[#419338] transition-colors duration-150 font-normal"
          >
            Customer Hub
          </NavLink>
          <NavLink
            to="/contact"
            className="text-[16px] leading-[26px] text-black hover:text-[#419338] transition-colors duration-150  font-normal"
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/terms"
            className="text-[16px] leading-[26px] text-black hover:text-[#419338] transition-colors duration-150  font-normal"
          >
            Terms & Conditions
          </NavLink>
        </div>
        <Logo />
        <Social />
      </div>
      <div className="flex flex-col text-[13px] leading-[20px] font-light text-[#030303] items-center justify-center gap-2">
        <p>2026 shevan world</p>
        <span>Developed by Wakuma Hailu</span>
      </div>
    </div>
  );
}

export default Footer
