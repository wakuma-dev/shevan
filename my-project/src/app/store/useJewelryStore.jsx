import { create } from "zustand";

import img1 from "../../assets/1d6e8ec1c61ed3cf6b315c5981a59484.jpg";
import img2 from "../../assets/bf2d4084532107022be211c8511720f1.jpg";
import img3 from "../../assets/4ea282decd46ea1ed492fd88a598ae0d.jpg";
import img4 from "../../assets/5e95cbf6c0c65e6e26860a11ac6f71f2.jpg";

const useJewelryStore = create((set) => ({
  products: [
    { id: 1, name: "Elegant Gold Necklace", price: 120.0, image: img1 },
    { id: 2, name: "Diamond Stud Earrings", price: 250.0, image: img2 },
    { id: 3, name: "Silver Charm Bracelet", price: 80.0, image: img3 },
    { id: 4, name: "Pearl Drop Earrings", price: 150.0, image: img4 },
  ],

  addProduct: (product) =>
    set((state) => ({
      products: [...state.products, product],
    })),

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

export default useJewelryStore;
