import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {

    const menuItems = (
        <>
          <li className=' text-balck font-bold hover:text-secondary hover:font-bold hover:border border-primary rounded-lg'>
            <Link to={"/"}>Home</Link>
          </li>
          <li className='text-balck font-bold hover:text-secondary hover:font-bold hover:border border-secondary rounded-lg'>
            <Link to={"/projects"}>Projects</Link>
          </li>
          <li className='text-balck font-bold hover:text-secondary hover:font-bold hover:border border-secondary rounded-lg'>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </>
      );

  return (
    <div className="">
      <div className="navbar bg-accent px-5 md:px-28">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content f-style mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to={'/'} className="text-2xl font-bold f-style">SADEK.</Link>
        </div>
        <div className="navbar-end hidden lg:flex ">
          <ul className="menu menu-horizontal p-0 f-style">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
