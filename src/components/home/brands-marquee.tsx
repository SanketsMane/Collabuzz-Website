"use client";

const brands = [
  { 
    name: "DECATHLON", 
    logo: (
      <svg width="120" height="24" viewBox="0 0 120 24" fill="currentColor">
        <path d="M8.5 4h7c4.4 0 8 3.6 8 8s-3.6 8-8 8h-7V4zm7 13c2.8 0 5-2.2 5-5s-2.2-5-5-5h-4v10h4z"/>
        <path d="M32 4h12v3h-9v3h8v3h-8v3h9v3H32V4zM52 4h8c3.3 0 6 2.7 6 6v1c0 2.2-1.2 4.1-3 5l3.5 4h-4l-3-3.5H55V20h-3V4zm8 9c1.7 0 3-1.3 3-3s-1.3-3-3-3h-5v6h5z"/>
      </svg>
    )
  },
  { 
    name: "HONDA", 
    logo: (
      <svg width="80" height="24" viewBox="0 0 80 24" fill="currentColor">
        <path d="M4 4h3v6h6V4h3v16h-3v-7H7v7H4V4zM24 8c0-2.2 1.8-4 4-4h8c2.2 0 4 1.8 4 4v8c0 2.2-1.8 4-4 4h-8c-2.2 0-4-1.8-4-4V8zm3 0v8c0 .6.4 1 1 1h8c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1h-8c-.6 0-1 .4-1 1z"/>
        <path d="M48 4h3l6 10V4h3v16h-3l-6-10v10h-3V4zM68 4h8v3h-5v3h4v3h-4v4h5v3h-8V4z"/>
      </svg>
    )
  },
  { 
    name: "SEMRUSH", 
    logo: (
      <svg width="100" height="24" viewBox="0 0 100 24" fill="currentColor">
        <path d="M8 6c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-2h3v2c0 2.8-2.2 5-5 5H8c-2.8 0-5-2.2-5-5V8c0-2.8 2.2-5 5-5h2c2.8 0 5 2.2 5 5v2h-3V8c0-1.1-.9-2-2-2H8z"/>
        <path d="M20 3h12v3h-9v3h8v3h-8v3h9v3H20V3zM40 8c0-2.8 2.2-5 5-5h3c2.8 0 5 2.2 5 5v1h-3V8c0-1.1-.9-2-2-2h-3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2v-3h-2v-3h5v6c0 2.8-2.2 5-5 5h-3c-2.8 0-5-2.2-5-5V8z"/>
      </svg>
    )
  },
  { 
    name: "THE WASHINGTON POST", 
    logo: (
      <svg width="140" height="24" viewBox="0 0 140 24" fill="currentColor">
        <path d="M8 4h16v3H8v3h14v3H8v4h16v3H5V4h3zM30 4h3l3 12 3-12h3l-4 16h-4l-4-16zM50 4h12v3h-9v3h8v3h-8v3h9v3H50V4z"/>
        <path d="M70 4h3v6h6V4h3v16h-3v-7h-6v7h-3V4zM88 4h8c2.2 0 4 1.8 4 4v8c0 2.2-1.8 4-4 4h-8V4zm8 13c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1h-5v10h5z"/>
      </svg>
    )
  },
  { 
    name: "HUBSPOT", 
    logo: (
      <svg width="90" height="24" viewBox="0 0 90 24" fill="currentColor">
        <path d="M4 4h3v6h6V4h3v16h-3v-7H7v7H4V4zM24 8c0-2.2 1.8-4 4-4s4 1.8 4 4v8c0 2.2-1.8 4-4 4s-4-1.8-4-4V8zm3 0v8c0 .6.4 1 1 1s1-.4 1-1V8c0-.6-.4-1-1-1s-1 .4-1 1z"/>
        <path d="M40 4h8c2.2 0 4 1.8 4 4v4c0 2.2-1.8 4-4 4h-5v4h-3V4zm8 9c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1h-5v6h5zM58 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM57 12h2v8h-2v-8z"/>
        <path d="M66 12h2v1c.6-.6 1.4-1 2.5-1 2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5c-1.1 0-1.9-.4-2.5-1v1h-2v-8zm6.5 6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z"/>
      </svg>
    )
  },
  { 
    name: "UBER", 
    logo: (
      <svg width="60" height="24" viewBox="0 0 60 24" fill="currentColor">
        <path d="M8 8c0-2.2 1.8-4 4-4s4 1.8 4 4v8c0 2.2-1.8 4-4 4s-4-1.8-4-4V8zm3 0v8c0 .6.4 1 1 1s1-.4 1-1V8c0-.6-.4-1-1-1s-1 .4-1 1z"/>
        <path d="M20 4h8c2.2 0 4 1.8 4 4v4c0 2.2-1.8 4-4 4h-5v4h-3V4zm8 9c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1h-5v6h5z"/>
        <path d="M36 4h12v3h-9v3h8v3h-8v3h9v3H36V4zM52 8c0-2.2 1.8-4 4-4h4v3h-4c-.6 0-1 .4-1 1v1h4v3h-4v4c0 .6.4 1 1 1h4v3h-4c-2.2 0-4-1.8-4-4V8z"/>
      </svg>
    )
  },
  { 
    name: "L'ORÉAL", 
    logo: (
      <svg width="80" height="24" viewBox="0 0 80 24" fill="currentColor">
        <path d="M4 4h3v13h8v3H4V4zM18 15h4v3h-4v-3zM26 8c0-2.2 1.8-4 4-4s4 1.8 4 4v8c0 2.2-1.8 4-4 4s-4-1.8-4-4V8zm3 0v8c0 .6.4 1 1 1s1-.4 1-1V8c0-.6-.4-1-1-1s-1 .4-1 1z"/>
        <path d="M40 8c0-2.2 1.8-4 4-4h4c2.2 0 4 1.8 4 4v8c0 2.2-1.8 4-4 4h-4c-2.2 0-4-1.8-4-4V8zm3 0v8c0 .6.4 1 1 1h4c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1h-4c-.6 0-1 .4-1 1z"/>
        <path d="M56 4h8v3h-5v3h4v3h-4v4h5v3h-8V4zM68 4h3l4 12h-3l-.5-2h-4l-.5 2h-3l4-12zm2 7h2l-1-4-1 4z"/>
      </svg>
    )
  },
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
                <span className="text-white font-bold text-lg tracking-wider">{brand.name}</span>
              </div>
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {brands.map((brand, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 group cursor-pointer opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <div className="flex items-center justify-center h-12 px-8 text-white hover:text-gray-300 transition-colors">
                {brand.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}