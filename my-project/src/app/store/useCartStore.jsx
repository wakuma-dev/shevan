import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (product) => {
        const currentCart = get().cart;
        const existingItem = currentCart.find((item) => item.id === product.id);

        if (existingItem) {
          set({
            cart: currentCart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: (item.quantity || 1) + 1 }
                : item,
            ),
          });
        } else {
          set({
            cart: [...currentCart, { ...product, quantity: 1 }],
          });
        }
      },
      removeFromCart: (id) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        }));
      },
      increaseQty: (id) => {
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id
              ? { ...item, quantity: (item.quantity || 1) + 1 }
              : item,
          ),
        }));
      },
      decreaseQty: (id) => {
        set((state) => ({
          cart: state.cart
            .map((item) =>
              item.id === id
                ? { ...item, quantity: (item.quantity || 1) - 1 }
                : item,
            )
            .filter((item) => item.quantity > 0),
        }));
      },
      getTotalPrice: () => {
        return get().cart.reduce(
          (sum, item) => sum + (item.quantity || 1) * (item.price || 0),
          0,
        );
      },
    }),
    {
      name: "cart-storage",
    },
  ),
);

export default useCartStore;
