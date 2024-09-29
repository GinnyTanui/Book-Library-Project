import React from 'react'
import NavBar from './NavBar' 
import Library from '../images/imaginny.jpg'
const  Header = () =>  {
  return (
    <div>
        <header>
            <NavBar/>  
            <div className='relative'>
               <img src={Library} alt='person reading a book' className='w-full h-1/4'/> 
               <div className='absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-40 p-4'>
                <h1 className='text-blue-300 text-5xl font-bold mb-4 italic'>WELCOME TO YOUR SERENE BOOK HAVEN!</h1> 
                <p className='text-white text-lg'>Step into  a  peaceful sanctuary where stories come to life. In this tranquil corner of the web, explore 
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