// components/Sort.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import useMenuStore from "../../../app/store/useMenuStore";
import useSortStore from "../../../app/store/useSortStore";

export default function Sort() {
  const closeSort = useMenuStore((state) => state.closeSort);
  const toggleSort = useMenuStore((state) => state.toggleSort);
  const isSortOpen = useMenuStore((state) => state.isSortOpen); // ✅ was isOpenSort

  const sortBy = useSortStore((state) => state.sortBy);
  const setSortBy = useSortStore((state) => state.setSortBy);

  const handleSortChange = (value) => {
    setSortBy(value);
    // closeSort(); // uncomment if you want auto-close after selection
  };

  const sortOptions = [
    { value: "default", label: "Default" },
    {value: "best_selling", label: "Best Selling"},
    { value: "price_asc", label: "Price, Low to High" },
    { value: "price_desc", label: "Price, High to Low" },
    { value: "name_asc", label: "Alphabetically, A-Z" },
    { value: "name_desc", label: "Alphabetically, Z-A" },
    { value: "old_to_new", label: "Data, Old To New"},
    { value: "new_to_old", label: "Date, New To Old"}
  ];

  return (
    <section className="relative">
      <div className="flex items-center gap-2">
        <span className="text-[16px] leading-[26px] text-[#030303]">Sort</span>
        <button
          onClick={toggleSort}
          className="cursor-pointer focus:outline-none"
        >
          {isSortOpen ? <FiMinus size={15} /> : <FaPlus size={15} />}
        </button>
      </div>

      <AnimatePresence>
        {isSortOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed right-0 h-auto w-screen
                       flex flex-col bg-white z-[990] px-4 md:px-8 lg:px-12 py-4"
          >
            

            <div className="mt-12 flex flex-col items-end gap-4">
              {sortOptions.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center justify-start gap-3 cursor-pointer 
                  text-[16px] leading-[26px] text-[#030303] hover:text-[#419338] transition-colors"
                >
                  <input
                    type="radio"
                    name="sort"
                    value={option.value}
                    onClick={closeSort}
                    checked={sortBy === option.value}
                    onChange={() => handleSortChange(option.value)}
                    className="w-2.5 h-2.5 appearance-none border border-gray-300 rounded-full
                               checked:bg-[#419338] checked:border-[#419338]
                               focus:outline-none focus:ring-1 focus:ring-[#419338]
                               cursor-pointer transition-all"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
