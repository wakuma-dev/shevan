import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import useSwimStore from "../../app/store/useSwimStore";
import useCartStore from "../../app/store/useCartStore";
import useMenuStore from "../../app/store/useMenuStore";

export default function SwimProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const openCart = useMenuStore((state) => state.openCart); // ✅ fixed: openCart is from menu store
  const product = useSwimStore(
    (state) => state.products?.find((p) => p.id === Number(id)), // ✅ fixed: state.products (plural)
  );
  const addToCart = useCartStore((state) => state.addToCart);

  const handleShopCheckout = () => {
    navigate("/payment", { state: { defaultMode: "shop" } });
  };

  // ✅ fixed: return the "not found" message
  if (!product) {
    return <p className="p-10">Product not found</p>;
  }

  return (
    <section className="pt-10 bg-white w-full px-4 md:px-8 lg:px-12 flex flex-col lg:flex-row gap-6">
      <div className="w-full lg:w-1/2">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[500px] object-cover"
        />
      </div>
      <div className="flex flex-col gap-8 w-full lg:w-1/2">
        <div className="flex flex-col gap-1">
          <h3 className="text-[25px] leading-[25px] text-[#030303] font-playfair">
            {product.name}
          </h3>
          <p className="text-[20px] leading-[20px] text-[#030303] font-roboto-serif">
            ${product.price.toFixed(2)} {/* ✅ added $ sign */}
          </p>
          <span className="text-[13px] leading-[20px] text-[#030303] font-roboto-serif">
            Shipping calculated at checkout.
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <button
            className="w-full text-[18px] leading-[26px] font-playfair bg-white cursor-pointer py-2 border text-[#030303] border-[#030303] hover:border-[#419338] hover:text-[#419338] transition-all duration-150"
            onClick={() => {
              addToCart(product);
              openCart();
            }}
          >
            Add to cart
          </button>
          <button
            className="w-full text-[16px] leading-[26px] bg-[#4524DB] cursor-pointer py-2 text-white"
            onClick={handleShopCheckout}
          >
            buy with <span className="font-bold">SHOP</span>
          </button>
          <Link
            to="/payment"
            className="w-full mt-2 text-[16px] leading-[26px] text-[#030303] text-center"
          >
            More Payment Options
          </Link>
        </div>
        <ul className="flex flex-col items-start ml-10 gap-2 text-[16px] font-roboto-serif leading-[26px] text-[#030303]">
          <li>High reflection, minimal tan lines</li>
          <li>Printed Silver chrome stretch lycra</li>
          <li>Store secrets & contraband in reusable tin</li>
          <li>80% Nylon, 20% Spandex</li>
          <li>Made in the UK</li>
        </ul>
      </div>
    </section>
  );
}
