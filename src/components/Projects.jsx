import React from 'react'
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux'

const Projects = () => {
    const myCss = {
        fontSize:"23px" , 
    }
    

const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <div className='max-w-5xl mx-auto flex justify-between items-center p-8'>
        <Link to="/">
            <span className='flex items-center text-lg font-semibold'>
                <MdKeyboardDoubleArrowLeft style={myCss}  className='arrow-iconLeft'/>
                <span className='hover:border-b border-black'>Anasayfaya Dön</span>
            </span>
        </Link>
    </div>
  )
}

export default Projects