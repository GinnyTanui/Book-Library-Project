import React from 'react'; 
import { BrowserRouter as Router, Routes, Route,Link, BrowserRouter } from 'react-router-dom'; 
import HomePage from './pages/HomePage'; 
import BookDetails from './pages/BookDetails'; 
import Login from './pages/Login';
import BookList from './pages/BookList';

function App() {
  

  return (
    <> 
      <Router>
        <Routes>
            <Route path='/' element={<HomePage/>}/> 
            <Route path='/booklist' element={<BookList/>}/> 
            <Route path='/book/:id' element={<BookDetails/>}/>  
            <Route path='/login' element={<Login/>}/>
        </Routes>
      <h1 className="text-3xl font-bold underline text-red-500">
      </h1> 
      </Router> 
    </>
  )
}

export default App
