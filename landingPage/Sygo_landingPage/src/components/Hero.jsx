import React from 'react';
import styles from "../style";
import { plant } from "../assets";
import Button from "./Button"


const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-10`}>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[50px] text-[30px] text-white ss:leading-[100px] leading-[40px] ">
          Tornando a <span className="text-gradient">sustentabilidade,</span> <br className="sm:block hidden"/>
          num mercado lucrativo!
        </h1>
      </div>

      <p className={`${styles.paragraph} max-w-[620px] mt-5 mb-5 ss:text-[24px]`}>
        Criamos soluções de sustentabilidade que tornam a redução de <span className="text-gradient text-[26px]">impactos ambientais</span> lucrativa para empresas e <span className="text-gradient text-[26px]">acessível</span> para os consumidores.
      </p>

      <Button styles="mt-10 ml-12"></Button>

    </div>


    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={plant} alt="billing" className="w-[80%] h-[80%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

  </section>
)

export default Hero