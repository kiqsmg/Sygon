import React from 'react'
import { stats } from "../constants";
import styles from "../style";



const Stats = () => (
  
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex justify-start items-center flex-row m-12`}>
        <h4 className=" font-poppins font-semibold xs:text-[32px] text-[22px] xs:leading-[43px] leading-[33px] text-white">{stat.value}</h4>
        {/* <p className= " font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">{stat.title}</p> */}
      </div>
    ))}
  </section>
)

export default Stats