// app/store/useSortStore.js
import { create } from "zustand";

const useSortStore = create((set) => ({
  sortBy: "default",
  setSortBy: (sortBy) => set({ sortBy }),
}));

export default useSortStore;
