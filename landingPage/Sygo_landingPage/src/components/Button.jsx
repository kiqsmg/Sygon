import React from 'react'


const Button = ({styles}) => {
  return (
    <button type='button' className={`py-2 px-10 text-white transition duration-200 hover:scale-105 font-normal rounded-[40px] mb-5 mt-5 ss:text-[32px] outline-none ${styles}`}>
      Conheça nossas soluções
    </button>
  )
}

export default Button