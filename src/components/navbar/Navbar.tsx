import React, { useState, useEffect } from 'react';
import { FiSearch, FiUser, FiHeart, FiShoppingBag, FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { navLinks, topBarLinks } from '../../data/navLinks';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (id: number): void => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className={`bg-black text-white transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden' : 'h-10'}`}>
        <div className="container-custom h-full flex items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            {topBarLinks.map((link, index) => (
              <a
                key={index}
                href={link.path}
                className="hover:text-gray-300 transition-colors tracking-wider"
              >
                {link.title}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <span>PKR</span>
            <span className="cursor-pointer hover:text-gray-300 transition-colors">
              EN
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-12">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="block">
                <p className="text-center font-playfair">MARIA.B</p>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div
                  key={link.id}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(link.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={link.path}
                    className="flex items-center gap-1 text-xs font-medium tracking-widest hover:text-gray-600 transition-colors py-8"
                  >
                    {link.title}
                    <FiChevronDown size={14} className="mt-0.5" />
                  </a>
                  
                  {/* Dropdown */}
                  {activeDropdown === link.id && (
                    <div className="absolute top-full left-0 bg-white shadow-2xl min-w-[250px] py-6 animate-fadeInUp">
                      <div className="space-y-4">
                        <a href="#" className="block px-6 py-2 text-sm hover:bg-gray-50 transition-colors">
                          View All {link.title}
                        </a>
                        <a href="#" className="block px-6 py-2 text-sm hover:bg-gray-50 transition-colors">
                          New Arrivals
                        </a>
                        <a href="#" className="block px-6 py-2 text-sm hover:bg-gray-50 transition-colors">
                          Best Sellers
                        </a>
                        <a href="#" className="block px-6 py-2 text-sm hover:bg-gray-50 transition-colors">
                          Special Price
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center gap-6">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Search">
                <FiSearch size={20} />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden sm:block" aria-label="Account">
                <FiUser size={20} />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden sm:block relative" aria-label="Wishlist">
                <FiHeart size={20} />
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative" aria-label="Cart">
                <FiShoppingBag size={20} />
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  2
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
          <div className="bg-white border-t">
            <div className="container-custom py-4 space-y-4">
              {navLinks.map((link) => (
                <div key={link.id} className="border-b border-gray-100 pb-4">
                  <button
                    className="flex items-center justify-between w-full text-sm font-medium tracking-wider"
                    onClick={() => toggleDropdown(link.id)}
                  >
                    {link.title}
                    <FiChevronDown
                      size={16}
                      className={`transform transition-transform ${activeDropdown === link.id ? 'rotate-180' : ''}`}
                    />
                  </button>
                  
                  {activeDropdown === link.id && (
                    <div className="mt-3 ml-4 space-y-3 animate-fadeInUp">
                      <a href="#" className="block text-sm text-gray-600 hover:text-black transition-colors">
                        View All {link.title}
                      </a>
                      <a href="#" className="block text-sm text-gray-600 hover:text-black transition-colors">
                        New Arrivals
                      </a>
                      <a href="#" className="block text-sm text-gray-600 hover:text-black transition-colors">
                        Best Sellers
                      </a>
                    </div>
                  )}
                </div>
              ))}
              <div className="flex gap-4 pt-4">
                <button className="flex-1 btn-outline text-center text-xs">Sign In</button>
                <button className="flex-1 btn-primary text-center text-xs">Register</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;