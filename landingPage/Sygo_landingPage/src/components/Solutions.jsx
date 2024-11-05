import React from 'react';
import styles from "../style";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'; // Importação para o autoplay
import { Autoplay } from 'swiper/modules'; // Importando o módulo de autoplay

const Solutions = () => (
  <section id="solutions" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient rounded-[20px] box-shadow`}>
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      autoplay={{
        delay: 8000, // 10 segundos em milissegundos
        disableOnInteraction: false, // O autoplay continua após a interação do usuário
      }}
      modules={[Autoplay]} // Adiciona o módulo de autoplay
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="flex flex-col items-center justify-center pb-10 bg-black-gradient mr-10 w-[16rem] h-[20rem] max-w-sm bg-gray-700 bg-opacity-90 border border-black rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
      <SwiperSlide>
        <div className="flex flex-col items-center justify-center pb-10 bg-black-gradient mr-10 w-[16rem] h-[20rem] max-w-sm bg-gray-700 bg-opacity-90 border border-black rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
      <SwiperSlide>
        <div className="flex flex-col items-center justify-center pb-10 bg-black-gradient mr-10 w-[16rem] h-[20rem] max-w-sm bg-gray-700 bg-opacity-90 border border-black rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
      <SwiperSlide>
        <div className="flex flex-col items-center justify-center pb-10 bg-black-gradient mr-10 w-[16rem] h-[20rem] max-w-sm bg-gray-700 bg-opacity-90 border border-black rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
      <SwiperSlide>
        <div className="flex flex-col items-center justify-center pb-10 bg-black-gradient mr-10 w-[16rem] h-[20rem] max-w-sm bg-gray-700 bg-opacity-90 border border-black rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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

      {/* Adicione quantos slides quiser */}
    </Swiper>
  </section>
);

export default Solutions;
