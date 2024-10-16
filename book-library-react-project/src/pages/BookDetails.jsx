import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'; 
const BookDetails = ()  => { 
  const location = useLocation(); 
  const navigate = useNavigate();
  const {book} = location.state; 
  if(!book){
    return <div>Book Details cannot be found</div>
  } 
  const backClick = () => { 
    navigate(-1);

  }
  return (
    <div className='bg-pink-200' >
      <h1 className='font-semibold text-blue-500 justify-center text-center text-3xl mb-4'>BookDetails</h1> 
      <div className='flex flex-col md:flex-row  border rounded-lg p-4 shadow-md hover:shadow-xltransition-shadow transform hover:scale-105 transition-transform duration-300 ease-in-out bg-gray-100'>
      {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail ? (
    <img 
      src={book.volumeInfo.imageLinks.thumbnail} 
      alt={book.volumeInfo.title || "No title"} 
      className='w-50 h-50 mr-6' 
    />
  ) : (
    <p>No book cover found</p>
  )}

  {/* Book Details */}
  <div className='flex flex-col'>
    {/* Book Title */}
    <h1 className='text-lg font-semibold'>
      {book.volumeInfo.title ? book.volumeInfo.title : (
        <p>Book Title not found</p>
      )}
    </h1>  

    {/* Author Name */}
    <p>
      {book.volumeInfo.authors && book.volumeInfo.authors.length > 0 ? (
        <>Author: {book.volumeInfo.authors[0]}</>
      ) : "Author cannot be found"}
    </p> 

    {/* Published Year */}
    <p>
      {book.volumeInfo.publishedDate ? (
        <>Published: {book.volumeInfo.publishedDate}</>
      ) : "Publish year not found"}
    </p> 

    {/* Publisher */}
    {book.volumeInfo.publisher ? (
      <p>Publisher: {book.volumeInfo.publisher}</p>
    ) : (
      <p>No Publishers available</p>
    )}

    {/* Number of Pages */}
    {book.volumeInfo.pageCount ? (
      <p>Number of Pages: {book.volumeInfo.pageCount}</p>
    ) : (
      <p>Number of Pages cannot be found</p>
    )}

    {/* Categories (Subjects) */}
    {book.volumeInfo.categories && book.volumeInfo.categories.length > 0 ? (
      <div>
        Subjects:
        <ul>
          {book.volumeInfo.categories.slice(0, 4).map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      </div>
    ) : (
      <p>Subjects cannot be found</p>
    )}

    {/* ISBN */}
    {book.volumeInfo.industryIdentifiers && book.volumeInfo.industryIdentifiers.length > 0 ? (
      <p>
        ISBN: {book.volumeInfo.industryIdentifiers[0].identifier}
      </p>
    ) : (
      <p>ISBN not available</p>
    )}
  </div>
</div>
 <button onClick={backClick} className='mt-4 bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded'>Back to Book List</button>

    </div>
  )
}

export default BookDetails;