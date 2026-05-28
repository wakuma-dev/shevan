import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import CheckoutNavbar from "./navbar/CheckoutNavbar";
export default function CheckoutLayout() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <CheckoutNavbar isScrolled={isScrolled} />
      <main className="pt-6">
        <Outlet />
      </main>
    </>
  );
}
