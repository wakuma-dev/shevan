import React from "react";
import useCartStore from "../../app/store/useCartStore";
import useJewelryStore from "../../app/store/useJewelryStore";
import { Link, useParams } from "react-router-dom";
import useMenuStore from "../../app/store/useMenuStore";
export default function ProductDetails() {
  const { id } = useParams();
  const openCart = useMenuStore((state) => state.openCart);
  const product = useJewelryStore((state) =>
    state.products.find((p) => p.id === Number(id)),
  );

  const addToCart = useCartStore((state) => state.addToCart);

  if (!product) {
    return <p className="p-10">Product not found</p>;
  }

  return (
    <div className="w-full bg-white pt-10 px-4 md:px-8 lg:px-12 flex flex-col lg:flex-row gap-6">
      <div className="w-full lg:w-1/2">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[500px] object-cover"
        />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <h3>{product.name}</h3>
          <p className="text-[24px] font-bold">${product.price.toFixed(2)}</p>
          <span>Shipping calculated at checkout.</span>
        </div>

        <div className="flex flex-col gap-1">
          <button
            className="w-full text-[16px] leading-[26px] bg-white cursor-pointer py-2 border border-[#419338] text-[#419338]"
            onClick={() => {
                addToCart(product); 
                openCart();
                }}>
            Add to cart
          </button>
          <button className="w-full text-[16px] leading-[26px] bg-[#4524DB] cursor-pointer py-2 text-white">
            buy with <span className="font-bold">SHOP</span>
          </button>
          <Link
            to="/payment"
            className="w-full mt-2 text-[16px] leading-[26px]text-[#030303]  text-center"
          >
            More Payment Options
          </Link>
        </div>
        <ul className="flex flex-col items-start ml-10 gap-2 text-[16px] leading-[26px] text-[#030303]">
          <li>High reflection, minimal tan lines </li>
          <li>Printed Silver chrome stretch lycra</li>
          <li>Store secrets & contraband in reusable tin </li>
          <li>80% Nylon, 20% Spandex </li>
          <li>Made in the UK</li>
        </ul>
      </div>
    </div>
  );
}
