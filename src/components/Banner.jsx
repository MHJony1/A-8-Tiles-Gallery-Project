"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

// Swiper CSS
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = () => {
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    setShowSlider(true);
  }, []);

  const slides = [
    {
      img: 'https://plus.unsplash.com/premium_photo-1661875124229-5201914a77b7?q=80&w=2000',
      title: "Discover Your",
      subtitle: "Perfect Aesthetic",
      desc: "Elevate your space with premium tiles. Explore our curated gallery of world-class textures."
    },
    {
      img: 'https://images.unsplash.com/photo-1758193783649-13371d7fb8dd?q=80&w=2000',
      title: "Divine Textures",
      subtitle: "Modern Elegance",
      desc: "Transform your floors into art. Our premium collection brings timeless luxury to every corner."
    },
    {
      img: 'https://images.unsplash.com/photo-1754447628644-b2dc91ce3237?q=80&w=2000',
      title: "Architectural",
      subtitle: "Masterpieces",
      desc: "Where durability meets design. Discover the future of interior aesthetics with Tilecraft."
    },
    {
      img: 'https://images.unsplash.com/photo-1756079664354-34944e001f6d?q=80&w=2000',
      title: "Modern Design",
      subtitle: "Crafted for Luxury",
      desc: "Architectural masterpieces designed with the finest materials for your dream home."
    }
  ];

 
  if (!showSlider) {
    return <div className="w-full h-screen bg-stone-900 animate-pulse"></div>;
  }

  return (
    <section className="w-full h-[80vh] md:h-[92vh] mb-16 relative group overflow-hidden bg-stone-950">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        loop={true}
        speed={1500}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        navigation={true}
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full flex items-center px-8 md:px-16 lg:px-24 border-0 outline-0">
              
              {/* Background Image with Ken Burns effect */}
              <div 
                className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-center transition-transform duration-10000 scale-100 group-hover:scale-110"
                style={{ backgroundImage: `url('${slide.img}')` }}
              ></div>

              {/* Overlays */}
              <div className="absolute inset-0 bg-black/40 z-1"></div>
              <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/20 to-transparent z-1"></div>

              {/* Content */}
              <div className="relative z-10 max-w-4xl space-y-6">
                <div className="flex items-center gap-4">
                  <span className="w-16 h-0.5 bg-[#c8b89a]"></span>
                  <p className="text-[#c8b89a] uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold">
                    Tilecraft Gallery • Premium Interior
                  </p>
                </div>

                <h1 className="text-5xl md:text-8xl font-serif text-white leading-[1.1]">
                  {slide.title} <br />
                  <span className="italic font-light text-stone-300">{slide.subtitle}</span>
                </h1>

                <p className="text-stone-200 text-base md:text-xl font-light max-w-xl opacity-90 leading-relaxed">
                  {slide.desc}
                </p>

                <div className="flex pt-8">
                  <Link
                    href="/all-tiles"
                    className="group relative px-14 py-4 overflow-hidden rounded-full border border-white/30 text-white font-bold uppercase tracking-[0.2em] text-[10px] transition-all"
                  >
                    <span className="relative z-10 group-hover:text-black transition-colors duration-300">Browse Now</span>
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-button-next, .swiper-button-prev {
          background: transparent !important;
          color: white !important;
          opacity: 0;
          transition: opacity 0.4s ease;
          width: auto !important;
          height: auto !important;
        }

        .swiper-button-next::after, .swiper-button-prev::after {
          font-size: 30px !important;
          text-shadow: 0 0 10px rgba(0,0,0,0.5);
        }

        .group:hover .swiper-button-next, .group:hover .swiper-button-prev {
          opacity: 0.8;
        }

        /
        .swiper-slide {
          border: none !important;
          outline: none !important;
        }

       
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.3;
        }
        .swiper-pagination-bullet-active {
          opacity: 1 !important;
          width: 30px !important;
          border-radius: 10px !important;
        }
      `}</style>
    </section>
  );
};

export default Banner;