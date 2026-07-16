import React from "react";
//import { FiArrowRight } from 'react-icons/fi';

const Categories: React.FC = () => {
  return (
    <section className="bg-gray-50">
      <div className="py-16 md:py-24 container-custom">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-playfair text-3xl md:text-4xl lg:text-5xl text-center text-black tracking-wide">
            New Arrivals
          </p>
          <p className="text-gray-600">Explore the Newest Additions Today</p>
        </div>

        {/* Scrollable Slider */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 w-max px-4 scrollbar-hide">
            {[
              { title: "Unstitched", image: "/src/assets/new/uns.webp" },
              {
                title: "Luxury Formals",image: "/src/assets/new/luxformals.webp",
              },
              { title: "Luxury Pret", image: "/src/assets/new/pret.webp" },
              { title: "Stitched", image: "/src/assets/new/stitched.webp" },
              { title: "Perfumes", image: "/src/assets/new/perfume.webp" },
              { title: "M Luxe Fabrics", image: "/src/assets/new/mlux.webp" },
            ].map((item, index) => (
              <div
                key={index}
                className="relative group w-[250px] md:w-[300px] lg:w-[320px] h-[400px] rounded-md overflow-hidden flex-shrink-0 cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-lg md:text-xl font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-custom pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {[
            {
              title: "Ready To Wear",
              image: "/src/assets/categories/rtw.webp",
            },
            {
              title: "Unstitched",
              image: "/src/assets/categories/Unstitched.webp",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative group w-full h-[70vh] md:h-[90vh] overflow-hidden rounded-md"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-xl md:text-2xl font-semibold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Couture", image: "/src/assets/categories/couture.webp" },
            { title: "Jewelry", image: "/src/assets/categories/Jewelry.webp" },
            { title: "Accessories", image: "/src/assets/categories/accessory.webp",},
          ].map((item, index) => (
            <div
              key={index}
              className="relative group w-full h-[400px] md:h-[500px] overflow-hidden rounded-md"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-lg md:text-xl font-semibold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
