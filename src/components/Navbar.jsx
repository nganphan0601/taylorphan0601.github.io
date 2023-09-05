import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
// import { NavLinks } from '../constants'
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
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Ngan | <span > Portfolio</span></p>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar