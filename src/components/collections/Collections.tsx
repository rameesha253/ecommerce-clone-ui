import React, { useState, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import { collections } from "../../data/collections";
import type { Collection } from "../../types";

const Collections: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (direction === "forward") {
        setCurrentIndex((prev) => (prev + 1) % collections.length);
        if (currentIndex === collections.length - 1) {
          setDirection("backward");
        }
      } else {
        setCurrentIndex(
          (prev) => (prev - 1 + collections.length) % collections.length,
        );
        if (currentIndex === 0) {
          setDirection("forward");
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, direction, collections.length]);

  // Reset direction when manually changing index
  useEffect(() => {
    if (currentIndex === 0) setDirection("forward");
    if (currentIndex === collections.length - 1) setDirection("backward");
  }, [currentIndex, collections.length]);

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
                <p className="font-playfair text-3xl md:text-4xl lg:text-5xl text-center text-black tracking-wide pb-8">
            Shop By Collection
          </p>

      <div className="container-custom px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Section: Text and Animations */}
          <div className="w-full lg:w-1/3 space-y-6">
            <div className="flex items-center gap-2 text-sm text-gray-500 uppercase tracking-wider">
              <div className="h-px w-6 bg-gray-300" />
              <div>{"New Arrivals"}</div>
              <div className="h-px w-6 bg-gray-300" />
            </div>
          
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Explore the new summer arrivals-fresh prints,breezy fabrics, and
              styles made for the season{" "}
            </p>

            <p className="inline-flex items-center gap-2 bg-gray-100 text-black px-6 py-3 hover:bg-black hover:text-white transition-all duration-300 text-sm tracking-wider uppercase rounded-sm">
              Shop The Look
              <FiArrowRight />
            </p>

            {/* Slider Indicators */}
            <div className="flex items-center gap-2 pt-4">
              {collections.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setDirection(index > currentIndex ? "forward" : "backward");
                  }}
                  className={`h-0.5 w-6 transition-all duration-300 ${
                    index === currentIndex ? "bg-black" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Section: Image Slider */}
          <div className="w-full lg:w-2/3 relative overflow-hidden">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {collections.map((collection: Collection) => (
                <div key={collection.id} className="w-full flex-shrink-0">
                  <img
                    src={collection.image}
                    className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
