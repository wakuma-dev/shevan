import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { useEffect } from "react";

export default function PrivacyModal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const modalContent = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm py-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative w-full max-w-[470px] max-h-[90vh] overflow-y-scroll bg-white rounded-3xl shadow-xl mx-4"
      >
        {/* Scrollable content wrapper */}
        <div className="overflow-y-auto h-full">
          {/* Close button - now positioned relative to this wrapper */}
          <button
            onClick={onClose}
            className="sticky top-10 cursor-pointer float-right z-10 p-1 mr-4 mt-4"
            aria-label="Close"
          >
            <IoMdClose size={24} className="text-black" />
          </button>

          <div className="p-6 pt-0 clear-both">
            <h2 className="text-[17px] leading-[21px] text-black font-bold mb-2">
              Privacy policy
            </h2>
            <span className="block text-[14px] leading-[21px] text-[#000000] mb-4">
              Last updated: 12/07/2023
            </span>

            {/* rest of your content unchanged */}
            <p className="mb-4 text-[12px] leading-[14px] lg:text-[14px] lg:leading-[21px] text-[#000000] font-normal">
              This Privacy Policy describes how sheytan.world (the "Site", "we",
              "us", or "our") collects, uses, and discloses your personal
              information when you visit, use our services, or make a purchase
              from sheytan.world (the "Site") or otherwise communicate with us
              (collectively, the "Services"). For purposes of this Privacy
              Policy, "you" and "your" means you as the user of the Services,
              whether you are a customer, website visitor, or another individual
              whose information we have collected pursuant to this Privacy
              Policy.
            </p>
            <p className="mb-4  text-[12px] leading-[14px] lg:text-[14px] lg:leading-[21px]  text-[#000000] font-normal">
              Please read this Privacy Policy carefully. By using and accessing
              any of the Services, you agree to the collection, use, and
              disclosure of your information as described in this Privacy
              Policy. If you do not agree to this Privacy Policy, please do not
              use or access any of the Services
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">
              Changes to This Privacy Policy
            </h3>
            <p className="mb-4  text-[12px] leading-[14px] lg:text-[14px] lg:leading-[21px]  text-[#000000] font-normal">
              We may update this Privacy Policy from time to time, including to
              reflect changes to our practices or for other operational, legal,
              or regulatory reasons. We will post the revised Privacy Policy on
              the Site, update the "Last updated" date and take any other steps
              required by applicable law.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">
              How We Collect and Use Your Personal Information
            </h3>
            <p className="mb-4  text-[12px] leading-[14px] lg:text-[14px] lg:leading-[21px]  text-[#000000] font-normal">
              To provide the Services, we collect and have collected over the
              past 12 months personal information about you from a variety of
              sources, as set out below. The information that we collect and use
              varies depending on how you interact with us.
            </p>
            <p className="mb-4  text-[12px] leading-[14px] lg:text-[14px] lg:leading-[21px]  text-[#000000] font-normal">
              In addition to the specific uses set out below, we may use
              information we collect about you to communicate with you, provide
              the Services, comply with any applicable legal obligations,
              enforce any applicable terms of service, and to protect or defend
              the Services, our rights, and the rights of our users or others.
            </p>
            <p className="mb-4  text-[12px] leading-[14px] lg:text-[14px] lg:leading-[21px]  text-[#000000] font-normal">
              Any information we obtain from third parties will be treated in
              accordance with this Privacy Policy. We are not responsible or
              liable for the accuracy of the information provided to us by third
              parties and are not responsible for any third party's policies or
              practices. For more information, see the section below, Third
              Party Websites and Links.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return createPortal(modalContent, document.body);
}
