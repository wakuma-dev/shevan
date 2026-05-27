import { create } from "zustand";

const useMenuStore = create((set) => ({
  isOpen: false,
  isCartOpen: false,

  openMenu: () => set({ isOpen: true }),
  openCart: () => set({ isCartOpen: true }),
  closeMenu: () => set({ isOpen: false }),
  closeCart: () => set({ isCartOpen: false }),
  toggleMenu: () =>
    set((state) => ({
      isOpen: !state.isOpen,
    })),
  toggleCart: () => set((state) => ({
   isCartOpen: !state.isCartOpen,
  })),
}));

export default useMenuStore;
