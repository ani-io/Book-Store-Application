import React, { useEffect } from "react";
import { useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";
import { useCart } from "../context/CartContext";
import Cart from "./Cart";
import viteLogo from "../../public/vite.svg";
import bookCademyLogo from "../assets/BookCademyLogo.svg";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const [authUser, setAuthUser] = useAuth();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const { cart } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const element = document.documentElement;
  const navigate = useNavigate();
  const location = useLocation();
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate("/course", { state: { search } });
    }
  };

  const navItems = (
    <>
      <li>
        <a href="/" className="rounded-full px-4 py-2 hover:bg-softBlue text-primary dark:text-white hover:text-primary dark:hover:text-accent transition-soft">Home</a>
      </li>
      <li>
        <a href="/course" className="rounded-full px-4 py-2 hover:bg-softBlue text-primary dark:text-white hover:text-primary dark:hover:text-accent transition-soft">Course</a>
      </li>
      {/* Cart Nav Item */}
      <li className="flex items-center">
        <button
          className="relative flex items-center justify-center px-3 py-2 rounded-full bg-softBlue dark:bg-slate-700 text-primary dark:text-white hover:bg-primary hover:text-white dark:hover:bg-accent dark:hover:text-slate-900 transition-soft"
          onClick={() => setCartOpen(true)}
          aria-label="Open cart"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 1 0 6 0m-6 0a3 3 0 0 1 6 0m-6 0H5.25a2.25 2.25 0 0 1-2.25-2.25V6.75A2.25 2.25 0 0 1 5.25 4.5h13.5a2.25 2.25 0 0 1 2.25 2.25v5.25a2.25 2.25 0 0 1-2.25 2.25h-1.5m-6 0h6" />
          </svg>
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs rounded-full px-2 py-0.5">{cart.length}</span>
          )}
        </button>
      </li>
    </>
  );
  return (
    <>
      <div
        className={`w-full fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/80 text-primary dark:text-white transition-soft`}
      >
        <div className="navbar max-w-screen-2xl mx-auto md:px-20 px-4 flex items-center justify-between gap-4 py-2">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navItems}
              </ul>
            </div>
            <a href="/" className="flex items-center gap-2 cursor-pointer">
              <img src={bookCademyLogo} alt="BookCademy Logo" className="w-8 h-8" />
              <span className="text-2xl font-bold text-primary dark:text-accent drop-shadow-sm transition-soft">BookCademy</span>
            </a>
          </div>
          <div className="navbar-end space-x-3">
            <div className="navbar-center hidden lg:flex flex-1 justify-center">
              <ul className="menu menu-horizontal px-1 flex items-center gap-2">{navItems}</ul>
            </div>
            <div className="hidden md:block">
              <form onSubmit={handleSearch} className="flex items-center gap-2 bg-transparent px-2 py-1 rounded-md border border-gray-300 dark:border-slate-500 focus-within:border-pink-500 transition w-64">
                <input
                  type="text"
                  className="grow outline-none bg-transparent rounded-md px-1 dark:bg-transparent dark:text-white"
                  placeholder="Search"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
                <button type="submit" className="p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </form>
            </div>
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />

              {/* sun icon */}
              <svg
                className="swap-off fill-current w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on fill-current w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>

            {authUser ? (
              <Logout />
            ) : (
              <div className="">
                <a
                  className="bg-primary text-white px-4 py-2 rounded-full shadow-soft hover:bg-secondary hover:text-white transition-soft cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </a>
                <Login />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Cart Modal */}
      {cartOpen && <Cart onClose={() => setCartOpen(false)} />}
    </>
  );
}

export default Navbar;
