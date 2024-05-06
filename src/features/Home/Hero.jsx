import { useState } from "react";
import Img1 from "../../assets/hero/hero-1.e3571e1f41e5ffe2af86.jpg";
import Img2 from "../../assets/hero/hero-2.c303b8aecb19f8d4efab.jpg";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroTexts = [
    {
      header: "Discover the Latest Trends",
      paragraph:
        "Explore our collection of new arrivals and stay ahead of the fashion curve.",
      image: Img1,
    },
    {
      header: "Shop the Best Deals",
      paragraph:
        "Don't miss out on our limited-time offers and discounts on your favorite brands.",
      image: Img2,
    },
  ];
  const nextSlide = () => {
    if (currentSlide < 1) setCurrentSlide((prev) => prev + 1);
    else {
      setCurrentSlide(0);
    }
  };
  const prevSlide = () => {
    console.log("slide");
    if (currentSlide > 0) setCurrentSlide((prev) => prev - 1);
    else {
      setCurrentSlide(1);
    }
  };

  return (
    <main className="h-[calc(100vh-80px)] bg-secondary-50 pt-[80px] ">
      <div className="container h-full flex items-center justify-center">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          spaceBetween={50}
          slidesPerView={1}>
          {heroTexts.map((hero, i) => (
            <SwiperSlide key={i}>
              {" "}
              <div className="flex lg:gap-1 gap-5 lg:flex-row flex-col items-center  justify-center    px-8 h-full w-full">
                <div className="lg:w-1/2 flex justify-center  flex-col  gap-4 lg:text-left text-center h-full w-full ">
                  <h2 className=" text-3xl md:text-5xl font-bold text-primary-700 ">
                    {hero.header}
                  </h2>
                  <p className="text-sm md:text-lg text-primary-700">
                    {hero.paragraph}
                  </p>
                </div>
                <div className="lg:w-1/2   justify-center items-center ">
                  <img src={hero.image} alt="hero" className="w-full" />
                </div>
              </div>
            </SwiperSlide>
          ))}


        </Swiper>
      </div>
      {/* <div className="container r h-full relative overflow-hidden">
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 text-2xl text-primary-700 hover:opacity-45 transition-all duration-300 z-10"
          onClick={prevSlide}>
          <FaChevronLeft />
        </button>

        <div
          className="h-full  relative transition-all duration-300"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}>
          {heroTexts.map((hero, i) => (
            <div
              key={i}
              className="flex lg:ga-1 gap-5 lg:flex-row flex-col items-center  justify-center absolute top-0 left-0 h-full w-full  px-8"
              style={{ left: `${i * 100}%` }}>
              <div className="lg:w-1/2 flex justify-center  flex-col  gap-4 lg:text-left text-center ">
                <h2 className=" text-3xl md:text-5xl font-bold text-primary-700 ">
                  {hero.header}
                </h2>
                <p className="text-sm md:text-lg text-primary-700">
                  {hero.paragraph}
                </p>
              </div>
              <div className="lg:w-1/2   justify-center items-center ">
                <img src={hero.image} alt="hero" className="w-full" />
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2  text-2xl text-primary-700 hover:opacity-45 transition-all duration-300"
          onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div> */}
    </main>
  );
}

export default Hero;
