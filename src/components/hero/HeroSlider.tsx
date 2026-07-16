import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const HeroSlider: React.FC = () => {
  const slides = [
    { id: 1, image: '../assets/hero/kids.webp' },
    { id: 2, image: 'src/assets/hero/Lawn.webp' },
    { id: 3, image: 'src/assets/hero/Couture.webp' },
    { id: 4, image: 'src/assets/hero/best_seller.webp' },
    { id: 5, image: 'src/assets/hero/DW_Summer.webp' },
    { id: 6, image: 'src/assets/hero/Mastani.webp' },
  ];

  return (
    <section className="relative w-full h-[430px] md:h-[430px] lg:h-[500] overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* Overlay gradient for elegance */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Centered content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-4 tracking-wide">
                  READY TO WEAR
                </h2>
                <p className="text-2xl md:text-4xl italic font-light mb-8">
                  Best Sellers
                </p>
                <a
                  href="#"
                  className="px-10 py-4 bg-white text-black uppercase tracking-widest text-sm font-medium hover:bg-black hover:text-white transition-all duration-300"
                >
                  Explore Collection
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
