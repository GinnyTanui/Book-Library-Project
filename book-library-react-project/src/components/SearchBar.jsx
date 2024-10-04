import React from 'react' 
import { useState , useEffect} from 'react' 
import { useNavigate } from 'react-router-dom'
import {BookSearch} from './BookSearch'

const SearchBar = ({ setBooks , setSearchInitiated}) => {   
  console.log('SetBooks:', setBooks)
  const [query ,setQuery] = useState(''); 
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
        setSearchInitiated(true)
        navigate('/booklist')
       
      }catch(error){
        console.log( "Error", error)
       }finally{
      setIsLoading(false);
       }
    } 
 
  return ( 
    <div className='mx-auto w-full sm:w-1/2 p-4'>
    <form className='flex flex-col justify-center w-full gap-4 'onSubmit={handleSearch}>
  
   <input type="text" placeholder='Find your book.....' className='w-full sm:w-2/3 pl-4 py-2 border border-gray-400 rounded-lg'value={query}  onChange={(e) => setQuery(e.target.value)}  />  
  
     <select onChange={(e) => setType(e.target.value)} className='mr-4'> 
        <option value="title">Author</option> 
        <option value="author">Title</option> 

    </select> 
    
    <button type="submit" className='w-full sm:w-1/4 bg-blue-500 hover:bg-blue-700 text-white py-2 rounded-lg'>
      Search
    </button> 
    
   </form>  
   <div>
      {isloading ? <p>Loading...</p> : (
        <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-4'>
         
        </ul>
      ) }

      
   </div> 
  </div>

  )}


export default SearchBar;