import React from 'react' 
import { useNavigate } from 'react-router-dom';
 const BookCard = ({book, isloading}) => { 
   const navigate = useNavigate();
   const handleClick = () => { 
    const filteredKey = book.key.replace(/\//g, "")
    navigate(`/book/${filteredKey}`, {state: {book}});
   };
  
   return ( 
     <li className='flex flex-col border rounded-lg p-4 shadow-md hover:shadow-xltransition-shadow bg-white transform hover:scale-105 transition-transform duration-300 ease-in-out' onClick={handleClick}> 
    {isloading ? (<p>Loading book details...</p>): (
       <> 
        {book.cover_i ? (
      <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={book.title || "No title"} className='w-50 h-50'/>
    ): (
      <p>
        No book cover found
      </p>
    )} 
    <h1 className='text-lg font-semibold'>{book.title ? book.title : (
     <p>Book Title not found</p>
    )}</h1>  
    <p>{book.author_name && book.author_name.length > 0 ?(
      <>Author:{book.author_name[0]}</>
    ) : "Author cannot be found"}</p> 
    <p>{book.first_publish_year ? ( <>Published: {book.first_publish_year}</>):"Publish year not found" }</p> 

       </>
     )} 
     </li>
 )}


    

export default BookCard;