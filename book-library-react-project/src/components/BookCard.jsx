import React from 'react' 
import { useNavigate } from 'react-router-dom';
 const BookCard = ({book, isloading}) => { 
  const navigate = useNavigate();

  const handleClick = () => {
    // Ensure that book.key exists before calling .replace
    if (book.id) {
      const filteredKey = book.id.replace(/\//g, "");
      navigate(`/book/${filteredKey}`, { state: { book } });
    } else {
      console.error("Book id is undefined");
    }
  }
   return ( 
     <li className='flex flex-col border rounded-lg p-2 shadow-md hover:shadow-xltransition-shadow bg-white transform hover:scale-105 transition-transform duration-300 ease-in-out' onClick={handleClick}> 
    {isloading ? (<p>Loading book details...</p>): (
       <> 
       <div className='book'>
  {/* Book Cover */}
  {book.volumeInfo.imageLinks?.thumbnail ? (
    <img 
      src={book.volumeInfo.imageLinks.thumbnail} 
      alt={book.volumeInfo.title || "No title"} 
      className='h-48 w-auto mx-auto' 
    />
  ) : (
    <p>No book cover found</p>
  )}

  {/* Book Title */}
  <h1 className='text-lg font-semibold mt-2 text-center'>
    {book.volumeInfo.title ? book.volumeInfo.title : (
      <p>Book Title not found</p>
    )}
  </h1>

  {/* Author Name */}
  <p className='mt-1 text-sm'>
    {book.volumeInfo.authors && book.volumeInfo.authors.length > 0 ? (
      <>Author: {book.volumeInfo.authors.join(', ')}</>
    ) : "Author cannot be found"}
  </p>

  {/* ISBN */}
  <p className='mt-1 text-sm'>
    {book.volumeInfo.industryIdentifiers ? (
      <>ISBN: {book.volumeInfo.industryIdentifiers.find(id => id.type === 'ISBN_13' || id.type === 'ISBN_10')?.identifier || "ISBN not available"}</>
    ) : "ISBN not found"}
  </p>

  {/* First Published Year */}
  <p className='mt-1 text-sm'>
    {book.volumeInfo.publishedDate ? (
      <>Published: {book.volumeInfo.publishedDate}</>
    ) : "Publish year not found"}
  </p>
</div>

       </>
     )} 
     </li>
 )}


    

export default BookCard;