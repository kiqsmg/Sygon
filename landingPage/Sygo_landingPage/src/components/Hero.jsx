import React from 'react';
import styles from "../style";
import { robot } from "../assets";
import Button from "./Button"


const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-10`}>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[50px] text-[32px] text-white ss:leading-[100px] leading-[40px] ">
          Transformando <span className="text-gradient">dados</span> <br className="sm:block hidden"/>
          em <span className="text-gradient">oportunidades</span>
        </h1>
      </div>

      <p className={`${styles.paragraph} max-w-[620px] mt-5 ss:text-[24px]`}>
        Bem vindo ao  <span className="text-gradient text-[30px]">VORTEX!</span> A sua plataforma de Algoritmos de Tranding. 
        Transforme a sua vida financeira através do nosso BOT impulsionado por Machine Learning.
      </p>

      <Button styles="mt-10 ml-12"></Button>

    </div>


    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[80%] h-[80%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

  </section>
)

export default Hero