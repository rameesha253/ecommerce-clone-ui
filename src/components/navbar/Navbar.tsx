import React, { useState, useEffect, useRef } from "react";
import {
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingBag,
  FiMenu,
} from "react-icons/fi";
import SideNavbar from "./SideNavbar";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [showNavbar, setShowNavbar] = useState<boolean>(true);
  const [isSideNavOpen, setIsSideNavOpen] = useState<boolean>(false);
  const lastScrollY = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const iconTextColor = isScrolled ? "text-black" : "text-white";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="bg-black text-white h-10 hidden md:block">
          <div className="container-custom h-full flex items-center justify-between text-xs">
            <div className="flex items-center gap-6 font-light">
              <a
                href="#"
                className=" hover:text-gray-300 transition-colors tracking-wider"
              >
                ORDER TRACKING
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors tracking-wider"
              >
                STORE LOCATIONS
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-gray-300 transition-colors">
                INSTAGRAM
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                FACEBOOK
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                YOUTUBE
              </a>
            </div>
          </div>
        </div>

        <nav
          className={`transition-colors duration-300 ${
            isScrolled ? "bg-white shadow-sm" : "bg-transparent"
          }`}
        >
          <div className="container-custom">
            <div className="flex items-center justify-between h-16">
              {/* Menu Icon */}
              <div className="flex items-center gap-4">
                <button
                  className={`p-2 hover:bg-black/5 rounded-md transition-colors ${iconTextColor}`}
                  onClick={() => setIsSideNavOpen(!isSideNavOpen)}
                  aria-label="Toggle side menu"
                >
                  <FiMenu size={24} />
                </button>
                <button
                  className={`p-2 hover:bg-black/5 rounded-full transition-colors ${iconTextColor}`}
                  aria-label="Search"
                >
                  <FiSearch size={20} />
                </button>
              </div>
              {/* Logo */}
              <div className="flex-shrink-0">
                <a href="/" className="block">
                  <p
                    className={`text-2xl font-playfair transition-colors ${iconTextColor}`}
                  >
                    MARIA.B
                  </p>
                </a>
              </div>

              {/* Icons */}
              <div className="flex items-center gap-4">
                <button
                  className={`p-2 hover:bg-black/5 rounded-full transition-colors hidden sm:block ${iconTextColor}`}
                  aria-label="Account"
                >
                  <FiUser size={20} />
                </button>
                <button
                  className={`p-2 hover:bg-black/5 rounded-full transition-colors hidden sm:block relative ${iconTextColor}`}
                  aria-label="Wishlist"
                >
                  <FiHeart size={20} />
                </button>
                <button
                  className={`p-2 hover:bg-black/5 rounded-full transition-colors relative ${iconTextColor}`}
                  aria-label="Cart"
                >
                  <FiShoppingBag size={20} />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Side Navbar */}
      <SideNavbar
        isOpen={isSideNavOpen}
        onClose={() => setIsSideNavOpen(false)}
      />
    </>
  );
};

export default Navbar;
