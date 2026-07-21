import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import { FiArrowUpRight } from 'react-icons/fi';
import 'swiper/css';

const Categories: React.FC = () => {
  const topSliderItems = [
    { title: 'Unstitched', image: '/new/uns.webp' },
    { title: 'Luxury Formals', image: '/new/luxformals.webp' },
    { title: 'Luxury Pret', image: '/new/pret.webp' },
    { title: 'Stitched', image: '/new/stitched.webp' },
    { title: 'Perfumes', image: '/new/perfume.webp' },
    { title: 'M Luxe Fabrics', image: '/new/mlux.webp' },
  ];

  return (
    <section className="bg-gray-50">
      {/* Heading */}
      <div className="container-custom pt-16 md:pt-24">
        <div className="mb-12 md:mb-16">
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-left text-black tracking-wide">
            New Arrivals
          </h2>
          <p className="text-gray-600 mt-2 text-base md:text-lg">
            Explore the Newest Additions Today
          </p>
        </div>
      </div>

      {/* Infinite looping slider with blur & arrow on hover */}
      <div className="w-full overflow-hidden">
        <Swiper
          modules={[Mousewheel]}
          slidesPerView="auto"
          spaceBetween={24}
          loop={true}
          grabCursor={true}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 1,
          }}
          speed={400}
          breakpoints={{
            640: { spaceBetween: 24 },
            1024: { spaceBetween: 32 },
          }}
          className="!px-0"
        >
          {topSliderItems.map((item, index) => (
            <SwiperSlide
              key={index}
              className="!w-[300px] sm:!w-[340px] lg:!w-[380px] !h-[520px]"
            >
              <div className="relative group w-full h-full rounded-xl overflow-hidden cursor-pointer">
                {/* Image with zoom effect */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Bottom blur strip (only on hover) + arrow */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 group-hover:backdrop-blur-sm group-hover:bg-black/20">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl md:text-2xl font-semibold text-white">
                      {item.title}
                    </h3>
                    {/* Arrow appears only on hover */}
                    <FiArrowUpRight
                      size={20}
                      className="
                        text-white
                        opacity-0 group-hover:opacity-100
                        transition-all duration-300
                        transform translate-x-0 translate-y-0
                        group-hover:translate-x-1 group-hover:-translate-y-1
                      "
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Grid sections – NO blur, NO arrow, just image zoom */}
      <div className="container-custom pb-16 md:pb-24">
        {/* 2‑picture grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 mt-16">
          {[
            { title: 'Ready To Wear', image: '/categories/rtw.webp' },
            { title: 'Unstitched', image: '/categories/Unstitched.webp' },
          ].map((item, index) => (
            <div
              key={index}
              className="relative group w-full h-[70vh] md:h-[90vh] overflow-hidden rounded-xl cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Simple gradient overlay for readability, no hover change */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                  {/* No arrow here */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3‑picture grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Couture', image: '/categories/couture.webp' },
            { title: 'Jewelry', image: '/categories/Jewelry.webp' },
            { title: 'Accessories', image: '/categories/accessory.webp' },
          ].map((item, index) => (
            <div
              key={index}
              className="relative group w-full h-[400px] md:h-[500px] overflow-hidden rounded-xl cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  {/* No arrow here */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;