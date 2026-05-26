import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import useMenu from "../../../app/store/useMenuStore";
import navLinks from "../../../data/navLinks";
import { NavLink } from "react-router-dom";

const MobileMenu = () => {
  const isOpen = useMenu((state) => state.isOpen);
  const toggleMenu = useMenu((state) => state.toggleMenu);
  const closeMenu = useMenu((state) => state.closeMenu);

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="fixed top-1/2 -translate-y-1/2 cursor-pointer z-[99]"
      >
        <CiMenuBurger size={22} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-0 left-0 h-screen w-[320px] md:w-[440px] bg-white z-[980]"
          >
            <div className="flex flex-col items-start gap-4 px-4 mt-14">
              <ul className="flex flex-col items-start gap-4">
                {navLinks.map((link) => {
                  return (
                    <li key={link.path}>
                      <NavLink
                        to={link.path}
                        onClick={closeMenu}
                        className="text-[16px] leading-[26px] text-black capitalize font-medium"
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
              <NavLink
                to="/login"
                onClick={closeMenu}
                className="text-[16px] leading-[26px] text-black capitalize font-medium"
              >
                Log in
              </NavLink>
              <NavLink
                to="/signup"
                onClick={closeMenu}
                className="text-[16px] leading-[26px] text-black capitalize font-medium"
              >
                Create Account
              </NavLink>
            </div>
            <div className="absolute top-5 right-5 z-[999]">
              <button onClick={closeMenu} className="cursor-pointer">
                <IoCloseOutline size={22} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
