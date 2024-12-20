import React from 'react';
import { features } from "../constants";
import styles, { layout } from "../style";

const FeatureCard = ( { icon, title, content, index }) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length -1 ? "mb-6" : "mb-0"} feature-card`}>
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-black`}>
            <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
        </div>
        <div className=" flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23px] mb-1">
                {title}
            </h4>
            <p className="font-poppins font-normal text-black text-[16px] leading-[24px]">
                {content}
            </p>
        </div>
    </div>
)

const Business = () => {
  return (
    <section id="bot" className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                Compre <span className="text-gradient text-[44px]">CONSCIENTE</span>  da sua casa ou direto no mercado! Sem precisar parar suas compras.
            </h2>
        </div>

        <div className={`${layout.sectionImg} flex-col`}>
            {features.map((feature, index) => (
                <FeatureCard key={feature.id} {...feature} index={index} />
            ))}
        </div>
    </section>
  )
}

export default Business