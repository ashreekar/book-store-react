import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { booksData } from '../utils/bookData';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux"
import {BookNotFound} from "./export.components.js"

function BookDetails() {
  const booksData = useSelector(store => store.books.items);

  const bookid = useParams();

  const [book, setBook] = useState({});
  const [load, setLoad] = useState(true);
  const [bookNotFound,setBookNotfound]=useState(false);  // if book not exists this state will be updated

  useEffect(() => {
    // filetring the exact book by id found by params
    const filteredBook = booksData.filter((book) => {
      return book.id === Number(bookid.id);
    });
    if(filteredBook.length===0){
      setBookNotfound(true);
    }
    setBook(filteredBook.length===0?{}:filteredBook[0]);
    setLoad(false);
  }, [bookid])

// showing loading effect of book
  if (load) {
    return <div className='flex justify-center items-center h-screen'>
      <p className='text-xl text-gray-600'>Loading book details...</p>
    </div>
  }

  return (
    // if book not found state updated then render BookNotFound component
    bookNotFound?<BookNotFound/>:
    <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
      <div className='flex flex-col md:flex-row bg-white rounded-xl shadow-2xl p-6 md:p-10 border border-gray-100'>
        <div className='md:w-1/3 flex justify-center mb-6 md:mb-8 md:pr-10'>
          <img src={book.imageLinks.thumbnail} alt={book.title}
            className='w-full max-w-xs md:max-w-full h-auto object-cover roundeed-lg shadow-xl'
          />
        </div>

        <div className='md:w-2/3'>

          <h1 className='text-4xl font-extrabold text-gray-900 mb-2'>{book.title}</h1>

          <p className='text-xl font-medium text-gray-600 mb-6'><span className='text-blue-600'>{book.author}</span></p>

          <div className='flex items-center space-x-4 mb-6'>
            <div className='flex items-center text-lg bg-amber-500 text-white px-3 py-1 rounded-full font-bold shadow-md'>
              <span className='mr-1'>★</span>
              <span>{book.rating}</span>
            </div>
            <span className='text-sm text-gray-500'>Rating</span>

          </div>

          <h3 className='text-2xl font-semibold text-gray-800 border-b pb-2 mb-4'>Description</h3>
          <p className='text-gray-700 leading-relaxed mb-8'>{book.description}</p>

          <div className='space-y-3 text-lg'>
            <p className='flex items-center'>
              <span className='font-semibold text-gray-800 w-32'>Category:</span>
              <span className='text-gray-700 bg-gray-100 px-3 py-1 rounded-full text-sm font-medium'>
                {book.categories}
              </span>
            </p>
            <p className='flex items-center'>
              <span className='font-semibold text-gray-800 w-32'>Published:</span>
              <span className='text-gray-700'>{book.publishedDate}</span>
            </p>
          </div>

          <Link to={'/books/all'}>
            <button className='cursor-pointer mt-6 w-full md:w-auto px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-[1.01]'>
              Back to browse
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BookDetails