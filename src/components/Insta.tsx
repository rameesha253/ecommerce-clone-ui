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

  // Attach navigation refs after mount (required for loop mode)
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className="bg-white pl-4 lg:pl-8 py-12 md:py-16 lg:py-20">
      <div className="max-w-[1850px] mx-auto px-6 lg:px-10">
        {/* Heading with arrows on the right */}
        <div className="relative mb-10">
          <h2 className="text-center text-[40px] font-light tracking-tight">
            Worn & Loved ❤️
          </h2>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex gap-6">
            <button
              ref={prevRef}
              className="text-3xl hover:opacity-60 transition"
            >
              <FiArrowLeft />
            </button>
            <button
              ref={nextRef}
              className="text-3xl hover:opacity-60 transition"
            >
              <FiArrowRight />
            </button>
          </div>
        </div>

        {/* Slider – same behaviour as the Categories reference */}
        <div className="w-full overflow-hidden">
          <Swiper
            modules={[Navigation, Mousewheel]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            mousewheel={{
              forceToAxis: true,
              sensitivity: 1,          // one card per scroll tick
            }}
            slidesPerView="auto"
            spaceBetween={24}
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
              // Manually link navigation refs for loop compatibility
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
                <div className="group bg-white rounded-[18px] overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-lg">
                  {/* Header */}
                  <div className="flex items-center gap-3 px-4 py-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                      <img
                        src={post.userAvatar}
                        alt={post.username}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-[18px] font-semibold leading-none">
                        {post.username}
                      </p>
                      <p className="text-[15px] text-gray-400 mt-1">
                        {post.category}
                      </p>
                    </div>
                  </div>

                  {/* Image – no overlay, always clear */}
                  <div className="relative h-[400px] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.username}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between px-5 py-4">
                    <div className="flex items-center gap-5 text-[28px] text-gray-600">
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
                      className="flex items-center gap-2 text-[22px] font-medium hover:text-gray-600 transition-colors"
                    >
                      Shop Now <FiShoppingBag />
                    </a>
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