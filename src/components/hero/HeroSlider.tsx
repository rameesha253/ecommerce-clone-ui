import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

const HeroSlider: React.FC = () => {
  const slides = [
    { id: 1, image: "/hero/kids.webp" },
    { id: 2, image: "/hero/Lawn.webp" },
    { id: 3, image: "/hero/Couture.webp" },
    { id: 4, image: "/hero/Best_Seller.webp" },
    { id: 5, image: "/hero/DW_Summer.webp" },
    { id: 6, image: "/hero/Mastani.webp" },
    { id: 7, image: "/hero/Mprints.webp" },
    { id: 8, image: "/hero/monochrome.webp" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[800px] overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={900} // slower transition (0.7s)
        className="w-full h-full"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-[100vh] bg-center bg-cover bg-gray-200" // fallback gray
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-20 md:bottom-24 right-6 md:right-8 flex items-center gap-2 md:gap-3 z-30 pointer-events-auto">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => {
              if (swiperRef.current) {
                swiperRef.current.slideToLoop(index);
              }
            }}
            className={`transition-all duration-500 rounded-full h-1 ${
              currentIndex === index
                ? "w-16 md:w-24 bg-white opacity-100"
                : "w-8 md:w-10 bg-white/50 opacity-60 hover:opacity-100"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
