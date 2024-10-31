import React from 'react';
import styles from "../style";
import { verde } from "../assets";

const Mercado = () => (
  <section id="carbono" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row  flex-col rounded-[20px] box-shadow`}>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 mr-20 relative`}>
        <img src={verde} alt="billing" className="w-[80%] h-[80%] relative z-[5] rounded-lg" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
    </div>


    <div className="flex-1 flex flex-col mb-10">
      <h2 className={styles.heading2}>Mercado sustentavel <br/>no Brasil</h2>

      <ul className="list-inside list-disc mt-5 ml-5 font-poppins font-normal text-dimWhite text-[24px]">
        <li className="mb-5">Empresas no Brasil: R$ 150 MILHÕES/ANO</li>
        <li className="mb-5">Brasil tem 15% do potencial global de captura de carbono</li>
        <li className="mb-5">Potencial para produzir US$125 BI em créditos</li>
      </ul>
    </div>

  </section>
)

export default Mercado