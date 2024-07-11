import React from 'react'
import { teamplayers } from "../constants";
import styles from "../style";
import TeamCard from './TeamCard';



const Team = () => (
  
  <section id="equipe" className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 mt-20`}>

    <div className="flex flex-row justify-between items-center text-center w-full">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[50px] text-[32px] text-white ss:leading-[100px] leading-[40px] mb-10">
        <span className="text-gradient">Conheça nosso time</span>
      </h1>
    </div>

    <p className="font-poppins font-semibold text-dimWhite mb-10 text-center max-w-[800px] ">Nossa equipe foi cuidadosamente selecionada com o objetivo de proporcionar a mais elevada
     experiência ao nosso consumidor. Desde a interface gráfica visível até o código eficiente que opera nos bastidores,
      priorizamos a segurança e a agilidade nas transações para os nossos bots. Com isso em mente, contamos com membros especializados,
       desde designers de UX/UI até programadores especializados em backend e criptomoedas.</p>

    <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1] mt-10 ml-12 gap-20 sm:gap-0 ">
      {teamplayers.map((card) => <TeamCard key={card.id} {...card} />)}
    </div>
  </section>
)
export default Team