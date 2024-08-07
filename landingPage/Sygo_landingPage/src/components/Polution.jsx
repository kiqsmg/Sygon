import React from 'react';
import styles from "../style";
import { polution } from "../assets";

const Polution = () => (
  <section id="carbono" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row  flex-col rounded-[20px] box-shadow`}>

<div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 mr-20 relative`}>
    <img src={polution} alt="billing" className="w-[80%] h-[80%] relative z-[5] rounded-lg" />

    {/* gradient start */}
    <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
    <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
    <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    {/* gradient end */}
</div>


    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Nível de emissões de carbono no Brasil</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Tudo que você precisa para preocupações.</p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Tudo que você precisa para preocupações.</p>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Tudo que você precisa para preocupações.</p>

    </div>

  </section>
)

export default Polution