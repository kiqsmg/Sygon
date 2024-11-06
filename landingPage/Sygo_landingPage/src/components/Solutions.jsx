import React, { useState } from 'react';
import styles from "../style";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const Solutions = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="solutions" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient rounded-[20px] box-shadow`}>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        centeredSlides={true} // Centraliza o slide ativo
      >
        {[...Array(5)].map((_, i) => (
          <SwiperSlide key={i}>
            <div
              className={`flex flex-col items-center justify-center pb-10 bg-black-gradient mr-10 max-w-sm bg-gray-700 bg-opacity-90 border border-black rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300 ${
                activeIndex === i ? 'scale-100' : 'scale-80'
              }`}
              style={{ width: activeIndex === i ? '20rem' : '16rem', height: activeIndex === i ? '24rem' : '20rem' }}
            >
              <div className="flex flex-col ml-4 items-center">
                <h4 className="font-poppins font-semibold text-white text-[20px] leading-[32px]">
                  name
                </h4>
                <p className="font-poppins font-normal text-[16px] leading-[24px] text-gray-200 mt-2 mb-4">
                  title
                </p>
                <a href="www.google.com" className="inline-flex justify-center items-center py-2 text-sm w-[8rem] font-medium text-black bg-black-gradient-2 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Know more</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Solutions;
