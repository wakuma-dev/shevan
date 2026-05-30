import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import img from "../../../assets/Google_Pay-Logo.wine.png";
import img2 from "../../../assets/paypal_PNG9.png";
import useForm from "../../../hooks/useForm";
import useCartStore from "../../../app/store/useCartStore"; // ✅ added

// ---------- Default Checkout Form (unchanged except Pay now button now logs cart) ----------
function DefaultCheckoutForm() {
  const { values, handleChange } = useForm({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    phoneNumber: "",
    cardNumber: "",
    expiryDate: "",
    securityCode: "",
    nameOnCard: "",
  });

  const cartItems = useCartStore((state) => state.cart);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);

  const handlePayNow = (e) => {
    e.preventDefault();
    console.log("Order placed", {
      formValues: values,
      cart: cartItems,
      total: getTotalPrice(),
    });
    alert("Order placed successfully!");
  };

  return (
    <form className="w-full flex flex-col gap-3" onSubmit={handlePayNow}>
      {/* All your original form content remains exactly the same */}
      <div className="w-full flex justify-between">
        <span className="text-[21px] leading-[25px] font-semibold text-black">
          Contact
        </span>
        <NavLink
          to="/login"
          className="text-[14px] leading-[21px] font-normal text-[#00459e] underline underline-[#00459e]"
        >
          Sign in
        </NavLink>
      </div>
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Email address"
        className="w-full border border-[#dedede] p-2.5 rounded-md outline-none"
      />
      <div className="flex items-center gap-2">
        <input type="checkbox" className="cursor-pointer" />
        <span className="text-[12px] leading-[16px] text-black">
          Email me with news and offers
        </span>
      </div>

      <span className="text-[21px] leading-[25px] text-black font-semibold">
        Delivery
      </span>
      <div className="flex-1 flex items-start gap-3">
        <input
          type="text"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          placeholder="First name"
          className="w-full rounded-md border border-[#DEDEDE] p-3 outline-none"
        />
        <input
          type="text"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          placeholder="Last name"
          className="w-full rounded-md border border-[#dedede] p-3 outline-none"
        />
      </div>
      <input
        type="text"
        name="address"
        value={values.address}
        onChange={handleChange}
        placeholder="Address"
        className="w-full rounded-md border border-[#dedede] p-3 outline-none"
      />
      <div className="w-full flex-1 flex items-start gap-3">
        <input
          type="text"
          name="city"
          value={values.city}
          onChange={handleChange}
          placeholder="City"
          className="w-full border border-[#dedede] p-3 outline-none rounded-md"
        />
        <input
          type="text"
          name="state"
          value={values.state}
          onChange={handleChange}
          placeholder="State"
          className="w-full rounded-md border border-[#dedede] p-3 outline-none"
        />
        <input
          type="text"
          name="zipcode"
          value={values.zipcode}
          onChange={handleChange}
          placeholder="ZIP code"
          className="w-full rounded-md border border-[#dedede] p-3 outline-none"
        />
      </div>
      <div className="relative">
        <input
          type="tel"
          name="phoneNumber"
          value={values.phoneNumber}
          onChange={handleChange}
          placeholder="Phone number"
          className="w-full rounded-md border border-[#dedede] p-3 outline-none"
        />
      </div>
      <div className="flex items-center gap-2">
        <input type="checkbox" className="cursor-pointer" />
        <span className="text-[12px] leading-[16px] text-black">
          Text me with news and offers
        </span>
      </div>

      <div className="flex flex-col items-start gap-1">
        <p className="font-semibold text-[21px] leading-[25px] text-black">
          Payment
        </p>
        <span className="text-[14px] leading-[21px] font-normal text-[#707070]">
          All transactions are secure and encrypted.
        </span>
      </div>
      <div className="flex flex-col gap-3 px-3 py-6 rounded-lg bg-[#F4F4F4] w-full h-auto">
        <div className="relative">
          <input
            type="text"
            name="cardNumber"
            value={values.cardNumber}
            onChange={handleChange}
            placeholder="Card number"
            className="w-full rounded-md border outline-none focus:ring-1 focus:ring-[#236ED3] bg-white border-[#DEDEDE] p-3"
          />
        </div>
        <div className="w-full flex-1 flex items-start gap-2">
          <input
            type="date"
            name="expiryDate"
            value={values.expiryDate}
            onChange={handleChange}
            placeholder="Expiration date"
            className="w-full rounded-md border outline-none focus:ring-1 focus:ring-[#236ED3] bg-white border-[#DEDEDE] p-3"
          />
          <input
            type="password"
            name="securityCode"
            value={values.securityCode}
            onChange={handleChange}
            placeholder="Security code"
            className="w-full rounded-md border outline-none focus:ring-1 focus:ring-[#236ED3] bg-white border-[#DEDEDE] p-3"
          />
        </div>
        <input
          type="text"
          name="nameOnCard"
          value={values.nameOnCard}
          onChange={handleChange}
          placeholder="Name on card"
          className="w-full rounded-md border outline-none focus:ring-1 p-3 focus:ring-[#236ed3] bg-white border-[#dedede]"
        />
      </div>

      <div className="mt-8 flex flex-col items-start">
        <span className="text-[14px] leading-[21px] font-normal text-black">
          Save my information for a faster checkout
        </span>
        <p className="text-[12px] leading-[18px] font-normal text-[#707070]">
          By paying, you agree to create a Shop account subject to Shop’s
          <NavLink
            to="https://shop.app/terms-of-service"
            className="underline underline-black"
          >
            Terms and Privacy Policy
          </NavLink>
        </p>
      </div>
      <button
        type="submit"
        className="w-full mt-6 bg-[#0A4719] cursor-pointer p-4 rounded-md text-white text-[14px] leading-[21px] text-center font-semibold"
      >
        Pay now
      </button>
    </form>
  );
}

// ---------- Shop Checkout Component (unchanged) ----------
export function ShopCheckout({ onBack }) {
  const navigate = useNavigate();
  const [shopForm, setShopForm] = useState({
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setShopForm({ ...shopForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Shop order submitted", shopForm);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="w-full mt-6 flex flex-col items-center justify-center gap-2">
      <div className="flex flex-col justify-center items-center gap-1">
        <h2 className="text-[24px] leading-[28px] font-semibold">Sign in</h2>
        <span className="text-[14px] leading-[21px] text-[#707070] font-normal">
          Or Create an account
        </span>
      </div>

      <form onSubmit={handleSubmit} className="w-full mt-4 flex flex-col gap-4">
        <input
          type="email"
          name="email"
          value={shopForm.email}
          onChange={handleChange}
          placeholder="Email address"
          className="w-full border border-[#DEDEDE] p-3 outline-none rounded-md"
          required
        />
        <input
          type="text"
          name="address"
          value={shopForm.address}
          onChange={handleChange}
          placeholder="Shipping address"
          className="w-full border border-[#DEDEDE] p-3 outline-none rounded-md"
          required
        />
        <button
          type="submit"
          className="w-full bg-[#5433EB] text-white py-3 rounded-md font-medium"
        >
          Continue with <span className="font-medium">shop</span>
        </button>
      </form>

      <button
        className="mt-24 capitalize text-[14px] leading-[21px] text-[#356BB2] cursor-pointer"
        onClick={handleBack}
      >
        back
      </button>
    </div>
  );
}

// ---------- Main Checkout Page (right panel now dynamic) ----------
export default function CheckoutDetails() {
  const location = useLocation();
  const initialMode =
    location.state?.defaultMode === "shop" ? "shop" : "default";
  const [mode, setMode] = useState(initialMode);

  // ✅ Get cart data
  const cartItems = useCartStore((state) => state.cart);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);
  const subtotal = getTotalPrice();
  const shipping = subtotal > 0 ? 10.0 : 0;
  const total = subtotal + shipping;

  return (
    <main className="overflow-x-hidden border-t border-[#DEDEDE] bg-white flex flex-col lg:flex-row w-full min-h-screen">
      <Helmet>
        <title>Checkout - shevan.world</title>
      </Helmet>

      {/* LEFT SIDE – exactly as you had */}
      <div className="overflow-x-auto w-full lg:w-1/2 flex flex-col gap-4 ml-0 lg:ml-[300px] p-8">
        <span className="text-center text-[14px] leading-[21px] text-[#707070]">
          Express checkout
        </span>

        <div className="w-full flex items-center gap-4">
          <button
            onClick={() => setMode("shop")}
            className="flex-1 h-12 cursor-pointer text-[20px] font-semibold rounded-md text-white bg-[#390CED] outline-none"
          >
            Shop
          </button>
          <a
            href="https://www.paypal.com"
            target="_blank"
            rel="noreferrer"
            className="flex-1 bg-[#FFC439] rounded-md font-semibold text-black outline-none text-center"
          >
            <img
              src={img2}
              alt="paypal"
              className="w-full h-12 object-center"
            />
          </a>
          <a
            href="https://pay.google.com"
            target="_blank"
            rel="noreferrer"
            className="flex-1 bg-black text-center text-white rounded-md font-semibold"
          >
            <img
              src={img}
              alt="Google pay"
              className="w-full h-12 object-center"
            />
          </a>
        </div>

        {mode === "default" ? (
          <>
            <span className="text-center text-[14px] uppercase leading-[21px] text-[#707070]">
              or
            </span>
            <DefaultCheckoutForm />
          </>
        ) : (
          <ShopCheckout onBack={() => setMode("default")} />
        )}
      </div>

      {/* RIGHT SIDE – NOW DYNAMIC (no code removed, only improved) */}
      <div className="w-full border-l border-[#dedede] lg:w-1/2 bg-[#F5F5F5] p-6 md:p-8 lg:p-12 overflow-y-auto">
        <h2 className="text-[24px] font-semibold mb-4">Order Summary</h2>

        {cartItems.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">Your cart is empty.</p>
            <NavLink
              to="/"
              className="text-[#419338] underline mt-2 inline-block"
            >
              Continue shopping
            </NavLink>
          </div>
        ) : (
          <>
            {/* Cart items with images and prices */}
            <div className="space-y-4 max-h-[400px] overflow-y-auto mb-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 border-b border-[#DEDEDE] pb-3"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-sm">{item.name}</p>
                    <p className="text-xs text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <p className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            {/* Subtotal */}
            <div className="flex justify-between border-b border-[#DEDEDE] py-3">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            {/* Shipping */}
            <div className="flex justify-between border-b border-[#DEDEDE] py-3">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            {/* Total */}
            <div className="flex justify-between pt-4 text-[20px] font-semibold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
