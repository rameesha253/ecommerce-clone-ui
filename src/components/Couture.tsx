import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { coutureProducts } from "../data/coutureProducts";
import type { CoutureProduct } from "../data/coutureProducts";

const Couture: React.FC = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (swiperRef.current) {
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  useEffect(() => {
    if (isMounted && swiperRef.current) {
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, [isMounted]);

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container-custom px-4 md:px-8">
        {/* Section Heading */}
        <p className="font-playfair text-3xl md:text-4xl lg:text-5xl text-center text-black tracking-wide pb-8">
          Couture
        </p>

        {/* Main Content: Image + Product Slider */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left Section: Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="/couture/couture.webp"
                alt="Couture Collection"
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
              />
            </div>
          </div>

          {/* Right Section: Product Slider */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm text-gray-500 uppercase tracking-wider">
                Pre-Order
              </span>
              <a
                href="/couture"
                className="text-sm text-gray-700 hover:text-black uppercase tracking-wider whitespace-nowrap"
              >
                View all
              </a>
            </div>

            {/* Product Slider */}
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                480: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
              }}
              className="pb-4"
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {coutureProducts.map((product: CoutureProduct) => (
                <SwiperSlide key={product.id} className="pb-4">
                  <div className="group relative bg-white rounded-lg overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow">
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
                    <div className="p-4">
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

            {/* Navigation Buttons */}
            <div className="flex gap-2 mt-4">
              <button
                ref={prevRef}
                className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 text-gray-700"
              >
                <FiArrowLeft />
              </button>
              <button
                ref={nextRef}
                className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 text-gray-700"
              >
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Couture;