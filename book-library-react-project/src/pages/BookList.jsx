import React, { useState } from 'react'
import SearchBar from '../components/SearchBar' 
import NavBar from '../components/NavBar'
import BookCard from '../components/BookCard'
const BookList = () => { 
    const [books, setBooks] = useState([]);
  return ( 
    <div className='bg-pink-400'>
        <NavBar/>
          <h1 className='font-bold italic text-blue-700 text-5xl justify-center text-center mt-6'>Hi there!Come find your book!</h1>
          <SearchBar setBooks={setBooks}/> 
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-4'>
              {books && books.length > 0 ? (
               books.map((book) => (
                
                  <BookCard key={book.key} book={book}/>
              
             
               ))
            ): (
            <p className='text-white justify-center text-center mx-auto'>No books related to your search</p>
            )}
          </div>
   
    </div>
  )
}

export default BookList;