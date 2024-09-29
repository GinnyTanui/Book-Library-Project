import React from 'react' 
import { useState , useEffect} from 'react' 
import { useNavigate } from 'react-router-dom'
import {BookSearch} from './BookSearch'

const SearchBar = ({ setBooks }) => {   
  console.log('SetBooks:', setBooks)
  const [query ,setQuery] = useState(''); 
 // const [books, setBooks] = useState([]); 
  const [type, setType] = useState('');  
  const [isloading, setIsLoading]= useState(false) 
  const navigate = useNavigate();
 
   const handleSearch = async (e) => { 
     e.preventDefault();  
     setIsLoading(true) 
     try{
       const results = await BookSearch(query,type);
       console.log(results)
       setBooks(results)  
       navigate('/booklist')
       
     }catch(error){
       console.log( "Error", error)
      }finally{
     setIsLoading(false);
      }
   }
  
  return ( 
    <div>
   <form className='flex justfiy-center w-full max-w-lg ' onSubmit={handleSearch}> 
  
   <input type="text" placeholder='Find your book.....' className='pl-10 pr-4  py-2 border border-gray-300 rounded-2xl w-full mt-4'value={query}  onChange={(e) => setQuery(e.target.value)}  />  
  
     <select onChange={(e) => setType(e.target.value)}> 
        <option value="title">Title</option> 
        <option value="author">Author</option> 
        <option value="ISBN">ISBN</option> 

    </select> 
    
    <button type="submit">
      Submit
    </button> 
    
   </form>  
   <div>
      {isloading ? <p>Loading...</p> : (
        <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-4'>
          {/* {books && books.length > 0 ? (
               books.map((book) => (
                <li key={book.key}>
                  <h1>{book.title ? book.title : "Book Title Not found"}</h1> 
                  <BookCard key={book.key} book={book}/>
                </li> 
             
               ))
          ): (
            <p className='text-white'>Go fuck yourself</p>
          )} */}
        </ul>
      ) }

      
   </div> 
  </div>

  )}


export default SearchBar;