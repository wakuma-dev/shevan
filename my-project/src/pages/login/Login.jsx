import React from "react";
import useForm from "../../hooks/useForm";
import { NavLink } from "react-router-dom";
import useAuthStore from "../../app/store/useAuthStore";

export default function Login() {
  const { values, handleChange } = useForm({
    email: "",
    password: "",
  });
  // values.email, values.password work
  // handleChange works with <input name="email" ... />

  const login = useAuthStore((state) => state.login);

  const handleSubmit = () => {
    login(
      {
        email: values.email,
        password: values.password,
      },
      "fake-token",
    );
  };

  return (
    <div className="w-full mx-auto h-auto flex flex-col justify-center max-w-[400px] px-4 gap-4">
      <div className="flex flex-col gap-1 w-full mt-10">
        <span className="text-[24px] font-semibold text-black">Sign in</span>

        <div className="flex gap-1">
          <p className="text-[14px] text-gray-700">Sign in or</p>
          <NavLink to="/signup" className="text-[14px] text-black underline">
            create an account
          </NavLink>
        </div>
      </div>

      <div className="flex flex-col gap-3 w-full">
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="border border-black rounded-md p-2 text-sm"
            placeholder="name@example.com"
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
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-black text-white py-2 rounded-md text-sm hover:bg-gray-800"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
