import React from "react";
import { Helmet } from "react-helmet-async";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../app/store/useAuthStore";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const { values, handleChange } = useForm({
    email: "",
    password: "",
    userName: "",
    confirmPassword: "", // added separate field
  });

  const login = useAuthStore((state) => state.login);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload

    // Check if passwords match
    if (values.password !== values.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    login(
      {
        email: values.email,
        password: values.password,
        firstName: values.userName, // use userName as firstName
        lastName: "", // or add lastName field if needed
      },
      "fake-token",
    );

    // Navigate to home page after signup
    navigate("/login");
  };

  return (
    <main>
      <Helmet>
        <title>Create Account - shevan.world</title>
      </Helmet>
      <div className="w-full h-auto mx-auto max-w-[400px] flex flex-col justify-center gap-4 px-4">
        <div className="flex flex-col gap-1 w-full mt-10">
          <span className="text-[24px] font-roboto-serif font-semibold text-black">
            Sign up
          </span>
          <div className="flex gap-1">
            <p className="text-[14px] font-roboto-serif text-gray-700">
              Already have an account
            </p>
            <NavLink
              to="/login"
              className="font-roboto-serif text-[14px] text-black underline"
            >
              Log in
            </NavLink>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {" "}
          {/* added form wrapper */}
          <div className="w-full flex flex-col gap-3">
            <div className="flex flex-col gap-1 w-full">
              <label className="text-xs text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full border border-black rounded-md p-2 text-[14px] leading-[21px] text-[#000000]"
              />
            </div>
            <div className="flex flex-col w-full gap-1">
              <label className="text-xs text-gray-600">User Name</label>
              <input
                type="text"
                name="userName"
                value={values.userName}
                onChange={handleChange}
                placeholder="example"
                className="w-full border border-black rounded-md p-2 text-[14px] leading-[21px] text-[#000000]"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="text-xs text-gray-600">Password</label>
              <input
                type="password"
                name="password"
                value={values.password}
                placeholder="••••••••"
                onChange={handleChange}
                className="w-full border border-black rounded-md p-2 text-[14px] leading-[21px] text-[#000000]"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="text-xs text-gray-600">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword" // fixed name
                value={values.confirmPassword}
                placeholder="••••••••"
                onChange={handleChange}
                className="w-full border border-black rounded-md p-2 text-[14px] leading-[21px] text-[#000000]"
              />
            </div>
          </div>
          {/* added submit button */}
          <button
            type="submit"
            className="w-full mt-6 bg-[#4524DB] text-white py-2 rounded-md hover:bg-gray-800 transition"
          >
            Create Account
          </button>
        </form>
      </div>
    </main>
  );
};

export default SignUp;
