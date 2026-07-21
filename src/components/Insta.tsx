import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import {
  FiArrowLeft,
  FiArrowRight,
  FiHeart,
  FiShoppingBag,
  FiUser,
  FiMessageCircle,
} from "react-icons/fi";
import { instaPosts } from "../data/insta";
import type { InstaPost } from "../data/insta";

const Insta: React.FC = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className="bg-white pl-4 lg:pl-8 py-8 sm:py-12 lg:py-20">
      <div className="max-w-[1850px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading with arrows */}
        <div className="relative mb-6 sm:mb-10">
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-left text-black tracking-wide">
            Worn & Loved❤️
          </h2>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden sm:flex gap-3 sm:gap-6">
            <button
              ref={prevRef}
              className="text-2xl sm:text-3xl hover:opacity-60 transition"
            >
              <FiArrowLeft />
            </button>
            <button
              ref={nextRef}
              className="text-2xl sm:text-3xl hover:opacity-60 transition"
            >
              <FiArrowRight />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="w-full overflow-hidden">
          <Swiper
            modules={[Navigation, Mousewheel]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            mousewheel={{
              forceToAxis: true,
              sensitivity: 1,
            }}
            slidesPerView="auto"
            spaceBetween={16}
            loop={true}
            grabCursor={true}
            speed={400}
            breakpoints={{
              640: { spaceBetween: 24 },
              1024: { spaceBetween: 32 },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onBeforeInit={(swiper) => {
              if (
                swiper.params.navigation &&
                typeof swiper.params.navigation !== "boolean"
              ) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            className="!px-0"
          >
            {instaPosts.map((post: InstaPost) => (
              <SwiperSlide
                key={post.id}
                className="!w-[220px] sm:!w-[280px] lg:!w-[340px]"
              >
                <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-lg">
                  {/* Header */}
                  <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-3 sm:py-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                      <img
                        src={post.userAvatar}
                        alt={post.username}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-base sm:text-[18px] font-semibold leading-none">
                        {post.username}
                      </p>
                      <p className="text-xs sm:text-[15px] text-gray-400 mt-1">
                        {post.category}
                      </p>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative h-[280px] sm:h-[350px] lg:h-[400px] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.username}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Footer */}
                  <div className="flex flex-col gap-3 px-3 sm:px-5 py-3 sm:py-4">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-3 sm:gap-5 text-[18px] sm:text-[24px] text-gray-600">
                        <button className="hover:text-red-500 transition-colors">
                          <FiHeart />
                        </button>
                        <button className="hover:text-blue-500 transition-colors">
                          <FiMessageCircle />
                        </button>
                        <button className="hover:text-purple-500 transition-colors">
                          <FiUser />
                        </button>
                      </div>
                      <a
                        href={post.shopLink}
                        className="flex items-center gap-1 sm:gap-2 text-sm sm:text-[18px] font-medium hover:text-gray-600 transition-colors whitespace-nowrap"
                      >
                        <span className="leading-none">Shop Now</span>
                        <FiShoppingBag className="shrink-0" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Insta;