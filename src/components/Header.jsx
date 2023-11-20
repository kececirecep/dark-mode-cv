import React from 'react'
import logo from '../img/logo.png'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BsFillMoonFill } from 'react-icons/bs'
import { BsFillSunFill } from 'react-icons/bs'

import { Link } from 'react-router-dom';

//Redux
import { useSelector, useDispatch } from 'react-redux'
import { toggleDarkMode } from '../features/darkModeSlice'



const Header = () => { 
// Redux state'den darkMode durumunu alıyoruz
const darkMode = useSelector((state) => state.darkMode.darkMode);

// Redux store'a erişmek için useDispatch hook'unu kullanıyoruz
const dispatch = useDispatch();

// Dark Mode butonuna tıklandığında tetiklenen fonksiyon
const handleDarkModeToggle = () => {
  // toggleDarkMode action'ıyla Redux store'da darkMode durumunu değiştiriyoruz
  dispatch(toggleDarkMode());
};


    const myStyleIcon = {
        fontSize:"22px",
        color:"white",
    }
    const styleSun = {
      color:"yellow",
    }
    const styleMoon = {
      color:"#4B4B4B",
    }
  return (
    <nav className='max-w-5xl mx-auto flex justify-between items-center p-8'>
      <div className="logo w-[75px] h-[75px]"><img src={logo} alt="" /></div>  
      <div className='flex gap-4'>
      <Link to='/projects' className='flex items-center py-0 px-3 rounded cursor-pointer bg-[#00D8FF] hover:bg-[#01c1e3]'>
          <span className='p-2 text-white font-bold'>Projects</span>
          <span className='arrow-icon'>
            <MdKeyboardDoubleArrowRight style={myStyleIcon} />
          </span>
        </Link>
        <button onClick={handleDarkModeToggle} className='flex items-center py-0 px-3 rounded cursor-pointer text-3xl p-2 font-bold'>{darkMode ? <BsFillSunFill style={styleSun} /> : <BsFillMoonFill style={styleMoon} />}</button>
      </div>
    </nav>
  )
}

export default Header 