import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiArrowLeft, FiArrowRight, FiHeart } from "react-icons/fi";
import { categoryProducts, categories } from "../data/categoryProducts";
import type { CategoryProduct } from "../data/categoryProducts";

const MostTrending: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("New Arrivals");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const products: CategoryProduct[] = categoryProducts[activeCategory] || [];

  return (
    <section className="bg-white py-8 md:py-16 lg:py-20 overflow-hidden">
      {/* Custom Scoped CSS for Sleek Minimal Scrollbar */}
      <style>{`
        .most-trending-swiper .swiper-scrollbar {
          height: 3px !important;
          background: #e5e7eb !important;
          border-radius: 9999px !important;
          bottom: 0px !important;
          left: 0 !important;
          width: 100% !important;
        }
        .most-trending-swiper .swiper-scrollbar-drag {
          background: #000000 !important;
          border-radius: 9999px !important;
        }

        .most-trending-tabs {
          scrollbar-width: thin;
          scrollbar-color: rgba(0, 0, 0, 0.35) transparent;
          -ms-overflow-style: auto;
        }

        .most-trending-tabs::-webkit-scrollbar {
          height: 4px;
        }

        .most-trending-tabs::-webkit-scrollbar-track {
          background: transparent;
        }

        .most-trending-tabs::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.35);
          border-radius: 9999px;
        }

        .most-trending-tabs::-webkit-scrollbar-thumb:hover {
          background-color: rgba(0, 0, 0, 0.55);
        }
      `}</style>

      <div className="container-custom px-4 md:px-8">
        {/* Section Heading – left aligned */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-left text-black tracking-wide">
            Most Trending
          </h2>
        </motion.div>

        {/* Category Tabs & Controls */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 md:mb-8 gap-4">
          <div className="most-trending-tabs flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scroll-smooth">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-2 py-1 text-[11px] sm:text-xs tracking-wider uppercase font-light transition-all duration-300 border-b-2 ${
                  activeCategory === cat
                    ? "text-black border-black font-normal"
                    : "text-gray-500 border-transparent hover:text-black hover:border-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between md:justify-end gap-6">
            <a
              href={`/category/${activeCategory.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-gray-700 hover:text-black text-xs sm:text-sm font-medium tracking-wider whitespace-nowrap"
            >
              View all
            </a>
            <div className="flex">
              <button
                ref={prevRef}
                className="swiper-prev w-12 sm:w-16 md:w-20 h-10 md:h-12 flex items-center justify-center hover:opacity-60 transition-all duration-300 text-gray-700"
              >
                <FiArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </button>
              <button
                ref={nextRef}
                className="swiper-next w-12 sm:w-16 md:w-20 h-10 md:h-12 flex items-center justify-center hover:opacity-60 transition-all duration-300 text-gray-700"
              >
                <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </button>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Scrollbar, Mousewheel]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            scrollbar={{
              draggable: true,
              dragSize: 120,
            }}
            mousewheel={{
              forceToAxis: true,
              sensitivity: 1,
            }}
            spaceBetween={12}
            slidesPerView={2}
            breakpoints={{
              480: { slidesPerView: 2, spaceBetween: 16 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 24 },
              1024: { slidesPerView: 4, spaceBetween: 28 },
              1280: { slidesPerView: 4, spaceBetween: 28 },
            }}
            className="pb-8 md:pb-14 most-trending-swiper"
            onBeforeInit={(swiper) => {
              if (swiper.params.navigation) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="group relative rounded-2xl overflow-hidden bg-white border border-gray-100 transition-all duration-500">
                  {/* IMAGE */}
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover duration-700 group-hover:scale-105"
                    />

                    {/* New Tag */}
                    {product.tag && (
                      <span className="absolute left-2.5 top-2.5 sm:left-4 sm:top-4 bg-white/90 backdrop-blur-sm px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md text-[11px] sm:text-sm font-medium">
                        {product.tag}
                      </span>
                    )}

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-500" />

                    {/* Bottom Actions */}
                    <div className="absolute left-2 right-2 bottom-2 sm:left-3 sm:right-3 sm:bottom-3 translate-y-24 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-500 hidden sm:block">
                      <div className="bg-white rounded-xl flex justify-between items-center px-3 py-2.5 sm:px-5 sm:py-4 shadow-lg">
                        <button className="text-xs sm:text-sm font-medium">View Details →</button>
                        <div className="flex gap-2 sm:gap-4">
                          <button className="text-gray-700 hover:text-black transition">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <circle cx="12" cy="12" r="10" />
                              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                              <line x1="12" y1="17" x2="12.01" y2="17" />
                            </svg>
                          </button>
                          <button className="text-gray-700 hover:text-red-500 transition">
                            <FiHeart size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Text below image */}
                  <div className="pt-3 sm:pt-5 px-1 pb-1 sm:pb-2">
                    <h3 className="text-xs sm:text-base md:text-lg font-normal line-clamp-1 text-gray-900">
                      {product.title}
                    </h3>
                    <p className="font-bold sm:font-semibold text-sm sm:text-xl md:text-2xl mt-1 sm:mt-2 mb-1 sm:mb-4 text-black">
                      {product.price}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default MostTrending;