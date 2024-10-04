import React from 'react'
import NavBar from './NavBar' 
import Library from '../images/imaginny.jpg'
const  Header = () =>  {
  return (
    <div>
        <header>
            <NavBar/>  
            <div className='relative'>
               <img src={Library} alt='person reading a book' className='w-full h-1/2'/> 
               <div className='absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-40 p-4'>
                <h1 className='text-blue-300 text-lg sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-2 md:mb-4 italic font-roboto underline mt-3'>WELCOME TO YOUR SERENE BOOK HAVEN!</h1> 
                <p className='text-white font-lora text-xs sm:text-lg md:text-xl'>Step into  a  peaceful sanctuary where stories come to life. In this tranquil corner of the web, explore 
a  vast collection of books, from cherished classics to hidden gems.Create your own reading refuge.  
           Let the calm embrace of literature guide you as you journey through words and worlds ,
                      all at your own pace!!</p> 
                 
               </div>
            </div>
          
           
        </header>
    </div>
  )
}

export default Header