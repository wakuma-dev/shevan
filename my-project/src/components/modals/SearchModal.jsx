import { motion } from "framer-motion";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import useSearchStore from "../../app/store/useSearchStore";
import { createPortal } from "react-dom";
import { useEffect } from "react";

export default function SearchModal({ onClose }) {
  const query = useSearchStore((state) => state.query);
  const setQuery = useSearchStore((state) => state.setQuery);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // The real DOM content – still uses motion for exit
  const modalContent = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-20 left-0 w-screen z-[900] flex items-start justify-center bg-white py-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose(); // close on backdrop click
      }}
    >
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -30, opacity: 0 }}
        className="w-screen bg-white text-black pt-14 px-4 sm:px-8 md:px-12 rounded-lg flex items-center gap-1"
      >
        <CiSearch size={20} className="text-black" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-transparent outline-none text-sm"
          placeholder="Search items..."
          autoFocus
        />
        <IoMdClose
          size={22}
          onClick={onClose}
          className="cursor-pointer text-black"
        />
      </motion.div>
    </motion.div>
  );

  return createPortal(modalContent, document.body);
}
 