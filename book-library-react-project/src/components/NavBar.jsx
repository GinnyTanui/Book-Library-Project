import React from 'react'
import bookImage from '../images/book image.jpg'; 
import booklogo from '../images/booklogo.jpg'
import { useState } from 'react'; 
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';

const  NavBar =() => { 
   const [isClicked, setIsClicked] = useState(false); 
   const toggleMenu = () => setIsClicked(!isClicked)
  return ( 
    
    <nav className='flex items-center justify-between p-4 bg-gray-200'>  
    <div className='flex flex-row p-4'>
      <img src={bookImage} alt='bookImage' className='w-24 h-12'/> 
      <h1 className='text-black ml-3 text-xl font-bold italic'>Book Haven</h1>
    </div> 
    <div className='md:hidden'> 
      <button onClick={toggleMenu}> 
        <FaBars className='w-6 h-6'/> 
      </button>   
    </div> 
    <div className={`md:flex  ${isClicked ? "block": "hidden"} w-1/4 md:w-auto`}>
    <ul className='flex flex-col md:flex-row md:space-x-4  space-y-2 md:space-y-0 mt-2 md:mt-0'>
      <li className='italic font-semibold text-black hover:underline'> 
        <Link to='/'>Home</Link>
        </li> 
        <li className='italic font-semibold text-black hover:underline' >
          <Link to='/booklist'>Find Books</Link></li> 
      <li className='italic font-semibold text-black hover:underline' >
        <Link to='/book/:id'></Link></li> 
      <li className='italic font-semibold text-black hover:underline'>Login</li> 
      <li className='italic font-semibold text-black hover:underline' >My Reading List</li>
    </ul> 
    </div> 
    </nav> 
     
   
  )
}

export default NavBar