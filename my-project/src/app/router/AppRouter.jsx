import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "../../components/layout/MainLayout";
import AuthLayout from "../../components/layout/AuthLayout";

const Home = lazy(() => import("../../pages/home/Home.jsx"));
const Login = lazy(() => import("../../pages/login/Login.jsx"));
const SignUp = lazy(() => import("../../pages/signup/SignUp.jsx"));
const Customer = lazy(() => import("../../pages/customer/Customer.jsx"));
const Contact = lazy(() => import("../../pages/contact/ContactUs.jsx"));
const Terms = lazy(() => import("../../pages/terms/Terms.jsx"));
    
export default function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
        </Route>

        <Route path="/login" element={<AuthLayout />}>
          <Route index element={<Login />} />
        </Route>
        <Route path="/signup" element={<AuthLayout />}>
          <Route index element={<SignUp />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
