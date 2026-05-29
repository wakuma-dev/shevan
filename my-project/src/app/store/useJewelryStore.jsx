import { create } from "zustand";
import img1 from "../../assets/1d6e8ec1c61ed3cf6b315c5981a59484.jpg";
import img2 from "../../assets/bf2d4084532107022be211c8511720f1.jpg";
import img3 from "../../assets/4ea282decd46ea1ed492fd88a598ae0d.jpg";
import img4 from "../../assets/5e95cbf6c0c65e6e26860a11ac6f71f2.jpg";
import img5 from "../../assets/affe365a46497fd8872578667f6dee8b.jpg";
import img6 from "../../assets/f70399cca90f1017ce5c05f92486e974.jpg";
import img7 from "../../assets/38e3160ee11535d73a60cec52828686c.jpg";
import img8 from "../../assets/7fa464f4f68c36178cdfb1929d30d1a7.jpg";
import img9 from "../../assets/452e0b310fa02c99ebffc2a0e82205e2.jpg";
import img10 from "../../assets/26195b66ce0dd3b6c8487a0eaf7a301c.jpg";
import img11 from "../../assets/0fae9d6a0c1117b8202a903afa18f322.jpg";
import img12 from "../../assets/c0d7e0f4bc9143e21ac3e66d591cf552.jpg";
import img13 from "../../assets/d2a7816649ab3aa56b5173e208374fa7.jpg";
import img14 from "../../assets/8a05b2ae6a3c60d0afeab43f5b659db2.jpg";
import img15 from "../../assets/98427a8540e3390848946bc4338a904d.jpg";
import img16 from "../../assets/be582a8200a11fdcad2a179c7bb90d66.jpg";
import img17 from "../../assets/60376dc181b6595b4d9e2987aaf23c72.jpg";
import img18 from "../../assets/a3fa1076740f20ed844a8b4d4d8126d9.jpg";
import img19 from "../../assets/3be4d3457a225f8a16925776ad536d4c.jpg";
import img20 from "../../assets/9e0c22039747c5a37fe4ac4f2c49384a.jpg";
const useJewelryStore = create((set, get) => ({
  products: [
    {
      id: 1,
      name: "Elegant Gold Necklace",
      type: "Necklace",
      category: "Women",
      material: "Gold",
      price: 120.0,
      image: img17,
      soldCount: 40,
      createdAt: "2024-01-15T10:30:00Z",
    },
    {
      id: 2,
      name: "Diamond Stud Earrings",
      type: "Earrings",
      category: "Women",
      material: "Diamond",
      price: 250.0,
      image: img2,
      soldCount: 100,
      createdAt: "2026-03-15T10:30:00Z",
    },
    {
      id: 3,
      name: "Silver Charm Bracelet",
      type: "Bracelet",
      category: "Women",
      material: "Silver",
      price: 80.0,
      image: img3,
      soldCount: 20,
      createdAt: "2022-08-15T10:30:00Z",
    },
    {
      id: 4,
      name: "Pearl Drop Earrings",
      type: "Earrings",
      category: "Women",
      material: "Pearl",
      price: 150.0,
      image: img4,
      soldCount: 130,
      createdAt: "2024-08-15T10:30:00Z",
    },
    {
      id: 5,
      name: "Rose Gold Ring",
      type: "Ring",
      category: "Women",
      material: "Gold",
      price: 200.0,
      image: img5,
      soldCount: 80,
      createdAt: "2026-03-24T11:30:00Z",
    },
    {
      id: 6,
      name: "Sapphire Pendant",
      type: "Necklace",
      category: "Women",
      material: "Sapphire",
      price: 180.0,
      image: img18,
      soldCount: 70,
      createdAt: "2025-01-15T10:30:00Z",
    },
    {
      id: 7,
      name: "Emerald Cufflinks",
      type: "Cufflinks",
      category: "Men",
      material: "Emerald",
      price: 220.0,
      image: img7,
      soldCount: 60,
      createdAt: "2023-01-25T12:30:00Z",
    },
    {
      id: 8,
      name: "Amethyst Brooch",
      type: "Brooch",
      category: "Women",
      material: "Amethyst",
      price: 90.0,
      image: img8,
      soldCount: 60,
      createdAt: "2025-04-15T10:50:00Z",
    },
    {
      id: 9,
      name: "Vernita Anklet",
      type: "Ankle Chain",
      category: "women",
      material: "gold",
      price: 100.0,
      image: img9,
      soldCount: 20,
      createdAt: "2021-01-15T10:30:00Z",
    },
    {
      id: 10,
      name: "Clarice Crystal Tennis Anklet",
      type: "Ankle Chain",
      category: "women",
      material: "gold",
      price: 120,
      image: img10,
      soldCount: 200,
      createdAt: "2025-03-25T03:30:00Z",
    },
    {
      id: 11,
      name: "Minimal Gold Anklet",
      type: "Ankle Chain",
      category: "women",
      material: "gold",
      price: 140,
      image: img11,
      soldCount: 300,
      createdAt: "2025-01-15T10:30:00Z",
    },
    {
      id: 12,
      name: "Vernita Crystal Bra Chain",
      type: "Body Chain",
      category: "women",
      material: "gold",
      price: 250.0,
      image: img12,
      soldCount: 800,
      createdAt: "2022-01-15T10:30:00Z",
    },
    {
      id: 13,
      name: "Anais Diamond Body",
      type: "Body Chain",
      category: "women",
      material: "gold",
      price: 340.0,
      image: img13,
      soldCount: 380,
      createdAt: "2023-09-15T10:30:00Z",
    },
    {
      id: 14,
      name: " Emerald Gold Waist Chain",
      type: "Body Chain",
      category: "women",
      material: "gold",
      price: 380.0,
      image: img14,
      soldCount: 440,
      createdAt: "2026-03-15T10:30:00Z",
    },
    {
      id: 15,
      name: "Severine Hand Lariat",
      type: "Hand Chain",
      category: "women",
      material: "gold",
      price: 270.0,
      image: img15,
      soldCount: 450,
      createdAt: "2025-11-05T10:30:00Z",
    },
    {
      id: 16,
      name: "The Girl 'Shevan' Hand Lariat ",
      type: "Hand Chain",
      category: "women",
      material: "gold",
      price: 240.0,
      image: img16,
      soldCount: 230,
      createdAt: "2023-11-15T10:30:00Z",
    },
    {
      id: 17,
      name: "The Girl 'Shevan' Waist Chain",
      type: "Waist Chain",
      category: "Women",
      material: "gold",
      price: 270.0,
      image: img19,
      soldCount: 230,
      createdAt: "2022-11-15T10:30:00Z",
    },
    {
      id: 18,
      name: "Severine Waist Chain",
      type: "Waist Chain",
      category: "women",
      material: "gold",
      price: 290.0,
      image: img20,
      soldCount: 120,
      createdAt: "2025-01-15T10:30:00Z",
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
