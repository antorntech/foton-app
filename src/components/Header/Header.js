import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  const showSidebar = () => {
    const sidebar = (document.getElementById("sideDrawer").style =
      "right:-40px;display:block;");
  };

  const hiddenSidebar = () => {
    const sidebar = (document.getElementById("sideDrawer").style =
      "right:-420px;display:none;");
  };
  const myMenu = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li tabindex="0">
        <a class="justify-between">
          Pages
          <svg
            class="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </a>
        <ul class="p-2">
          <li>
            <a>Pages-1</a>
          </li>
          <li>
            <a>Pages-2</a>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/shop">Shop</Link>
      </li>
    </>
  );
  return (
    <div class="navbar bg-base-100 lg:py-5 z-30">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {myMenu}
          </ul>
        </div>
        <a class="text-primary">
          <img src={logo} alt="logo.png" />
        </a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">{myMenu}</ul>
      </div>
      <div class="navbar-end">
        <ul className="endMenu flex">
          <li>
            <div class="indicator">
              <span class="indicator-item badge badge-secondary">0</span>
              <i class="fa-solid fa-cart-shopping "></i>
            </div>
          </li>
          <li>
            <i class="fa-solid fa-magnifying-glass px-8"></i>
          </li>
          <li>
            <i onClick={showSidebar} class="fa-solid fa-bars"></i>
          </li>
        </ul>
        <div id="sideDrawer" className="side-drawer z-40">
          <div className="crossBtn flex justify-end">
            <i onClick={hiddenSidebar} class="fa-solid fa-xmark m-4 p-3"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
