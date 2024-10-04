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
      {book.cover_i ? (
      <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={book.title || "No title"} className='w-50 h-50 mr-6'/>
    ): (
      <p>
        No book cover found
      </p>
    )} 
    <div className='flex flex-col'>
       <h1 className='text-lg font-semibold'>{book.title ? book.title : (
         <p>Book Title not found</p>
        )}</h1>  
       <p>{book.author_name && book.author_name.length > 0 ?(
        <>Author:{book.author_name[0]}</>
      ) : "Author cannot be found"}</p> 
      <p>{book.first_publish_year ? ( <>Published: {book.first_publish_year}</>):"Publish year not found" }</p> 
      {book.publisher && book.publisher.length > 0 ? <p>Publisher: {book.publisher[0]}</p>: (<p>No Publishers available</p>)} 
      {book.number_of_pages_median ? (<p>Number of Pages: {book.number_of_pages_median}</p>): (
              <p> Number of Pages cannot be found</p>
      )}  
      
      {book.subject && book.subject.length > 0 ? (
        <div>
          Subjects:
            <ul>
              {book.subject.slice(0,4).map((subject, index) => (
                <li key={index}>{subject}</li>
              ))}
            </ul>
        </div>
      ): (
        <p>Subjects cannot be found</p>
      )} 
      {book.isbn && book.isbn.length > 0 ? (
        <p>ISBN:{book.isbn[0]}</p>
      ):(
        <p>ISBN not available</p>
      )}
    </div>  
    
      </div> 
      <button onClick={backClick} className='mt-4 bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded'>Back to Book List</button>

    </div>
  )
}

export default BookDetails;