import React, {useState, useEffect} from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
export default function MainLayout(){
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
     const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
     }
     handleScroll();
     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
    }, []);
   return (
    <>
        <Navbar isScrolled={isScrolled} />
        <main className="pt-6">
            <Outlet />
        </main>
        <Footer />
    </>
   )
}