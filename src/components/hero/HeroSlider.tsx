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
    <section className="relative w-full min-h-[320px] sm:min-h-[420px] md:min-h-[500px] lg:min-h-[650px] xl:min-h-[750px] 2xl:min-h-[900px] overflow-hidden">
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
              className="relative w-full h-full min-h-[320px] sm:min-h-[420px] md:min-h-[500px] lg:min-h-[650px] xl:min-h-[750px] 2xl:min-h-[900px] bg-center bg-cover bg-gray-200"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 lg:bottom-10 lg:right-10 flex items-center gap-2 sm:gap-2.5 md:gap-3 z-30 pointer-events-auto">
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
                ? "w-10 sm:w-12 md:w-16 lg:w-20 bg-white opacity-100"
                : "w-6 sm:w-8 md:w-10 bg-white/50 opacity-60 hover:opacity-100"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
