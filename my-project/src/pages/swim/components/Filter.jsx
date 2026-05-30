import React, { useState, useEffect, useRef } from "react";
import { FaPlus } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { FiMinus } from "react-icons/fi";
import useMenuStore from "../../../app/store/useMenuStore";
import { IoIosClose } from "react-icons/io";
import useSwimStore from "../../../app/store/useSwimStore";

export default function Filter() {
  const filters = useSwimStore((state) => state.filters);
  const setFilters = useSwimStore((state) => state.setFilters);
  const [openSections, setOpenSections] = useState([]);
  const closeFilter = useMenuStore((state) => state.closeFilter);
  const isFilterOpen = useMenuStore((state) => state.isFilterOpen);
  const toggleFilter = useMenuStore((state) => state.toggleFilter);

  const [minPrice, setMinPrice] = useState(filters.price?.min ?? "");
  const [maxPrice, setMaxPrice] = useState(filters.price?.max ?? "");

  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    if (isFilterOpen && !openSections.includes("type")) {
      setOpenSections((prev) => [...prev, "type"]);
    }
  }, [isFilterOpen, openSections]);

  useEffect(() => {
    setMinPrice(filters.price?.min ?? "");
    setMaxPrice(filters.price?.max ?? "");
  }, [filters.price?.min, filters.price?.max]);

  const toggleSection = (section) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section],
    );
  };

  const handleCheckbox = (filterType, value) => {
    const currentArray = filters[filterType] || [];
    const alreadyExists = currentArray.includes(value);
    const newArray = alreadyExists
      ? currentArray.filter((item) => item !== value)
      : [...currentArray, value];
    setFilters({ ...filters, [filterType]: newArray });

    // Auto‑close after 2 seconds
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      closeFilter();
    }, 2000);
  };

  const handleMinPriceChange = (e) => {
    const value = e.target.value;
    setMinPrice(value);
    setFilters({
      ...filters,
      price: {
        min: value === "" ? 0 : Number(value),
        max: filters.price?.max ?? 780,
      },
    });

    // Auto‑close after 2 seconds
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      closeFilter();
    }, 2000);
  };

  const handleMaxPriceChange = (e) => {
    const value = e.target.value;
    setMaxPrice(value);
    setFilters({
      ...filters,
      price: {
        min: filters.price?.min ?? 0,
        max: value === "" ? 780 : Number(value),
      },
    });

    // Auto‑close after 2 seconds
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      closeFilter();
    }, 2000);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  return (
    <section className="relative">
      <div className="flex items-center gap-2">
        <span
          className="text-[16px] leading-[26px] font-roboto-serif text-[#030303] hover:text-[#419338]
                transition-colors duration-150"
        >
          Filter
        </span>
        <button
          onClick={toggleFilter}
          className="cursor-pointer z-[88] text-[16px] leading-[26px]
                 text-[#030303] hover:text-[#419338] transition-colors duration-150"
        >
          <FaPlus size={13} />
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
              <span className="font-roboto-serif text-[16px] leading-[26px] text-[#030303]">
                Filter
              </span>
              <button
                onClick={closeFilter}
                className="cursor-pointer absolute right-2"
              >
                <IoIosClose size={30} />
              </button>
            </div>
            <div className="flex flex-col items-start w-full mt-10">
              <div className="w-full">
                <div className="flex items-center justify-between w-full">
                  <h3 className="text-[16px] leading-[26px] text-[#030303] font-medium font-roboto-serif">
                    Product type
                  </h3>
                  <button
                    onClick={() => toggleSection("type")}
                    className="cursor-pointer"
                  >
                    {openSections.includes("type") ? (
                      <FiMinus size={15} />
                    ) : (
                      <FaPlus size={15} />
                    )}
                  </button>
                </div>
                <AnimatePresence>
                  {openSections.includes("type") && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="overflow-x-hidden w-full flex flex-col gap-2 mt-4"
                    >
                      {["swimwear", "thong"].map((type) => (
                        <label
                          key={type}
                          className="flex items-center gap-2 text-[16px] leading-[26px]
                                      text-[#030303] font-normal hover:text-[#419339] transition-colors
                                      duration-150"
                        >
                          <input
                            type="checkbox"
                            checked={(filters.type || []).includes(type)}
                            onChange={() => handleCheckbox("type", type)}
                            className="w-2.5 h-2.5 outline-none appearance-none border border-gray-300 
                               rounded-full checked:bg-[#419338] checked:border-[#419338]
                               hover:checked:bg-[#2e6b28] cursor-pointer transition-all duration-150"
                          />
                          <span
                            className={
                              (filters.type || []).includes(type)
                                ? "line-through"
                                : ""
                            }
                          >
                            {type}
                          </span>
                        </label>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="w-full mt-6">
                <div className="flex items-center justify-between w-full">
                  <h3 className="font-roboto-serif capitalize text-[16px] font-medium leading-[26px] text-[#030303]">
                    price
                  </h3>
                  <button
                    onClick={() => toggleSection("price")}
                    className="cursor-pointer"
                  >
                    {openSections.includes("price") ? (
                      <FiMinus size={15} />
                    ) : (
                      <FaPlus size={15} />
                    )}
                  </button>
                </div>
                <AnimatePresence>
                  {openSections.includes("price") && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="overflow-x-hidden w-full mt-4"
                    >
                      <div className="flex items-center justify-between gap-6 w-full">
                        <div className="flex flex-col items-start gap-2 flex-1">
                          <span>From</span>
                          <div className="flex items-center gap-1 border border-black w-full">
                            <span className="px-2">$</span>
                            <input
                              type="text"
                              value={minPrice}
                              onChange={handleMinPriceChange}
                              placeholder="0"
                              className="w-full py-2.5 placeholder:text-black outline-none"
                            />
                          </div>
                        </div>
                        <div className="flex items-center justify-center">
                          <FiMinus size={22} />
                        </div>
                        <div className="flex flex-col items-start gap-2 flex-1">
                          <span>To</span>
                          <div className="flex items-center gap-1 border border-black w-full">
                            <span className="px-2">$</span>
                            <input
                              type="text"
                              value={maxPrice}
                              onChange={handleMaxPriceChange}
                              placeholder="780"
                              className="w-full py-2.5 placeholder:text-black outline-none"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
