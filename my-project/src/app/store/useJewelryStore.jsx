import { create } from "zustand";
import img1 from "../../assets/1d6e8ec1c61ed3cf6b315c5981a59484.jpg";
import img2 from "../../assets/bf2d4084532107022be211c8511720f1.jpg";
import img3 from "../../assets/4ea282decd46ea1ed492fd88a598ae0d.jpg";
import img4 from "../../assets/5e95cbf6c0c65e6e26860a11ac6f71f2.jpg";
import img5 from "../../assets/affe365a46497fd8872578667f6dee8b.jpg";
import img6 from "../../assets/f70399cca90f1017ce5c05f92486e974.jpg";
import img7 from "../../assets/38e3160ee11535d73a60cec52828686c.jpg";
import img8 from "../../assets/7fa464f4f68c36178cdfb1929d30d1a7.jpg";

const useJewelryStore = create((set, get) => ({
  products: [
    {
      id: 1,
      name: "Elegant Gold Necklace",
      type: "Necklace",
      category: "Women",
      material: "Gold",
      price: 120.0,
      image: img1,
    },
    {
      id: 2,
      name: "Diamond Stud Earrings",
      type: "Earrings",
      category: "Women",
      material: "Diamond",
      price: 250.0,
      image: img2,
    },
    {
      id: 3,
      name: "Silver Charm Bracelet",
      type: "Bracelet",
      category: "Women",
      material: "Silver",
      price: 80.0,
      image: img3,
    },
    {
      id: 4,
      name: "Pearl Drop Earrings",
      type: "Earrings",
      category: "Women",
      material: "Pearl",
      price: 150.0,
      image: img4,
    },
    {
      id: 5,
      name: "Rose Gold Ring",
      type: "Ring",
      category: "Women",
      material: "Gold",
      price: 200.0,
      image: img5,
    },
    {
      id: 6,
      name: "Sapphire Pendant",
      type: "Necklace",
      category: "Women",
      material: "Sapphire",
      price: 180.0,
      image: img6,
    },
    {
      id: 7,
      name: "Emerald Cufflinks",
      type: "Cufflinks",
      category: "Men",
      material: "Emerald",
      price: 220.0,
      image: img7,
    },
    {
      id: 8,
      name: "Amethyst Brooch",
      type: "Brooch",
      category: "Women",
      material: "Amethyst",
      price: 90.0,
      image: img8,
    },
  ],

  filters: {
    category: [],
    price: { min: 0, max: 780 },
    type: [],
    material: [],
  },

  setFilters: (newFilters) => set({ filters: newFilters }),

  // add/update/delete remain unchanged
  addProduct: (product) =>
    set((state) => ({ products: [...state.products, product] })),

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
