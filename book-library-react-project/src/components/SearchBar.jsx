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
  //  useEffect(() => {
  //   const handleSearch = async () => {
  //     if(query === "" && type === '') 
  //       return; 
  //     setIsLoading(true); 
  //     try{
  //       const results = await BookSearch(query,type);
  //       console.log(results)
  //       setBooks(results)  
  //       navigate('/booklist')
        
  //     }catch(error){
  //       console.log( "Error", error)
  //      }finally{
  //     setIsLoading(false);
  //      }
  //   }; 
  //   handleSearch();
  //  }, [query, type, setBooks,navigate])
  
  return ( 
    <div className='mx-auto w-1/2'>
    <form className='flex justfiy-center w-full max-w-lg 'onSubmit={handleSearch}>
  
   <input type="text" placeholder='Find your book.....' className='pl-10 pr-4  py-2 border border-gray-300 rounded-2xl w-full mt-4'value={query}  onChange={(e) => setQuery(e.target.value)}  />  
  
     <select onChange={(e) => setType(e.target.value)} className='mr-4'> 
        <option value="title">Title</option> 
        <option value="author">Author</option> 
        <option value="ISBN">ISBN</option> 

    </select> 
    
    <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-lora rounded-2xl'>
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