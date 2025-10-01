import React, { useEffect, useState } from 'react'
// import { booksData } from '../utils/bookData.js'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function LandingPage() {
  const booksData = useSelector(state => state.books.items);

  // different category and books mainly
  const [firstcategories, setfirstcategories] = useState("all");
  const [category, setcategory] = useState([]);
  const [books, setbooks] = useState([]);

  // Set categories that we need to show
  useEffect(() => {
    const uniqueCategory = new Set();

    booksData.forEach((book) => {
      uniqueCategory.add(book.categories.toLowerCase());
    })

    setcategory([...uniqueCategory]);
  }, [])

  // Fetching books based on change in categories in home page
  useEffect(() => {
    let newBooks = [];

    if (firstcategories === 'all') {
      newBooks = booksData.filter((_, index) => {
        // Filtering only 6 books
        return index <= 5;
      });

    } else {
      newBooks = booksData.filter((book, _) => {
        // Filtering only selected category books
        return book.categories.toLowerCase() === firstcategories.toLowerCase();
      });

      newBooks = newBooks.filter((_, index) => {
        // Filtering only 6 books
        return index <= 5;
      });
    }

    setbooks(newBooks);
  }, [category, firstcategories])

  return (
    <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]'>

      {/* Part One Welcome message */}
      <div className='text-center mb-4 py-4 border-b border-b-gray-100'>
        <h2 className='text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2'>Welcome to the Book Shop</h2>
        <p className='text-lg text-gray-600'> Fuel your imagination, no subscription required.</p>
      </div>

      {/* Part two categories */}
      <div className='mb-6'>
        <h3 className='text-xl font-semibold text-gray-700 mb-2 border-l-4 border-blue-500 pl-3'>Categories</h3>
        <ul className='flex flex-wrap gap-4'>
          <li className={firstcategories === 'all' ? 'cursor-pointer px-4 py-2 rounded-lg bg-blue-500 text-white font-medium shadow-md hover:bg-blue-600 transition' : 'cursor-pointer px-4 py-2 rounded-lg bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition'}
            onClick={() => setfirstcategories('all')}
          >All</li>

          {
            category.map((each, index) => {
              return index <= 4 && (
                <li key={each} onClick={() => setfirstcategories(each)}
                  className={firstcategories === each ? 'cursor-pointer px-4 py-2 rounded-lg bg-blue-500 text-white font-medium shadow-md hover:bg-blue-600 transition' : 'cursor-pointer px-4 py-2 rounded-lg bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition'}
                >{each}</li>
              );
            })
          }
        </ul>
      </div>

      {/* Part three each book based on category */}

      <div>
        <h3 className='text-2xl font-bold text-gray-900 mb-4'>Popular books in {firstcategories}</h3>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
          {
            books.map((book) => {
              return (
                <Link to={`/book/${book.id}`} key={book.title}>

                  <div key={book.title} className='bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 p-4 transition duration-300 hover:shadow-xl cursor-pointer flex flex-col h-full'>

                    <div className='mb-4 flex justify-center'>
                      <img src={book.imageLinks.smallThumbnail} alt={book.title}

                        className='h-48 w-full object-cover rounded-md shadow-md'
                      />
                    </div>

                    <div className='flex flex-col flex-grow'>

                      <h4 className='text-lg font-semibold text-gray-900 truncate'>{book.title}</h4>


                      <p className='text-sm text-gray-500 mt-1 truncate'>{book.author}</p>

                      <div className='flex items-center mt-auto pt-2 text-sm'>
                        <span className='text-amber-500 font-bold mr-1'>★</span>
                        <p>Rating: {book.rating}</p>
                      </div>
                    </div>

                  </div>
                </Link>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default LandingPage