import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
export default function MainLayout(){
   return (
    <>
        <Navbar />
        <main className="pt-10">
            <Outlet />
        </main>
        <Footer />
    </>
   )
}