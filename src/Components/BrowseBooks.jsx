import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { booksData } from '../utils/bookData.js';

function BrowseBooks() {
  const categoryParam = useParams(); // getting category based on Param

  const [categories, setCategories] = useState([]);
  const [filterBooks, setFilterBooks] = useState([]);
  const [seachValue, setSearchValue] = useState("");
  const [renderBooks, setRenderBooks] = useState(filterBooks);
  const [isFiltervissible, setisFiltervissible] = useState(false);

  useEffect(() => {
    const uniqueCategory = new Set();

    booksData.forEach((book) => {
      uniqueCategory.add(book.categories.split().join('').toLowerCase());
    })

    setCategories([...uniqueCategory]);
  }, [])

  useEffect(() => {
    let newBooks = [];

    if (categoryParam.category === 'all') {
      newBooks = booksData;
    } else {
      newBooks = booksData.filter((book, _) => {
        // Filtering only selected category books
        return book.categories.split().join('').toLowerCase() === categoryParam.category.split().join('').toLowerCase();
      });
    }

    // setting render books on 'all' to all so that every book renders
    setFilterBooks(newBooks);
    setRenderBooks(newBooks);
  }, [categoryParam])


  function handleSearch() {
    if (seachValue === "") {
      setRenderBooks(filterBooks);
      return;
    }

    const searched = filterBooks.filter((book) => {
      return book.title.toLowerCase().includes(seachValue.toLowerCase()) || book.author.toLowerCase().includes(seachValue.toLowerCase());
    })

    setSearchValue("");
    setRenderBooks(searched);
  }


  return (
    <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
      <div className='bg-white p-6 rounded-xl shadow-md mb-6 border border-gray-100'>
        <h2 className='text-2xl font-bold text-gray-900 mb-4'>Search books by name or author name</h2>

        <div className='flex flex-col sm:flex-row gap-4 mb-6 items-center'>
          <div className='flex-grow w-full sm:w-auto flex'>
            <input type="text"
              onChange={(e) => setSearchValue(e.target.value)} value={seachValue}
              className='w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150'
              placeholder='search by book name or author name'
            />
            <button
              onClick={handleSearch}
              className='px-6 py-2 bg-blue-600 text-white font-medium rounded-r-lg hover:bg-blue-700 transition duration-150 shadow-md'
            >Search</button>
          </div>
        </div>

           <p className={'flex items-center space-x-2 text-base font-medium text-gray-700 mb-2' }>Showing results for {categoryParam.category}</p>

        <div className='mt-2'>

          <button className={'flex items-center space-x-2 text-base font-medium text-gray-700 hover:text-blue-600 transition duration-150 mb-3 focus:outline-none cursor-pointer' } onClick={()=>setisFiltervissible(!isFiltervissible)}>{isFiltervissible?"Show filter":"Hide filter"}</button>

          <div className={`flex flex-wrap gap-3 ${!isFiltervissible ?'visible': 'hidden' }`}>
            <Link to={'../books/all'}>
              <div className={'px-4 py-2 rounded-full text-sm font-medium transition duration-200 shadow-sm '+(categoryParam.category ==='all'?"bg-blue-600 text-white hover:bg-blue-300":"bg-gray-100 text-gray-700 hover:bg-gray-200")}>all</div>
            </Link>

            {
              categories.map((category) => {
                return (
                  // Go back to the home route and add route again
                  <Link to={`../books/${category}`} key={category}>
                    <div className={'px-4 py-2 rounded-full text-sm font-medium transition duration-200 shadow-sm '+(categoryParam.category ===category?"bg-blue-600 text-white hover:bg-blue-300":"bg-gray-100 text-gray-700 hover:bg-gray-200")}>{category}</div>
                  </Link>
                )
              })
            }
          </div>
        </div>
      </div>

      <div>
        <h3 className='text-xl font-bold text-gray-800 mb-6'>Found {renderBooks.length} reults</h3>

        {
          renderBooks.length > 0 ?
            (
              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
                {
                  renderBooks.map((book) => {
                    return (
                      // Go back to the home route and add route again
                      <Link to={`../book/${book.id}`}>
                        <div key={book.id} className='bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 p-4 transition duration-300 hover:shadow-xl cursor-pointer'>
                          <div className='mb-4 flex justify-center'>
                            <img src={book.imageLinks.smallThumbnail} alt={book.title}
                              className='w-full h-auto object-cover rounded-md shadow-md'
                              height={"200px"}
                              width={"180px"}
                            />
                          </div>

                          <h4 className='text-lg font-semibold text-gray-900 truncate'>{book.title}</h4>
                          <p className='text-sm text-gray-500 mt-1'>{book.author}</p>

                          <div className='flex items-center mt-2 text-sm'>
                            <span className='text-amber-500 font-bold mr-1'>
                              ★
                            </span>
                            <p className='text-gray-700'>Rating: {book.rating}</p>
                          </div>
                        </div>
                      </Link>
                    )
                  })
                }
              </div>
            ) :
            (
              <div
                className='ext-center py-16 bg-white rounded-xl shadow-md border border-gray-100'>
                <p className='text-2xl font-semibold text-gray-700 mb-2'>No books found.</p>
                <p className='text-gray-500'>Try adjusting your search query or category filter.</p>
              </div>
            )
        }
      </div>
    </div>
  )
}

export default BrowseBooks