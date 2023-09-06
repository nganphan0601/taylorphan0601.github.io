import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'



const Navbar = () => {
  const [active, setActive] = useState('');
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20
    bg-primary`}>

      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2"
        onClick={() => {
          setActive('');
          window.scrollTo(0, 0);
        }}>
          <img src={logo} alt="logo" className="w-20 h-auto object-contain"/>
          <p className="text-white text-[20px] font-bold cursor-pointer">
            Ngan | <span className="navi sm:block hidden md:inline-block"> Portfolio</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
            {
              navLinks.map((item) => (
                  // eslint-disable-next-line react/jsx-key
                  <li key={item.id} className={`${
                    active === item.id ? 'text-blue-300' : 'text-secondary'
                  } outline-none`}>
                    <a href={`#${item.id}`} className=' hover:text-blue-300 text-[18px] cursor-pointer outline-none' onClick={() => setActive(item.id)}>
                      {item.title}
                    </a>
                  </li>
              ))
            }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar