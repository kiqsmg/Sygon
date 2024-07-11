import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`py-[6px] px-6 bg-blue-gradient text-black transition duration-200 hover:scale-105 font-bold rounded-[20px] mb-5 mt-5 ss:text-[32px] outline-none ${styles}`}>
      Conheça os BOTs
    </button>
  )
}

export default Button