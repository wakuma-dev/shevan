import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosClose } from "react-icons/io";
import useMenu from "../../../app/store/useMenuStore";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import useJewelryStore from "../../../app/store/useJewelryStore";

export default function Filter() {
  const filters = useJewelryStore((state) => state.filters);
  const setFilters = useJewelryStore((state) => state.setFilters);

  const [filterOpen, setFilterOpen] = useState(null);
  const closeFilter = useMenu((state) => state.closeFilter);
  const isFilterOpen = useMenu((state) => state.isFilterOpen);
  const toggleFilter = useMenu((state) => state.toggleFilter);

  const toggleSelection = (section) => {
    setFilterOpen((prev) => (prev === section ? null : section));
  };

  const handleCheckbox = (filterType, value) => {
    const currentArray = filters[filterType] || [];
    const alreadyExists = currentArray.includes(value);
    const newArray = alreadyExists
      ? currentArray.filter((item) => item !== value)
      : [...currentArray, value];
    setFilters({
      ...filters,
      [filterType]: newArray,
    });
  };

  return (
    <section className="relative">
      <div className="flex items-center justify-center">
        <button
          onClick={toggleFilter}
          className="cursor-pointer z-[88] text-[16px] leading-[26px]
          text-[#030303] hover:text-[#419338] transition-colors duration-150"
        >
          Filter{" "}
          <span
            className="text-[16px] leading-[26px]
            text-[#030303] hover:text-[#419338] transition-colors duration-150"
          >
            +
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-0 left-0 h-screen w-[320px] md:w-[400px]
            flex flex-col items-start bg-white z-[999] p-4"
          >
            <div className="flex items-center justify-between w-full">
              <span>Filter</span>
              <button
                onClick={closeFilter}
                className="cursor-pointer absolute right-2"
              >
                <IoIosClose size={30} />
              </button>
            </div>

            <div className="flex flex-col items-start w-full mt-10">
              <div className="flex items-center justify-between w-full">
                <h3
                  className="font-serif text-[16px]
                  font-medium leading-[26px] text-[#030303]"
                >
                  Product type
                </h3>

                <button
                  onClick={() => toggleSelection("type")}
                  className="cursor-pointer"
                >
                  {filterOpen === "type" ? (
                    <FiMinus size={15} />
                  ) : (
                    <FaPlus size={15} />
                  )}
                </button>
              </div>

              <AnimatePresence>
                {filterOpen === "type" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="overflow-hidden mt-4 flex flex-col gap-2 w-full"
                  >
                    <label className="flex items-center gap-2 text-black">
                      <input
                        type="checkbox"
                        onClick={closeFilter}
                        checked={(filters.type || []).includes("Ankle Chain")}
                        onChange={() => handleCheckbox("type", "Ankle Chain")}
                      />
                      Ankle Chain
                    </label>

                    <label className="flex items-center gap-2 text-black">
                      <input
                        type="checkbox"
                        onClick={closeFilter}
                        checked={(filters.type || []).includes("Necklace")}
                        onChange={() => handleCheckbox("type", "Necklace")}
                      />
                      Necklace
                    </label>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
