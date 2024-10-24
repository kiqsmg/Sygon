import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`py-[6px] px-6 bg-white text-blue-gradient transition duration-200 hover:scale-105 font-bold rounded-[20px] mb-5 mt-5 ss:text-[32px] outline-none ${styles}`}>
      Projetos desenvolvidos
    </button>
  )
}

export default Button