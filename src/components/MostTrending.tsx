import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
        {/* Section Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-10"
        >
          <p className="font-playfair text-3xl md:text-4xl lg:text-5xl text-center text-black tracking-wide">
            Most Trending
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-col md:items-center md:justify-between mb-6 gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-3 py-1.5 text-xs tracking-wider transition-all duration-300 border-b-2 ${
                  activeCategory === cat
                    ? "text-black border-black"
                    : "text-gray-500 border-transparent hover:text-black hover:border-gray-300"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`/category/${activeCategory.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-gray-700 hover:text-black text-sm font-medium tracking-wider whitespace-nowrap"
            >
              View all
            </a>
            {/* Custom Swiper navigation buttons */}
            <div className="flex gap-2">
              <button
                ref={prevRef}
                className="swiper-prev w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 text-gray-700"
              >
                ←
              </button>
              <button
                ref={nextRef}
                className="swiper-next w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 text-gray-700"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Product Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            spaceBetween={16}
            slidesPerView={2}
            breakpoints={{
              480: { slidesPerView: 2, spaceBetween: 16 },
              640: { slidesPerView: 3, spaceBetween: 16 },
              768: { slidesPerView: 4, spaceBetween: 20 },
              1024: { slidesPerView: 5, spaceBetween: 24 },
              1280: { slidesPerView: 6, spaceBetween: 24 },
            }}
            className="pb-4"
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
              <SwiperSlide key={product.id} className="pb-4">
                <div className="group relative bg-white rounded-sm overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative w-full aspect-[3/4] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {product.tag && (
                      <span className="absolute top-2 left-2 bg-white text-black text-xs font-semibold px-2 py-1 rounded-sm shadow-sm">
                        {product.tag}
                      </span>
                    )}
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-medium text-gray-800 mb-1 group-hover:text-gray-600 transition-colors line-clamp-1">
                      {product.title}
                    </h3>
                    <p className="text-black font-semibold text-sm md:text-base">
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
