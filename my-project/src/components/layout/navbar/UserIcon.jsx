import React from "react";
import { NavLink } from "react-router-dom";
import { CiUser } from "react-icons/ci";
export default function UserIcon() {
    return (
      <NavLink to="/login">
        <CiUser size={20} />
      </NavLink>
    );
}