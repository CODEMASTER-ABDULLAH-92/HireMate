import React, { useRef, useState } from "react";
import { data } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const [showBurger, setShowBurger] = useState(false);
  const containerRef = useRef();
  const underlineRef1 = useRef();
  const underlineRef2 = useRef();
  const underlineRef3 = useRef();
  const text1 = "Jobs";
  const text2 = "Hire Dev";
  const text3 = "Academy";

  // Animate navbar links on mount
  useGSAP(() => {
    gsap.fromTo(
      ".animate_nav",
      { y: -10, opacity: 0 },
      { y: 3, opacity: 1, duration: 2, stagger: 0.2 }
    );
  });

  // Animate underline on hover for individual refs
  const handleMouseEnter = ({ ref, length }) => {
    gsap.to(ref.current, {
      width: `${length * 7}px`,
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (ref) => {
    gsap.to(ref.current, {
      width: 0,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
    });
  };

  return (
    <div>
      <header className="max-w-[1440px] mx-auto px-6">
        {/* Desktop Navbar */}
        <div className="hidden sm:flex justify-between items-center py-10">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={data.Icon}
              className="h-6 w-6 hover:rotate-180 duration-1000"
              alt="Logo"
            />
            <p className="text-3xl">HireMate.</p>
          </Link>

          {/* Navigation Links */}
          <nav>
            <ul className="flex gap-3 text-xl " ref={containerRef}>
              <li
                className="animate_nav relative cursor-pointer"
                onMouseEnter={() => handleMouseEnter({ ref: underlineRef1, length: text1.length })}
                onMouseLeave={() => handleMouseLeave(underlineRef1)}
              >
                <NavLink to="/jobs">{text1}</NavLink>
                <div
                  ref={underlineRef1}
                  className="absolute left-0 -bottom-1 h-[3px] bg-black opacity-0"
                  style={{ width: 0 }}
                ></div>
              </li>
              <li
                className="animate_nav relative cursor-pointer"
                onMouseEnter={() => handleMouseEnter({ ref: underlineRef2, length: text2.length })}
                onMouseLeave={() => handleMouseLeave(underlineRef2)}
              >
                <NavLink to="/hire-dev">{text2}</NavLink>
                <div
                  ref={underlineRef2}
                  className="absolute left-0 -bottom-1 h-[3px] bg-black opacity-0"
                  style={{ width: 0 }}
                ></div>
              </li>
              <li
                className="animate_nav relative cursor-pointer"
                onMouseEnter={() => handleMouseEnter({ ref: underlineRef3, length: text3.length })}
                onMouseLeave={() => handleMouseLeave(underlineRef3)}
              >
                <div className="absolute -top-6 animate-bounce bg-[#B9FF66] px-2 py-1 rounded-md text-sm right-0">
                  New!
                </div>
                <NavLink to="/hireMate-academy-code365">{text3}</NavLink>
                <div
                  ref={underlineRef3}
                  className="absolute left-0 -bottom-1 h-[3px] bg-black opacity-0"
                  style={{ width: 0 }}
                ></div>
              </li>
            </ul>
          </nav>

          {/* Login Dropdown */}
          <div className="relative group">
            <button className="px-5 py-3 border border-gray-700 rounded-lg flex items-center gap-2 font-semibold">
              Login <ChevronDown size={20} />
            </button>
            <div className="absolute top-14 w-[150px] bg-white shadow-md rounded-md hidden group-hover:block z-10">
              <ul className="py-2">
                <NavLink
                  to="/login"
                  className="block px-5 py-2 hover:bg-gray-100"
                >
                  User Login
                </NavLink>
                <NavLink
                  to="/admin-login"
                  className="block px-5 py-2 hover:bg-gray-100"
                >
                  Admin Login
                </NavLink>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="sm:hidden flex justify-between items-center py-5">
          <Link to="/" className="flex items-center gap-2">
            <img src={data.Icon} className="h-6 w-6" alt="Logo" />
            <p className="text-2xl">HireMate.</p>
          </Link>
          <div
            onClick={() => setShowBurger(!showBurger)}
            className="flex flex-col justify-center items-center space-y-1 cursor-pointer z-50"
          >
            <div
              className={`h-[3px] bg-black w-8 rounded transition-all duration-500 ${
                showBurger ? "rotate-45 translate-y-[6px]" : ""
              }`}
            ></div>
            <div
              className={`h-[3px] bg-black w-8 rounded transition-all duration-500 ${
                showBurger ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`h-[3px] bg-black w-8 rounded transition-all duration-500 ${
                showBurger ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            ></div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`sm:hidden transition-all duration-500 ease-in-out ${
            showBurger ? "block" : "hidden"
          }`}
        >
          <nav className="bg-white py-10 rounded-lg h-screen overflow-clip absolute top-12  left-0 w-full">
            <ul className="flex flex-col items-center gap-6 text-xl ">
              <NavLink to="/hireMate-academy-code365" onClick={() => setShowBurger(false)}>
                {text1}
              </NavLink>
              <NavLink to="/hire-dev" onClick={() => setShowBurger(false)}>
                {text2}
              </NavLink>
              <NavLink to="#" onClick={() => setShowBurger(false)}>
                {text3}
              </NavLink>
              <NavLink to="/user-login" onClick={() => setShowBurger(false)}>
                User Login
              </NavLink>
              <NavLink to="/admin-login" onClick={() => setShowBurger(false)}>
                Admin Login
              </NavLink>
            </ul>
          </nav>

        </div>
      </header>
    </div>
  );
};

export default Navbar;
