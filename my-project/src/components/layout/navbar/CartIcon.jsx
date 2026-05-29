import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import useCartStore from "../../../app/store/useCartStore";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import useMenu from "../../../app/store/useMenuStore";
import { IoCloseOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
const CartIcon = () => {
  const navigate = useNavigate();
  const isCartOpen = useMenu((state) => state.isCartOpen);
  const closeCart = useMenu((state) => state.closeCart);
  const toggleCart = useMenu((state) => state.toggleCart);
  const increaseQty = useCartStore((state) => state.increaseQty);
  const decreaseQty = useCartStore((state) => state.decreaseQty);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const cartItems = useCartStore((state) => state.cart);

  return (
    <div className="relative">
      <button
        onClick={toggleCart}
        className="fixed top-1/2 right-10 md:right-20  -translate-y-1/2 cursor-pointer z-[99]"
      >
        <HiOutlineShoppingBag size={20} />
      </button>

      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-0 right-0 h-screen w-[320px] lg:w-[400px] bg-white z-[999]"
          >
            <button
              className="fixed top-4 right-4 cursor-pointer"
              onClick={closeCart}
            >
              <IoCloseOutline size={22} />
            </button>
            <div className="flex flex-col items-start gap-4 p-4 ">
              {cartItems.length === 0 ? (
                <>
                  <p className="font-roboto-serif text-[18px] leading-[26px] text-[#030303]">
                    your cart -0 items
                  </p>
                  <div className="flex flex-col items-start gap-4 mt-14 font-serif">
                    <h3 className="text-[25px] leading-[25px] font-playfair font-normal text-[#030303]">
                      Your Cart{" "}
                    </h3>
                    <span className="text-[16px] leading-[26px] font-roboto-serif text-[#030303]">
                      Your cart is currently empty.
                    </span>
                    <NavLink
                      className="text-[16px] leading-[26px] 
                      font-serif text-[#030303] border-b border-[#030303]
                      hover:text-[#419338] font-roboto-serif hover:border-[#419338] py-1 transition-all duration-150"
                      to="/"
                      onClick={() => {
                        navigate("/");
                        closeCart();
                      }}
                    >
                      Continue shopping
                    </NavLink>
                  </div>
                </>
              ) : (
                <>
                  <p className="font-roboto-serif text-[18px] leading-[26px] text-[#030303]">
                    your cart {cartItems.length} items
                  </p>
                  <div className="flex flex-col items-start gap-4 mt-14 font-serif">
                    <h3 className="text-[25px] font-playfair leading-[25px] font-normal text-[#030303]">
                      Your cart{" "}
                    </h3>
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="w-full flex items-start gap-2"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <div className="flex flex-col gap-1">
                          <span className="text-[16px] leading-[26px] font-normal text-[#030303]">
                            {item.name}
                          </span>
                          <div className="flex items-start gap-3">
                            <button
                              onClick={() => decreaseQty(item.id)}
                              className="cursor-pointer"
                            >
                              <FiMinus size={15} />
                            </button>
                            <span className="-mt-2">{item.quantity}</span>
                            <button
                              onClick={() => increaseQty(item.id)}
                              className="cursor-pointer"
                            >
                              <FaPlus size={15} />
                            </button>
                          </div>
                          <button className="outline-none bg-transparent cursor-pointer"
                           onClick={() => removeFromCart(item.id)}>
                            Remove
        
                          </button>
                        </div>
                        <span className="ml-20">
                          ${getTotalPrice().toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="w-full flex flex-col items-center justify-end gap-3 ">
                    <div className="flex justify-between w-full px-4">
                      <span className="text-[16px] leading-[26px] text-[#030303] font-normal">Subtotal</span>
                      <span className="text-[16px] leading-[26px] text-[#030303] font-normal">${getTotalPrice().toFixed(2)}</span>
                    </div>
                    <p className="text-[16px] leading-[21px] text-[#030303] hover:text-[#419338] transition-all duration-100 font-normal">
                      Taxes and <span className="border-b border-[#030303]">shipping</span> calculated at
                      checkout{" "}
                    </p>
                    <button className="bg-[#419338] cursor-pointer border border-[#030303] bg-[#030303] text-white w-full py-2
                      hover:text-black transition-all duration-150"
                      onClick={() => {
                        navigate("/checkout");
                        closeCart();
                      }}
                     >
                       Check out
                     </button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CartIcon;
