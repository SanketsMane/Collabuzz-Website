"use client";

const brands = [
  { name: "ZARE INC" },
  { name: "LUMINESSIA" },
  { name: "VOYAGER APEX" },
  { name: "ATELIER ZENO" },
  { name: "DERMEA.CO" },
  { name: "VIT-C" },
  { name: "RANGO HOLIDAYS" },
  { name: "HARBOR PETS" },
  { name: "AURA GYM CLUBS" },
];

export default function BrandsMarquee() {
  return (
    <section className="py-8 bg-black overflow-x-hidden border-y border-gray-800/50">
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll-rtl space-x-8 sm:space-x-16 md:space-x-24 min-w-max">
          {/* First set of brands */}
          {brands.map((brand, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 group cursor-pointer opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <div className="flex items-center justify-center h-12 px-8">
                <span className="text-white">{brand.name}</span>
              </div>
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {brands.map((brand, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 group cursor-pointer opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <div className="flex items-center justify-center h-12 px-8">
                <span className="text-white">{brand.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}