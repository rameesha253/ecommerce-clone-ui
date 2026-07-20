import React, { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { collections } from "../../data/collections";
import type { Collection } from "../../types";

const Collections: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % collections.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const current: Collection = collections[currentIndex];

  const variants = {
    enter: { x: "100%" },
    center: { x: 0 },
    exit: { x: "-100%" },
  };

  return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="max-w-[1800px] mx-auto pl-4 lg:pl-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-14">
          <div className="w-full lg:w-[32%] order-2 lg:order-1 mb-12 lg:mb-0">
            <p className="uppercase text-xs tracking-[0.25em] font-semibold text-black mb-4">
              New Arrivals'26
            </p>

            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-black mb-4">
              Shop By Collection
            </h2>

            <p className="text-gray-500 text-lg lg:text-xl leading-8 max-w-md">
              Explore the newest summer arrivals — fresh prints, breezy fabrics,
              and styles made for the season.
            </p>

            <button className="mt-8 border border-gray-200 px-8 py-4 flex items-center gap-3 hover:bg-black hover:text-white duration-500">
              Shop The Look
              <FiArrowRight size={18} />
            </button>

            <div className="flex gap-3 mt-12 mb-22">
              {collections.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-500 rounded-full ${
                    currentIndex === index
                      ? "w-24 h-[4px] bg-black"
                      : "w-10 h-[4px] bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="relative w-full lg:w-[68%] h-[500px] lg:h-[550px] overflow-hidden order-1 lg:order-2">
            <AnimatePresence>
              <motion.img
                key={current.id}
                src={current.image}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;