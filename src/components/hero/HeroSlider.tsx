import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const HeroSlider: React.FC = () => {
  const slides = [
    { id: 1, image: '/hero/kids.webp' },
    { id: 2, image: '/hero/Lawn.webp' },
    { id: 3, image: '/hero/Couture.webp' },
    { id: 4, image: '/hero/best_seller.webp' },
    { id: 5, image: '/hero/DW_Summer.webp' },
    { id: 6, image: '/hero/Mastani.webp' },
  ];

  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
