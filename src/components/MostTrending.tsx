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
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="container-custom px-4 md:px-8">
        {/* Section Heading – left aligned */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-left text-black tracking-wide">
            Most Trending
          </h2>
        </motion.div>

        {/* Category Tabs & Controls */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-2 py-1 text-xs tracking-wider uppercase font-light transition-all duration-300 border-b-2 ${
                  activeCategory === cat
                    ? "text-black border-black"
                    : "text-gray-500 border-transparent hover:text-black hover:border-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`/category/${activeCategory.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-gray-700 hover:text-black text-sm font-medium tracking-wider whitespace-nowrap"
            >
              View all
            </a>
            <div className="flex">
              <button
                ref={prevRef}
                className="swiper-prev w-20 h-12 flex items-center justify-center  hover:opacity-60 transition-all duration-300 text-gray-700"
              >
                <FiArrowLeft size={22} />
              </button>
              <button
                ref={nextRef}
                className="swiper-next w-20 h-12  flex items-center justify-center  hover:opacity-60 transition-all duration-300 text-gray-700"
              >
                <FiArrowRight size={22} />
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
              dragSize: 250,
            }}
            mousewheel={{
              forceToAxis: true,
              sensitivity: 1,
            }}
            spaceBetween={28}
            slidesPerView={2}
            breakpoints={{
              480: { slidesPerView: 2, spaceBetween: 28 },
              640: { slidesPerView: 2, spaceBetween: 28 },
              768: { slidesPerView: 3, spaceBetween: 28 },
              1024: { slidesPerView: 4, spaceBetween: 28 },
              1280: { slidesPerView: 4, spaceBetween: 28 },
            }}
            className="pb-14"
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
                      <span className="absolute left-4 top-4 bg-white px-3 py-1 rounded-md text-sm font-medium">
                        {product.tag}
                      </span>
                    )}

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-500" />

                    {/* Bottom Actions */}
                    <div className="absolute left-3 right-3 bottom-3 translate-y-24 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-500">
                      <div className="bg-white rounded-xl flex justify-between items-center px-5 py-4 shadow-lg">
                        <button className="text-sm font-medium">View Details →</button>
                        <div className="flex gap-4">
                          <button className="text-gray-700 hover:text-black transition">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
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
                            <FiHeart size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Text below image */}
                  <div className="pt-5 px-1 pb-2">
                    <h3 className="text-lg font-normal line-clamp-1">{product.title}</h3>
                    <p className="font-semibold text-2xl mt-2 mb-4">{product.price}</p>
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