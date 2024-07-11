import {useState} from 'react';

import { close, logosygon, menu, whatsapp, instagram, tiktok } from '../assets';

import { navLinks } from "../constants";


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logosygon} alt="Sygon logo with an finger print"
      className="w-[200px] h-[50px]" />

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length -1 ? 'mr-0' : 'mr-20'} text-white transition duration-200 hover:scale-110`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>

        <li className={`cursor-pointer ${'mr-10'}`} >
          <a target="_blank" href="https://www.youtube.com/watch?v=cHRfbiwdheg">
            <img src={whatsapp} alt='Whatsapp logo' href="a" />
          </a>
        </li>

        <li className={`cursor-pointer ${'mr-10'}`} >
          <a target="_blank" href="https://www.youtube.com/watch?v=zWHygvvSge8">
            <img src={instagram} alt='Instagram logo'/>
          </a>
        </li>

        <li>
          <a target="_blank" href="https://www.youtube.com/watch?v=uydfxLws3j8">
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
                className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length -1 ? 'mb-0' : 'mb-10'} text-white`}
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