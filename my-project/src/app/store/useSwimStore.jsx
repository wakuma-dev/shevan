import { create } from "zustand";
import img from "../../assets/74a2a099dee84835e54cd3076376ac85.jpg";
import img2 from "../../assets/9644a43c2e1b3cf41f0d883397fe353c.jpg";
import img3 from "../../assets/85d2943994317dccd14cf90ad9549a98.jpg";
import img4 from "../../assets/75914c7996bfb74c5f3219d40ffc53e4.jpg";
import img5 from "../../assets/7ae31811d1584acbfdbbb00a58e0dc9f.jpg";
import img6 from "../../assets/17da2fffacafb6eaef3f3e2121d039ae.jpg";
import img7 from "../../assets/987c4a410a0c97a0f6997e5ff293b2a6.jpg";
import img8 from "../../assets/346359155df1693bf58b977edd4a8b78.jpg";
import img9 from "../../assets/206e4b69fb1ff81e556034ae49716aa3.jpg";
import img10 from "../../assets/9ad04c4fbded49da9a732af89c40cd78.jpg";

const useSwimStore = create((set) => ({
  products: [
    {
      id: 1,
      name: "Mary-Jane Black Micro Bikini Top",
      image: img,
      type: "swimwear",
      price: 85.0,
      soldCount: 120,
      createdAt: "2025-01-15T10:30:00Z",
    },
    {
      id: 2,
      name: "Mary-Jane Black Micro Bikini Thong",
      image: img2,
      type: "thong",
      price: 75.0,
      soldCount: 230,
      createdAt: "2024-04-15T10:30:00Z",
    },
    {
      id: 3,
      name: "Silver Chrome Bikini Thong",
      image: img3,
      type: "thong",
      price: 75.0,
      soldCount: 1000,
      createdAt: "2026-01-15T10:30:00Z",
    },
    {
      id: 4,
      name: "Silver Chrome Bikini Top",
      image: img4,
      type: "swimwear", // fixed typo "swim wear"
      price: 95.0,
      soldCount: 120,
      createdAt: "2026-03-15T10:30:00Z",
    },
    {
      id: 5,
      name: "Golden Chrome Bikini Top",
      image: img5,
      type: "thong",
      price: 70.0,
      soldCount: 140,
      createdAt: "2023-01-15T10:30:00Z",
    },
    {
      id: 6,
      name: "Silver Chrome Tie-Side Bikini",
      image: img6,
      type: "swimwear", // fixed
      price: 75.0,
      soldCount: 340,
      createdAt: "2022-01-15T10:30:00Z",
    },
    {
      id: 7,
      name: "Golden Chrome Bikini Thong",
      image: img7,
      type: "thong",
      price: 75.0,
      soldCount: 380,
      createdAt: "2024-11-15T10:30:00Z",
    },
    {
      id: 8,
      name: "Golden Chrome Tie-Side Bikini",
      image: img8,
      type: "swimwear", // fixed
      price: 75.0,
      soldCount: 120,
      createdAt: "2026-01-15T10:30:00Z",
    },

    {
      id: 9,
      name: "Mushroom Black Bikini Top",
      image: img9,
      type: "swimwear", // fixed
      price: 75.0,
      soldCount: 520,
      createdAt: "2025-01-25T10:30:00Z",
    },
    {
      id: 10,
      name: "Mary-Jane Thong 2 Pack",
      image: img10,
      type: "thong",
      price: 100.0,
      soldCount: 320,
      createdAt: "2026-01-15T10:30:00Z",
    },
  ],
  filters: {
    // renamed from "filter" to "filters"
    type: [],
    price: { min: 0, max: 780 },
  },
  setFilters: (newFilters) => set({ filters: newFilters }), // renamed
  addToCart: (product) =>
    set((state) => ({ cart: [...(state.cart || []), product] })), // fixed cart state
  updateProduct: (id, updated) =>
    set((state) => ({
      products: state.products.map((p) =>
        p.id === id ? { ...p, ...updated } : p,
      ),
    })),
  deleteProduct: (id) =>
    set((state) => ({
      products: state.products.filter((p) => p.id !== id),
    })),
}));

export default useSwimStore;
