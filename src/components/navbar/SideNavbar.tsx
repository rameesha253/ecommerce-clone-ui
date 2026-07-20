import React, { useState } from "react";
import { FiX, FiPlus, FiMinus } from "react-icons/fi";
import { topCategories, categoryData } from "../../data/sidebar";

interface SideNavbarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideNavbar: React.FC<SideNavbarProps> = ({ isOpen, onClose }) => {
  // Active top tab state
  const [activeTab, setActiveTab] = useState<string>("WOMEN");

  // State tracking for accordion menus
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

  const toggleMenu = (menuTitle: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuTitle]: !prev[menuTitle],
    }));
  };

  const currentContent = categoryData[activeTab] || categoryData.WOMEN;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 backdrop-blur-sm transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Side Navbar */}
      <div
        className={`fixed top-0 left-0 w-full sm:w-[600px] h-full bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out flex flex-col font-sans ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header Section */}
        <div className="p-6 pb-3 flex items-center justify-between">
          <p className="text-2xl tracking-[0.2em] text-black uppercase">
            MARIA.B.
          </p>
          <button
            className="p-1 hover:bg-gray-100 rounded-full transition-colors text-gray-700"
            onClick={onClose}
            aria-label="Close side menu"
          >
            <FiX size={22} />
          </button>
        </div>

        {/* Horizontal Category Selector Bar */}
        <div className="px-6 border-b border-gray-200">
          <div className="flex items-center gap-5 overflow-x-auto no-scrollbar py-2.5 text-lg tracking-wide">
            {topCategories.map((cat, idx) => {
              const isActive = activeTab === cat.id;
              return (
                <React.Fragment key={cat.id}>
                  {idx > 0 && <span className="text-black select-none">|</span>}
                  <button
                    onClick={() => setActiveTab(cat.id)}
                    className={`whitespace-nowrap transition-colors uppercase ${
                      cat.isRed
                        ? "text-red-600 font-medium"
                        : isActive
                          ? "text-black font-semibold border-b-2 border-black pb-0.5"
                          : "text-gray-600 hover:text-black"
                    }`}
                  >
                    {cat.label}
                  </button>
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Scrollable Body Content */}
        <div className="flex-1 overflow-y-auto px-6 py-5 custom-scrollbar space-y-6">
          <div>
            {currentContent.sectionTitle && (
              <p className="text-md font-semibold text-red-600 uppercase tracking-widest mb-4">
                {currentContent.sectionTitle}
              </p>
            )}

            <div className="flex flex-col divide-y divide-gray-100">
              {currentContent.items.map((item) => {
                const uniqueKey = `${activeTab}-${item.title}`;
                const isExpanded = !!openMenus[uniqueKey];
                const hasSubOptions =
                  item.subOptions && item.subOptions.length > 0;

                return (
                  <div key={item.title} className="py-2.5">
                    <div
                      className={`flex items-center justify-between cursor-pointer select-none group ${
                        hasSubOptions ? "py-1" : ""
                      }`}
                      onClick={() => hasSubOptions && toggleMenu(uniqueKey)}
                    >
                      <span
                        className={`text-md tracking-wider uppercase transition-colors ${
                          item.isRed
                            ? "text-red-600 font-normal hover:text-red-700"
                            : "text-gray-600 hover:text-black"
                        }`}
                      >
                        {item.title}
                      </span>

                      {hasSubOptions && (
                        <button className="text-gray-600 group-hover:text-black transition-colors">
                          {isExpanded ? (
                            <FiMinus size={15} />
                          ) : (
                            <FiPlus size={15} />
                          )}
                        </button>
                      )}
                    </div>

                    {hasSubOptions && (
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isExpanded
                            ? "max-h-64 opacity-100 mt-2 mb-1"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <ul className="pl-3 space-y-2 text-sm text-gray-500">
                          {item.subOptions?.map((sub, idx) => (
                            <li key={idx}>
                              <a
                                href={`#/${sub.toLowerCase().replace(/\s+/g, "-")}`}
                                className="hover:text-black block py-0.5 transition-colors"
                              >
                                {sub}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Fixed Promo Cards Section */}
          {currentContent.promoCards &&
            currentContent.promoCards.length > 0 && (
              <div className="space-y-4 pt-2 pb-6">
                {currentContent.promoCards.map((promo, idx) => (
                  <div
                    key={idx}
                    className="bg-[#f9f9f9] rounded-md flex gap-4 p-3 cursor-pointer hover:bg-stone-100 transition-colors"
                  >
                    {/* Square image on the left */}
                    <img
                      src={promo.image}
                      alt={promo.subtitle}
                      className="!w-[100px] !h-[100px] object-cover rounded"
                    />

                    {/* Text content */}
                    <div className="flex flex-col justify-center">
                      <h4 className="text-md font-semibold text-red-600 tracking-wide">
                        {promo.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-0.5">
                        {promo.subtitle}
                      </p>
                      <a
                        href="#avail"
                        className="text-sm text-black underline underline-offset-4 mt-1 inline-block hover:text-red-600"
                      >
                        {promo.actionText}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
        </div>
      </div>
    </>
  );
};

export default SideNavbar;
