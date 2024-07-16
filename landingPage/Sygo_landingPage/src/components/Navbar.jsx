import {useState} from 'react';

import { close, logosygon, menu, whatsapp, instagram, tiktok } from '../assets';

import { navLinks } from "../constants";


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
  <img src={logosygon} alt="Sygon logo with a fingerprint" className="w-[200px] h-[50px]" />

  <div className="flex-1 flex justify-center">
    <ul className='list-none sm:flex hidden justify-center items-center'>
      {navLinks.map((nav, index) => (
        <li
          key={nav.id}
          className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-20'} text-white transition duration-200 hover:scale-110`}
        >
          <a href={`#${nav.id}`}>
            {nav.title}
          </a>
        </li>
      ))}
    </ul>
  </div>

  <ul className='list-none sm:flex hidden justify-end items-center'>
    <li className="cursor-pointer mr-10">
      <a target="_blank" href="https://www.youtube.com/watch?v=cHRfbiwdheg">
        <img src={whatsapp} alt='Whatsapp logo' />
      </a>
    </li>
    <li className="cursor-pointer mr-10">
      <a target="_blank" href="https://www.instagram.com/thesygon/">
        <img src={instagram} alt='Instagram logo'/>
      </a>
    </li>
    <li>
      <a target="_blank" href="https://www.tiktok.com/@sygon.carbon">
        <img src={tiktok} alt='TikTok logo'/>
      </a>
    </li>
  </ul>

  <div className='sm:hidden flex flex-1 justify-end items-center'>
    <img src={toggle ? close : menu} alt="menu" className='[28px] h-[28px] object-contain' onClick={() => setToggle((prev) => !prev)}/>
    <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
      <ul className='list-none flex flex-col justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-10'} text-white`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar