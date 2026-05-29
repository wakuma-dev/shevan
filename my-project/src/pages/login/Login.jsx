import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import useForm from "../../hooks/useForm";
import useAuthStore from "../../app/store/useAuthStore";
import { AnimatePresence } from "framer-motion";
import PrivacyModal from "../../components/modals/PrivacyModal";
import { Helmet } from "react-helmet-async";

export default function Login() {
  const navigate = useNavigate();
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const { values, handleChange } = useForm({
    email: "",
    password: "",
  });

  const login = useAuthStore((state) => state.login);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload

    login(
      {
        email: values.email,
        password: values.password,
      },
      "fake-token",
    );

    // Navigate to home page after successful login
    navigate("/");
  };

  return (
    <main>
      <Helmet>
        <title>Sign in - shevan.world</title> {/* fixed typo */}
      </Helmet>
      <div className="w-full mx-auto h-auto flex flex-col justify-center max-w-[400px] px-4 gap-4">
        <div className="flex flex-col gap-1 w-full mt-10">
          <span className="text-[24px] font-roboto-serif font-semibold text-black">
            Sign in
          </span>
          <div className="flex gap-1">
            <p className="text-[14px] font-roboto-serif text-gray-700">
              Sign in or
            </p>
            <NavLink
              to="/signup"
              className="font-roboto-serif text-[14px] text-black underline"
            >
              Create an account
            </NavLink>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                className="border border-black rounded-md p-2 text-[14px] leading-[21px]"
                placeholder="name@example.com"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-600">Password</label>
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                className="border border-black rounded-md p-2 text-sm"
                placeholder="••••••••"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#4524DB] text-white py-2 rounded-md text-sm"
            >
              Continue With Shop
            </button>
          </div>
        </form>

        <button
          type="button"
          onClick={() => setShowPrivacyModal(true)}
          className="mt-28 text-[14px] leading-[21px] cursor-pointer font-normal text-[#00459e] text-center"
        >
          Privacy policy
        </button>

        <AnimatePresence>
          {showPrivacyModal && (
            <PrivacyModal onClose={() => setShowPrivacyModal(false)} />
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
