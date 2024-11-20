import React from 'react';
import styles from "../style";
import { painel } from "../assets";
import Button from "./Button";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} xl:px-0 sm:px-16 px-10`}>
      
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-10`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[110px] text-[40px] text-black ss:leading-[100px] leading-[40px] ">
            Tornando a <br className="sm:block hidden"/>sustentabilidade <br className="sm:block hidden"/>lucrativa!
          </h1>
        </div>

        <p className={`${styles.paragraph} max-w-[760px] mt-10 mb-5 ss:text-[36px]`}>
        Nós criamos soluções que tornam as práticas de ESG <span className="font-bold text-[20px] ss:text-[38px]">lucrativas</span> para as empresas e <span className="font-bold text-[20px] ss:text-[38px]">acessíveis</span> para os consumidores.
        </p>

        <Button styles="mt-10 bg-forth"></Button>
      </div>

    </div>
    <div className={`flex-1 flex md:my-0 my-10 `}>
        <img 
          src={painel}
          alt="Green panel"
          className=" absolute top-0 left-0 z-[10] hidden md:block" // Configuração absoluta
          style={{
            transform: "rotate(90deg) scale(-1, 1)", // Gira 90 graus e inverte o eixo X
            top: "80%",
            left: "85%",
            transformOrigin: "center", // Define o ponto de origem da rotação no centro da imagem
            translate: "-50% -50%", // Centraliza a imagem
          }}
        />
    </div>

  </section>
)

export default Hero;
