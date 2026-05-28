import { create } from "zustand";

const useMenuStore = create((set) => ({
  isOpen: false,
  isCartOpen: false,
  isFilterOpen: false,
  openMenu: () => set({ isOpen: true }),
  openCart: () => set({ isCartOpen: true }),
  openFilter: () => set({ isFilterOpen: true }),
  closeFilter: () => set({ isFilterOpen: false }),
  closeMenu: () => set({ isOpen: false }),
  closeCart: () => set({ isCartOpen: false }),
  toggleMenu: () =>
    set((state) => ({
      isOpen: !state.isOpen,
    })),
  toggleCart: () => set((state) => ({
   isCartOpen: !state.isCartOpen,
  })),
  toggleFilter: () => set((state) => ({
    isFilterOpen: !state.isFilterOpen,
  })),
}));

export default useMenuStore;
