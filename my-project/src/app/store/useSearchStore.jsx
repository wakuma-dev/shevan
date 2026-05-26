import { create } from "zustand";

const useSearchStore = create((set) => ({
  query: "",
  results: [],
  isLoading: false,


  setQuery: (query) => set({ query }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setResults: (results) => set({ results }),
}));

export default useSearchStore;
