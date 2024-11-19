import React from 'react'
import { stats } from "../constants";
import styles from "../style";


const Stats = () => (
  <section className={`flex flex-row flex-wrap sm:mb-20 sm:mt-10 ml-10 mb-6`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex justify-start items-center flex-row m-10`}>
        <h4 className= {`font-bold xs:text-[32px] text-[22px] xs:leading-[43px] leading-[33px] text-third cursor-pointer transition duration-200 hover:scale-110`}>{stat.value}</h4>
      </div>
    ))}
  </section>
)

export default Stats