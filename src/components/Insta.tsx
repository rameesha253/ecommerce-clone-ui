import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
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

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container-custom px-4 md:px-8">
        {/* Section Heading */}
        <div className="mb-8">
          <p className="font-playfair text-3xl md:text-4xl lg:text-5xl text-center text-black tracking-wide">
            Worn & Loved
          </p>
        </div>

        {/* Insta Posts Slider */}
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
            1024: { slidesPerView: 4, spaceBetween: 24 },
            1280: { slidesPerView: 5, spaceBetween: 24 },
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
          {instaPosts.map((post: InstaPost) => (
            <SwiperSlide key={post.id} className="pb-4">
              <div className="group relative bg-white rounded-lg overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 p-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img
                      src={post.userAvatar}
                      alt={post.username}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{post.username}</p>
                    <p className="text-xs text-gray-500">{post.category}</p>
                  </div>
                </div>

                {/* Post Image */}
                <div className="relative w-full aspect-square overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.username}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-3 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button className="text-gray-600 hover:text-red-500 transition-colors">
                      <FiHeart />
                    </button>
                    <button className="text-gray-600 hover:text-blue-500 transition-colors">
                      <FiMessageCircle />
                    </button>
                    <button className="text-gray-600 hover:text-purple-500 transition-colors">
                      <FiUser />
                    </button>
                  </div>
                  <a
                    href={post.shopLink}
                    className="text-xs font-semibold uppercase tracking-wider flex items-center gap-1 hover:text-gray-600 transition-colors"
                  >
                    Shop Now <FiShoppingBag />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex gap-2 mt-4 justify-start">
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
    </section>
  );
};

export default Insta;