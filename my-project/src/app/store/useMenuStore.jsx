// app/store/useMenuStore.js
import { create } from "zustand";

const useMenuStore = create((set) => ({
  isOpen: false,
  isCartOpen: false,
  isFilterOpen: false,
  isSortOpen: false, // ✅ consistent naming
  openMenu: () => set({ isOpen: true }),
  openCart: () => set({ isCartOpen: true }),
  openSort: () => set({ isSortOpen: true }),
  openFilter: () => set({ isFilterOpen: true }),
  closeFilter: () => set({ isFilterOpen: false }),
  closeSort: () => set({ isSortOpen: false }), // ✅ fixed
  closeMenu: () => set({ isOpen: false }),
  closeCart: () => set({ isCartOpen: false }),
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  toggleFilter: () => set((state) => ({ isFilterOpen: !state.isFilterOpen })),
  toggleSort: () => set((state) => ({ isSortOpen: !state.isSortOpen })),
}));

export default useMenuStore;
