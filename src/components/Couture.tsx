import React, { useRef, useState } from "react";
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
  const [progress, setProgress] = useState(0);

  const handleBeforeInit = (swiper: SwiperType) => {
    if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
    }
    swiper.navigation.init();
    swiper.navigation.update();
  };

  return (
    <section className="bg-white relative -mt-44 pb-4 md:pb-8 z-20 overflow-hidden">
      <div className="max-w-[1900px] mx-auto px-4 md:px-8">
        {/* Vertically center the two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] items-center gap-8">
          {/* LEFT IMAGE */}
          <div className="relative w-full">
            <img
              src="/couture/couture.webp"
              alt="Couture"
              className="w-full h-auto md:h-[600px] lg:h-[920px] object-cover"
            />
          </div>

          {/* RIGHT CONTENT – centered vertically */}
          <div className="w-full pl-4 md:pl-10 pr-4 md:pr-8">
            {/* HEADER – smaller, elegant */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 md:mb-8 gap-4">
              <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-left text-black tracking-wide leading-none">
                Couture
              </h2>
              <div className="flex items-center gap-4 md:gap-10">
                <a
                  href="/couture"
                  className="text-lg md:text-xl border-b border-black pb-1 hover:opacity-70 transition"
                >
                  View all
                </a>
                <div className="flex items-center gap-2 md:gap-5">
                  <button
                    ref={prevRef}
                    className="text-[20px] md:text-[30px] hover:opacity-60 transition"
                  >
                    <FiArrowLeft />
                  </button>
                  <button
                    ref={nextRef}
                    className="text-[20px] md:text-[30px] hover:opacity-60 transition"
                  >
                    <FiArrowRight />
                  </button>
                </div>
              </div>
            </div>

            {/* PRODUCT SLIDER */}
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              spaceBetween={16}
              slidesPerView={1.2}
              breakpoints={{
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2.2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2.5,
                  spaceBetween: 24,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 26,
                },
                1440: {
                  slidesPerView: 3.2,
                  spaceBetween: 28,
                },
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onBeforeInit={handleBeforeInit}
              onSlideChange={(swiper) => {
                setProgress(swiper.progress * 100);
              }}
              className="pb-4"
            >
              {coutureProducts.map((product: CoutureProduct) => (
                <SwiperSlide key={product.id}>
                  <div className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden cursor-pointer shadow-none hover:shadow-none transition-shadow">
                    <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      {product.tag && (
                        <span className="absolute top-4 left-4 bg-white text-black text-xs font-semibold px-3 py-1 rounded-md shadow-sm">
                          {product.tag}
                        </span>
                      )}
                      {/* Hover overlay */}
                      <div className="absolute bottom-5 left-5 right-5 opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <button className="w-full bg-white rounded-xl py-3 md:py-4 text-base md:text-lg font-medium hover:bg-black hover:text-white transition">
                          View Details →
                        </button>
                      </div>
                    </div>
                    {/* Consistent text sizes */}
                    <div className="p-4 md:p-5">
                      <h3 className="text-base md:text-lg font-normal line-clamp-1 text-gray-800">
                        {product.title}
                      </h3>
                      <p className="text-xl md:text-2xl font-semibold text-black mt-1">
                        {product.price}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* PROGRESS BAR */}
            <div className="mt-8 md:mt-10 h-[4px] w-full bg-gray-300 rounded-full overflow-hidden">
              <div
                className="h-full bg-black transition-all duration-300"
                style={{ width: `${Math.max(progress, 12)}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Couture;