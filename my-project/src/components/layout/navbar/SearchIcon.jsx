import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CiSearch } from "react-icons/ci";
import SearchModal from "../../modals/SearchModal";

export default function SearchIcon() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setOpenModal(true)}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        className="p-2 cursor-pointer"
      >
        <CiSearch size={20} />
      </motion.button>

      <AnimatePresence>
        {openModal && <SearchModal onClose={() => setOpenModal(false)} />}
      </AnimatePresence>
    </>
  );
}
