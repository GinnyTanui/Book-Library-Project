import React from 'react'
import bookImage from '../images/book image.jpg'; 
import fire from '../images/fire.jpg'
import book from '../images/booklogonice.jpg'
import { useState } from 'react'; 
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';

const  NavBar =() => { 
   const [isClicked, setIsClicked] = useState(false); 
   const toggleMenu = () => setIsClicked(!isClicked)
  return ( 
    
    <nav className='flex items-center justify-between p-4 bg-pink-100'>  
    <div className='flex flex-row p-4'>
      <img src={fire} alt='bookImage' className='w-24 h-12 rounded-xl shadow-xl hover:shadow-2xl'/> 
      <h1 className='ml-3  sm:text-lg md:text-2xl font-bold italic text-blue-600 font-lora'>Book Haven!</h1>
    </div> 
    <div className='md:hidden'> 
      <button onClick={toggleMenu}> 
        <FaBars className='w-6 h-6'/> 
      </button>   
    </div> 
    <div className={`md:flex  ${isClicked ? "block": "hidden"} w-1/4 md:w-auto`}>
    <ul className='flex flex-col md:flex-row md:space-x-4  space-y-2 md:space-y-0 mt-2 md:mt-0'>
      <li className='italic font-semibold hover:underline  text-blue-600 font-lora'> 
        <Link to='/'>Home</Link>
        </li> 
        <li className='italic font-semibold  text-blue-600 font-lora hover:underline' >
          <Link to='/booklist'>Find Books</Link></li> 
      <li className='italic font-semibold  text-blue-600 font-lora hover:underline' >
        <Link to='/book/:id'></Link></li> 
      <li className='italic font-semibold  text-blue-600 font-lora hover:underline'>
        <Link to='/login'>Login</Link></li> 
      
    </ul> 
    </div> 
    </nav> 
     
   
  )
}

export default NavBar