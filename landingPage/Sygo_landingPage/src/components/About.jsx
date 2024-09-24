import React from 'react';
import styles from "../style";
import { logo_grande } from "../assets";

const About = () => (
  <section id="sobre" className={`flex md:flex-row flex-col ${styles.paddingY} `}>

<div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={logo_grande} alt="billing" className="w-[80%] h-[80%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
    </div>

    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-0 px-16 `}>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[50px] text-[32px] text-white ss:leading-[100px] leading-[40px] ">
          <span className="text-gradient">SOBRE</span>
        </h1>
      </div>

      <p className={`${styles.paragraph} max-w-[720px] mt-5 ss:text-[24px]`}>
        Na <span className="text-gradient text-[26px]">SYGON</span>, sustentabilidade é prioridade! 
        Oferecemos ferramentas para lhe auxiliar na hora de escolher <span className="text-gradient">produtos online e no mercado.</span> <br />
        Nossa plataforma facilita a escolha das suas compras ajudando a criar um futuro mais sustentável.
      </p>

    </div>

  </section>
)

export default About