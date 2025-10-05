import React from "react";
import { NavLink } from "react-router";
import ReactiveButton from "reactive-button";

const Navbar = () => {
  const links = (
    <>
      <NavLink to="/" className="m-2 cursor-pointer text-lg">
        Home
      </NavLink>
      <NavLink to="/about" className="m-2 cursor-pointer text-lg">
        About
      </NavLink>
      <NavLink to="/readList" className="m-2 cursor-pointer text-lg">
        ReadList
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start ">
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
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
          >
            {links}
          </ul>
        </div>
        <a className=" text-xl text-teal-400">Boi Poka</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end space-x-3">
        <ReactiveButton
          rounded
          shadow
          size="large"
          color="teal"
          idleText="Sign In"
        />
        <ReactiveButton
          rounded
          shadow
          size="large"
          color="teal"
          idleText="Sign Up"
        />
      </div>
    </div>
  );
};

export default Navbar;
