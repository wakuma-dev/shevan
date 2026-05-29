import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "../../components/layout/MainLayout";
import AuthLayout from "../../components/layout/AuthLayout";
import CheckoutLayout from "../../components/layout/CheckoutLayout.jsx";

const Home = lazy(() => import("../../pages/home/Home.jsx"));
const Login = lazy(() => import("../../pages/login/Login.jsx"));
const SignUp = lazy(() => import("../../pages/signup/SignUp.jsx"));
const Customer = lazy(() => import("../../pages/customer/Customer.jsx"));
const Contact = lazy(() => import("../../pages/contact/ContactUs.jsx"));
const Terms = lazy(() => import("../../pages/terms/Terms.jsx"));
const Collections = lazy(() => import("../../pages/collections/Collections.jsx"));
const Check = lazy(() => import("../../pages/check/Checkout.jsx"));
const ShopAll = lazy(() => import("../../pages/shop all/ShopAll.jsx"));
const Jewelry = lazy(() => import("../../pages/jewelry/Jewelry.jsx"));
const ProductDetails = lazy(() => import("../../pages/jewelry/ProductDetails.jsx"));
const CheckoutDetails = lazy(() => import("../../pages/check/components/CheckoutDetails.jsx"));
export default function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/check" element={<Check />} />
          <Route path="shop-all" element={<ShopAll />} />
          <Route path="/jewelry" element={<Jewelry />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/payment" element={<CheckoutDetails />} />
        </Route>

        <Route path="/login" element={<AuthLayout />}>
          <Route index element={<Login />} />
        </Route>
        <Route path="/signup" element={<AuthLayout />}>
          <Route index element={<SignUp />} />
        </Route>
        <Route path="/checkout" element={<CheckoutLayout />}>
          <Route index element={<Check />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
