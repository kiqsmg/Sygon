import React from 'react';
import styles from "../style";
import { credito } from "../assets";

const Avaliando = () => (
  <section
    id="avaliando"
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col rounded-[20px] box-shadow`}
  >
    {/* Left side: Text content */}
    <div className="flex-1 flex flex-col justify-center items-start">
      <h2 className={styles.heading2}>Como Avaliamos</h2>
      <p className="font-poppins mt-10 font-semibold text-white text-[18px] leading-[23px] mb-1">
      Cada empresa parceira tem seu relatório de sustentabilidade analisado por engenheiros ambientais da nossa equipe que, seguindo o GHG Protocol, emitem um relátorio simplificado com uma nota final.</p>
    </div>

    {/* Right side: Image */}
    <div className={`flex-1 flex justify-center items-end md:my-0 my-10 relative`}>
      <img
        src={credito}
        alt="billing"
        className="w-[90%] h-[90%] relative z-[5] rounded-lg"
      />

      {/* Gradient start */}
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      {/* Gradient end */}
    </div>
  </section>
);


export default Avaliando