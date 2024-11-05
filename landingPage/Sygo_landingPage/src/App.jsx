import React from 'react'
import styles from './style';

import { CTA, Footer, Hero, Navbar, Stats, About, Team, Business, Mercado, Avaliando, Solutions } from "./components";


const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`bg-white ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Solutions />
        <About />
        <Business />
        <Mercado />
        <Avaliando />
        <CTA /> 
        <Team />
        <Footer /> 
      </div>
    </div>
  </div>
);

export default App