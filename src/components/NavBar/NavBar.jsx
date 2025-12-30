import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import logo from "../../assets/logo.png";
import Dropdown from "../../utility/Dropdown";

const NavBar = () => {
  const { user } = useContext(AuthContext);
  const activeStyle =
    "font-semibold text-2xl text-[#FACC15] border-b-2 border-[#FACC15]";
  const normalStyle = "font-semibold text-xl text-white";
  const links = (
    <div className="flex flex-col space-y-2 lg:flex-row lg:space-x-8 text-lg">
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
      >
        Home
      </NavLink>
      <NavLink
        to={"plants"}
        className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
      >
        Plant
      </NavLink>
      <NavLink
        to={"myProfile"}
        className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
      >
        My Profile
      </NavLink>
    </div>
  );
  return (
    <div>
      <div className="navbar bg-[#15803D] shadow-sm md:p-5 md:px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div>
            <img className="md:w-lg lg:w-1/2" src={logo} alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <Dropdown></Dropdown>
          ) : (
            <Link
              to={"/login"}
              className="btn bg-[#FACC15] border-none text-[#15803D]"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
